const $soundcloud = document.querySelector('.soundcloud');
const $button = document.querySelector('.button-open-soundcloud');

$button.addEventListener('click', () => {
  $soundcloud.classList.toggle('soundcloud--opened')
})