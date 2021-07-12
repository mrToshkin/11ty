const $previewDescription = document.querySelector('.preview__description');
const $previewCover = document.querySelector('.preview__cover');
const $buttons = document.querySelectorAll('.releases__button');

const setAsideData = (button) => {
  $previewDescription.setAttribute('src', button.getAttribute('data-root'));
  $previewCover.setAttribute('src', button.getAttribute('data-path'));
};

$buttons.forEach((button, i) => {
  if (i === 0) setAsideData(button);
  button.addEventListener('click', () => setAsideData(button))
})
