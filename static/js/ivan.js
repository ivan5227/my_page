// 1. Раскрытие свитка ("Секрет")
const revealBtn = document.querySelector("#reveal-btn");
const secretHobby = document.querySelector("#secret-hobby");

if (revealBtn && secretHobby) {
    revealBtn.addEventListener("click", () => {
        const isHidden = secretHobby.style.display === "none";
        secretHobby.style.display = isHidden ? "block" : "none";
        revealBtn.textContent = isHidden ? "Свернуть свиток" : "Раскрыть свиток";
    });
}

// 2. МИНИ-ИГРА: Угадай число 

const SECRET_NUMBER = 27;
const guessInput = document.querySelector("#guess-input");
const guessBtn = document.querySelector("#guess-btn");
const gameHint = document.querySelector("#game-hint");
const attemptsCount = document.querySelector("#attempts-count");
const restartBtn = document.querySelector("#restart-game");

let attempts = 0;
let gameOver = false;

// Функция сброса игры
function resetGame() {
    attempts = 0;
    gameOver = false;
    attemptsCount.textContent = "0";
    gameHint.textContent = "";
    gameHint.className = "game-hint";
    guessInput.value = "";
    guessInput.disabled = false;
    guessBtn.disabled = false;
    restartBtn.style.display = "none";
    guessInput.focus();
}

// Основная функция проверки
function checkGuess() {
    if (gameOver) return;

    const value = parseInt(guessInput.value, 10);

    // Проверка на корректность ввода
    if (isNaN(value) || value < 1 || value > 100) {
        gameHint.textContent = "Введи число от 1 до 100 🙏";
        gameHint.className = "game-hint hint-cold";
        return;
    }

    attempts++;
    attemptsCount.textContent = attempts;

    // ЛОГИКА ИГРЫ
    if (value === SECRET_NUMBER) {
        gameHint.textContent = `🎉 正解! Это 27! Ты угадал за ${attempts} ${getAttemptWord(attempts)}!`;
        gameHint.className = "game-hint hint-win";
        gameOver = true;
        guessInput.disabled = true;
        guessBtn.disabled = true;
        restartBtn.style.display = "inline-block";
    } else if (value === 28 || value === 26) {
        gameHint.textContent = value === 28 ? "🔥 Очень близко! Чуть-чуть меньше." : "🔥 Очень близко! Чуть-чуть больше.";
        gameHint.className = "game-hint hint-hot";
    } else if (value > SECRET_NUMBER) {
        gameHint.textContent = "Моё число меньше ↓";
        gameHint.className = "game-hint hint-warm";
    } else {
        gameHint.textContent = "Моё число больше ↑";
        gameHint.className = "game-hint hint-warm";
    }

    guessInput.value = "";
    guessInput.focus();
}

// Склонение слова "попытка"
function getAttemptWord(n) {
    if (n % 10 === 1 && n % 100 !== 11) return "попытку";
    if ([2,3,4].includes(n % 10) && ![12,13,14].includes(n % 100)) return "попытки";
    return "попыток";
}

// Обработчики событий
if (guessBtn && guessInput && gameHint) {
    guessBtn.addEventListener("click", checkGuess);

    // Проверка по Enter
    guessInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            checkGuess();
        }
    });

    // Кнопка "Начать заново"
    if (restartBtn) {
        restartBtn.addEventListener("click", resetGame);
    }
}

// 3. СМЕНА ТЕМЫ 
const themeBtn = document.querySelector("#theme");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("warm");
    });
}