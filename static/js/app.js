const energyBtn = document.getElementById('add-energy-btn');
const counterDisplay = document.getElementById('counter');
let energyCount = 0;

energyBtn.addEventListener('click', function() {
    energyCount += 1;
    counterDisplay.textContent = energyCount;

    if (energyCount === 10) {
        alert("Осторожно! Превышена студенческая норма золота!");
    }
    if (energyCount === 15) {
        alert("Осторожно! Отключение сознания!");
    }
    if (energyCount === 20) {
        alert("Осторожно! смерть!");
    }
});