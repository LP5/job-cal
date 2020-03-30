function calculate() {
  money = Number(document.getElementById("money").value);
  lessons = Number(document.getElementById("lessons").value * 350);
  document.getElementById("total").value = money + lessons;
}
