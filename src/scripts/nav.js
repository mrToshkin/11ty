const $nav = document.querySelector('#nav');
const $pageContent = document.querySelector('#page-content');

const setContentMarginTop = () => {
  $pageContent.setAttribute('style', `margin-top: ${$nav.offsetHeight}px; min-height: calc(100vh - ${$nav.offsetHeight}px)`)
}

setContentMarginTop()
window.addEventListener('resize', setContentMarginTop)
