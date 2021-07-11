const $preview = document.querySelector('.releases__preview');
const $buttons = document.querySelectorAll('.releases__button');

const setSrcIframe = (button) => $preview.setAttribute('src', button.getAttribute('data-root'));

$buttons.forEach((button, i) => {
  if (i === 0) setSrcIframe(button);
  button.addEventListener('click', () => setSrcIframe(button))
})
