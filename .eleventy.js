const htmlmin = require('html-minifier');
const markdown = require('markdown-it')({ html: true });
const fg = require('fast-glob');


const htmlminConfig = { removeComments: true, collapseWhitespace: true }

module.exports = (config) => {
  config.addPassthroughCopy('src/releases/**/*.jpg');
  config.addPairedShortcode('markdown', (content) => {
    return markdown.render(content);
  });

  config.addFilter('htmlmin', (value) => (
    htmlmin.minify(value, htmlminConfig)
  ));

  config.addTransform('htmlmin', (content, outputPath) => {
    if(outputPath && outputPath.endsWith('.html')) {
      return htmlmin.minify(content, htmlminConfig);
    }

    return content;
  });

  config.addCollection('covers', () => fg
    .sync(['src/releases/**/*.jpg'])
    .map(path => path.replace('src/', ''))
  );

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
