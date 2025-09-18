// const board = document.querySelector('.game-board');
// const restartBtn = document.getElementById('restart');

// // const icons = ['🍎', '🍌', '🍓', '🍇', '🍍', '🥝', '🍒', '🍉'];
// const icons = ['<h1>', '<img>', '🍓', '🍇', '🍍', '🥝', '🍒', '🍉'];
// let cards = [];
// let firstCard = null;
// let secondCard = null;
// let lockBoard = false;

// function startGame() {
//   // Reset board
//   board.innerHTML = '';
//   firstCard = null;
//   secondCard = null;
//   lockBoard = false;

//   // Xáo trộn thẻ
//   cards = [...icons, ...icons];
//   cards.sort(() => 0.5 - Math.random());

//   // Tạo thẻ mới
//   cards.forEach(icon => {
//     const card = document.createElement('div');
//     card.classList.add('card');
//     card.dataset.icon = icon;
//     card.textContent = '?';
//     board.appendChild(card);
//   });
// }

// // Xử lý click
// board.addEventListener('click', e => {
//   const clicked = e.target;
//   if (!clicked.classList.contains('card') || lockBoard) return;
//   if (clicked === firstCard) return;

//   clicked.classList.add('open');
//   clicked.textContent = clicked.dataset.icon;

//   if (!firstCard) {
//     firstCard = clicked;
//   } else {
//     secondCard = clicked;
//     checkMatch();
//   }
// });

// function checkMatch() {
//   if (firstCard.dataset.icon === secondCard.dataset.icon) {
//     firstCard.classList.add('matched');
//     secondCard.classList.add('matched');
//     resetTurn();
//   } else {
//     lockBoard = true;
//     setTimeout(() => {
//       firstCard.classList.remove('open');
//       secondCard.classList.remove('open');
//       firstCard.textContent = '?';
//       secondCard.textContent = '?';
//       resetTurn();
//     }, 1000);
//   }
// }

// function resetTurn() {
//   [firstCard, secondCard] = [null, null];
//   lockBoard = false;
// }

// // Restart button
// restartBtn.addEventListener('click', startGame);

// // Khởi động lần đầu
// startGame();


const board = document.querySelector('.game-board');
const restartBtn = document.getElementById('restart');

// Danh sách cặp thẻ HTML
const pairs = [
  { open: "<h1>", close: "</h1>" },
  { open: "<p>", close: "</p>" },
  { open: "<ul>", close: "</ul>" },
  { open: "<li>", close: "</li>" },
  { open: "<div>", close: "</div>" },
  { open: "<html>", close: "</html>" },
  { open: "<head>", close: "</head>" },
  { open: "<title>", close: "</title>" },
  { open: "<meta>", close: "</meta>" },
  { open: "<body>", close: "</body>" },
  { open: "<span>", close: "</span>" },
  { open: "<ol>", close: "</ol>" },
  { open: "<label>", close: "</label>" },
  { open: "<button>", close: "</button>" },
  { open: "<a>", close: "</a>" },
  { open: "<tr>", close: "</tr>" },
  { open: "<script>", close: "</script>" },
  { open: "<iframe>", close: "</iframe>" },
  { open: "<td>", close: "</td>" },
  { open: "<th>", close: "</th>" }
];

let cards = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;

function startGame() {
  // Reset board
  board.innerHTML = '';
  firstCard = null;
  secondCard = null;
  lockBoard = false;

  // Tạo danh sách thẻ (mở và đóng)
  cards = [];
  pairs.forEach(p => {
    cards.push({ value: p.open, pair: p.close });
    cards.push({ value: p.close, pair: p.open });
  });

  // Xáo trộn
  cards.sort(() => 0.5 - Math.random());

  // Render ra board
  cards.forEach(cardData => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = cardData.value;
    card.dataset.pair = cardData.pair;
    card.textContent = '?';
    board.appendChild(card);
  });
}

// Xử lý click
board.addEventListener('click', e => {
  const clicked = e.target;
  if (!clicked.classList.contains('card') || lockBoard) return;
  if (clicked === firstCard) return;

  clicked.classList.add('open');
  clicked.textContent = clicked.dataset.value;

  if (!firstCard) {
    firstCard = clicked;
  } else {
    secondCard = clicked;
    checkMatch();
  }
});

function checkMatch() {
  if (firstCard.dataset.pair === secondCard.dataset.value) {
    // Match
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    resetTurn();
  } else {
    // Không khớp → úp lại
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove('open');
      secondCard.classList.remove('open');
      firstCard.textContent = '?';
      secondCard.textContent = '?';
      resetTurn();
    }, 1000);
  }
}

function resetTurn() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

// Restart button
restartBtn.addEventListener('click', startGame);

// Khởi động lần đầu
startGame();
