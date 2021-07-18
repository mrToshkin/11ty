const htmlmin = require('html-minifier');
const fg = require('fast-glob');

const htmlminConfig = { removeComments: true, collapseWhitespace: true }
const covers = fg
  .sync(['src/releases/**/*.{jpg,png}'])
  .map(item => {
    const path = item.replace('src/', '')
    const root = path.split('/')
    root.pop()

    return { path, root: root.join('/') }
  })

module.exports = (config) => {
  config.addFilter('htmlmin', (value) => (
    htmlmin.minify(value, htmlminConfig)
  ));

  config.addTransform('htmlmin', (content, outputPath) => {
    if(outputPath && outputPath.endsWith('.html')) {
      return htmlmin.minify(content, htmlminConfig);
    }

    return content;
  });

  config.addCollection('covers', () => covers);

  config.addFilter('console', (value) => console.log(value));

  config.addFilter('withCovers', (collection) => (
    collection
      .map((release) => ({ ...release, covers: covers.filter(cover => release.url === `/${cover.root}/`)}))
      .sort((a, b) => b.data.year - a.data.year)
  ));

  config.setBrowserSyncConfig({
    files: ['build/**/*'],
    open: true,
  })

  return {
    dir: {
      input: 'src',
      output: 'build',
      includes: 'includes',
      layouts: 'layouts'
    },
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,
    templateFormats: [
      'md', 'njk'
    ],
  };
};
