const $iframe = document.querySelector('#iframe');
const $covers = document.querySelectorAll('.cover');

const setSrcIframe = (cover) => $iframe.setAttribute('src', cover.getAttribute('data-root'));

$covers.forEach((cover, i) => {
  if (i === 0) setSrcIframe(cover);
  cover.addEventListener('click', () => setSrcIframe(cover))
})
