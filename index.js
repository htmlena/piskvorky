const gameButtonElm = document.querySelector('.game-buttons');
const activePlayerElm = document.querySelector('.active-player');

let whoseTurn = 'circle';

gameButtonElm.addEventListener('click', (event) => {
  const pressedButton = event.target;

  if (whoseTurn === 'circle') {
    pressedButton.classList.add('field-circle');
    activePlayerElm.src = 'img/cross.svg';
    pressedButton.disabled = true;
    whoseTurn = 'cross';
  } else if (whoseTurn === 'cross') {
    pressedButton.classList.add('field-cross');
    activePlayerElm.src = 'img/circle.svg';
    pressedButton.disabled = true;
    whoseTurn = 'circle';
  }
});
