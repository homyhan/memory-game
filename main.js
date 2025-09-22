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


// đã push
// const board = document.querySelector('.game-board');
// const restartBtn = document.getElementById('restart');

// // Danh sách cặp thẻ HTML
// const pairs = [
//   { open: "<h1>", close: "</h1>" },
//   { open: "<p>", close: "</p>" },
//   { open: "<ul>", close: "</ul>" },
//   { open: "<li>", close: "</li>" },
//   { open: "<div>", close: "</div>" },
//   { open: "<html>", close: "</html>" },
//   { open: "<head>", close: "</head>" },
//   { open: "<title>", close: "</title>" },
//   { open: "<meta>", close: "</meta>" },
//   { open: "<body>", close: "</body>" },
//   { open: "<span>", close: "</span>" },
//   { open: "<ol>", close: "</ol>" },
//   { open: "<label>", close: "</label>" },
//   { open: "<button>", close: "</button>" },
//   { open: "<a>", close: "</a>" },
//   { open: "<tr>", close: "</tr>" },
//   { open: "<script>", close: "</script>" },
//   { open: "<iframe>", close: "</iframe>" },
//   { open: "<td>", close: "</td>" },
//   { open: "<th>", close: "</th>" }
// ];

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

//   // Tạo danh sách thẻ (mở và đóng)
//   cards = [];
//   pairs.forEach(p => {
//     cards.push({ value: p.open, pair: p.close });
//     cards.push({ value: p.close, pair: p.open });
//   });

//   // Xáo trộn
//   cards.sort(() => 0.5 - Math.random());

//   // Render ra board
//   cards.forEach(cardData => {
//     const card = document.createElement('div');
//     card.classList.add('card');
//     card.dataset.value = cardData.value;
//     card.dataset.pair = cardData.pair;
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
//   clicked.textContent = clicked.dataset.value;

//   if (!firstCard) {
//     firstCard = clicked;
//   } else {
//     secondCard = clicked;
//     checkMatch();
//   }
// });

// function checkMatch() {
//   if (firstCard.dataset.pair === secondCard.dataset.value) {
//     // Match
//     firstCard.classList.add('matched');
//     secondCard.classList.add('matched');
//     resetTurn();
//   } else {
//     // Không khớp → úp lại
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
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');

// Danh sách cặp thẻ HTML và công dụng
const pairs = [
  { tag: "<h1>", desc: "Tiêu đề lớn nhất" },
  { tag: "<p>", desc: "Đoạn văn bản" },
  { tag: "<a>", desc: "Liên kết (hyperlink)" },
  { tag: "<img>", desc: "Chèn hình ảnh" },
  { tag: "<ul>", desc: "Danh sách không thứ tự" },
  { tag: "<ol>", desc: "Danh sách có thứ tự" },
  { tag: "<li>", desc: "Mục trong danh sách" },
  { tag: "<table>", desc: "Tạo bảng" },
  { tag: "<tr>", desc: "Hàng trong bảng" },
  { tag: "<td>", desc: "Ô dữ liệu trong bảng" },
  { tag: "<th>", desc: "Ô tiêu đề trong bảng" },
  { tag: "<br>", desc: "Xuống dòng" },
  { tag: "<hr>", desc: "Kẻ 1 đường ngang" },
  { tag: "<span>", desc: "Định dạng một phần nhỏ trong văn bản." },
  { tag: "<button>", desc: "Nút bấm" },
  { tag: "<input>", desc: "Ô nhập dữ liệu (text, number, password, checkbox...)" },
  { tag: "<iframe>", desc: "Nhúng trang web hoặc video khác vào" },
  { tag: "<textarea>", desc: "Ô nhập nhiều dòng" },
  { tag: "<form>", desc: "Tạo biểu mẫu nhập dữ liệu" },
  { tag: "<div>", desc: "Thẻ chia khối, bố cục" },
];

let cards = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;

function startGame() {
  board.innerHTML = '';
  firstCard = null;
  secondCard = null;
  lockBoard = false;

  // Tạo danh sách thẻ (tag và mô tả)
  cards = [];
  pairs.forEach(p => {
    cards.push({ value: p.tag, pair: p.desc, type: "tag" });
    cards.push({ value: p.desc, pair: p.tag, type: "desc" });
  });

  // Xáo trộn
  cards.sort(() => 0.5 - Math.random());

  // Render ra board
  cards.forEach(cardData => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = cardData.value;
    card.dataset.pair = cardData.pair;
    card.dataset.type = cardData.type;
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

  if (clicked.dataset.type === "desc") {
    // Nếu là mô tả thì hiện chữ "desc" trên card, và mở modal để xem chi tiết
    clicked.textContent = "desc";
    showModal(clicked.dataset.value);
  } else {
    // Nếu là tag thì hiện trực tiếp
    clicked.textContent = clicked.dataset.value;
  }

  if (!firstCard) {
    firstCard = clicked;
  } else {
    secondCard = clicked;
    checkMatch();
  }
});

function checkMatch() {
  if (firstCard.dataset.pair === secondCard.dataset.value ||
      secondCard.dataset.pair === firstCard.dataset.value) {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    resetTurn();
  } else {
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

// Modal functions
function showModal(text) {
  modalContent.textContent = text;
  modal.style.display = 'flex';
}

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Restart
restartBtn.addEventListener('click', startGame);
startGame();
