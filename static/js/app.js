// Находим кнопку и счетчик по их ID
const energyBtn = document.getElementById('add-energy-btn');
const counterDisplay = document.getElementById('counter');

let energyCount = 0;

// При клике прибавляем 1 и обновляем текст
energyBtn.addEventListener('click', function() {
    energyCount += 1;
    counterDisplay.textContent = energyCount;

    if (energyCount === 10) {
        alert("Осторожно! Превышена студенческая норма кофеина!");
    }
    if (energyCount === 15) {
        alert("Осторожно! Отключение сознания!");
    }
    if (energyCount === 20) {
        alert("Осторожно! смерть!");
    }
});