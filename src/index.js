document.getElementById('btnFirst').onclick = function () {
  document.getElementById('content__first').classList.toggle('content-option');
  document.getElementById('first-content').classList.toggle('rotate-picture');
  this.classList.toggle('rotate');
};
document.getElementById('btnSecond').onclick = function () {
  document.getElementById('content__second').classList.toggle('content-option');
  document.getElementById('second-content').classList.toggle('rotate-picture');
  this.classList.toggle('rotate');
};
document.getElementById('btnThird').onclick = function () {
  document.getElementById('content__third').classList.toggle('content-option');
  document.getElementById('third-content').classList.toggle('rotate-picture');
  this.classList.toggle('rotate');
};
