
// Lấy phần tử
const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');
const highscoreDisplay = document.querySelector('.highscore');
const numberDisplay = document.querySelector('.number');
const guessInput = document.querySelector('.guess');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (messageText) {
  message.textContent = messageText;
};

// Nút xử lý
checkBtn.addEventListener('click', function () {
  const guess = Number(guessInput.value);

  // Khi không có dữ liệu
  if (!guess) {
    displayMessage('⛔️ No number!');

  // Khi người chơi thắng
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    numberDisplay.textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';
    numberDisplay.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      highscoreDisplay.textContent = highscore;
    }

  // Khi người chơi thua
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreDisplay.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreDisplay.textContent = 0;
    }
  }
});

// Nút đặt lại trò chơi
againBtn.addEventListener('click', function () {
  // Restore initial values
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  
  // Làm lại giao diện
  displayMessage('Start guessing...');
  scoreDisplay.textContent = score;
  numberDisplay.textContent = '?';
  guessInput.value = '';

  // Làm lại styles
  document.body.style.backgroundColor = '#222';
  numberDisplay.style.width = '15rem';
});
