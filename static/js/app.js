// При загрузке общего файла элементы страницы не ищем.
// Функции вызываются только кнопками страницы Егора Данилина.
let egordToastCount = 0;

function egordSetTheme(themeClass, placeName) {
  document.body.setAttribute("class", themeClass);
  document.querySelector("#egord-place").textContent = placeName;
}

function egordChooseTavern() {
  egordSetTheme("egord-tavern", "средневековая таверна");
}

function egordChooseVikings() {
  egordSetTheme("egord-vikings", "чертог викингов");
}

function egordChooseEgypt() {
  egordSetTheme("egord-egypt", "Древний Египет");
}

function egordRaiseMug() {
  egordToastCount = egordToastCount + 1;
  document.querySelector("#egord-count").textContent = egordToastCount;

  // Условия и методы dialog добавлены с разрешения преподавателя.
  if (egordToastCount === 5) {
    egordShowToastDialog("Вы уже хорошенький", "");
  }

  if (egordToastCount === 10) {
    egordShowToastDialog("Пора завязывать..", "");
  }

  if (egordToastCount === 15) {
    egordShowToastDialog("Вы спились", "Статус: Успешно");
  }
}

function egordShowToastDialog(message, status) {
  document.querySelector("#egord-dialog-title").textContent = message;
  document.querySelector("#egord-dialog-status").textContent = status;
  document.querySelector("#egord-toast-dialog").showModal();
}

function egordCloseToastDialog() {
  document.querySelector("#egord-toast-dialog").close();
}
