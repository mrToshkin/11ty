const $releases = document.querySelector('.releases');
const $footer = document.querySelector('.footer');
const $nav = document.querySelector('#nav');
const $pageContent = document.querySelector('#page-content');

const setContentMarginTop = () => {
  $pageContent.setAttribute('style', `margin-top: ${$nav.offsetHeight}px; min-height: calc(100vh - ${$nav.offsetHeight}px)`)
  $releases.setAttribute('style', `min-height: calc(100vh - ${$nav.offsetHeight}px - ${$footer.offsetHeight}px)`)
}

setContentMarginTop()
window.addEventListener('resize', setContentMarginTop)
