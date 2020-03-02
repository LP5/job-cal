function calculate() {
  money = document.getElementById("money").value;
  lessons = document.getElementById("lessons").value * 340;
  document.getElementById("total").value = Number(money) + Number(lessons);
}
