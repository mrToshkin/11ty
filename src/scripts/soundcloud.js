const $soundcloud = document.querySelector('.soundcloud__player');
const $button = document.querySelector('.soundcloud__button');

$button.addEventListener('click', () => {
  $soundcloud.classList.toggle('soundcloud__player--opened')
  $button.classList.toggle('soundcloud__button--opened')
})