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
    const isWinning = isWinningMove(pressedButton);
    if (isWinning) {
      setTimeout(() => alert('Circle won'), 200);
    }
  } else if (whoseTurn === 'cross') {
    pressedButton.classList.add('field-cross');
    activePlayerElm.src = 'img/circle.svg';
    pressedButton.disabled = true;
    whoseTurn = 'circle';
    const isWinning = isWinningMove(pressedButton);
    if (isWinning) {
      setTimeout(() => alert('Cross won'), 200);
    }
  }
});

const getSymbol = (field) => {
  if (field.classList.contains('field-cross')) {
    return 'cross';
  } else if (field.classList.contains('field-circle')) {
    return 'circle';
  }
};

const boardSize = 10;
const fields = document.querySelectorAll('.single-game-button');
const getField = (row, column) => fields[row * boardSize + column];

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let inRow = 1;
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};
