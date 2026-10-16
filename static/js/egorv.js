const items = document.querySelectorAll(".backpack li");
const packedEl = document.querySelector("#packed");
const doneEl = document.querySelector("#backpack-done");

document.querySelector("#total").textContent = items.length;

items.forEach(function (item) {
  item.addEventListener("click", function () {
    item.classList.toggle("packed");

    const packed = document.querySelectorAll(".backpack li.packed").length;
    packedEl.textContent = packed;

    if (packed === items.length) {
      doneEl.textContent = "Всё собрано — можно выходить! 🏕️";
    } else {
      doneEl.textContent = "";
    }
  });
});