function calculate() {
  money = document.getElementById("money").value;
  lessons = document.getElementById("lessons").value * 350;
  document.getElementById("total").value = Number(money) + Number(lessons);
}
