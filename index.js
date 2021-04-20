let whoseTurn = 'circle';

const gameButtonElm = document.querySelector('.game-buttons');
gameButtonElm.addEventListener('click', (event) => {
  if (whoseTurn === 'circle') {
    event.target.classList.add('field-circle');
  } else if (whoseTurn === 'cross') {
    event.target.classList.add('field-cross');
  }
});
