var startTime;
var timerInterval;

function start() {
  startTime = Date.now();
  timerInterval = setInterval(updateTime, 1000);
}

function stop() {
  clearInterval(timerInterval);
}

function updateTime() {
  var currentTime = Date.now() - startTime;
  var seconds = Math.floor(currentTime / 1000) % 60;
  var minutes = Math.floor(currentTime / 1000 / 60) % 60;
  var hours = Math.floor(currentTime / 1000 / 3600);

  // Formatear los valores
  var formattedTime = pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2);

  var timeElement = document.querySelector('.time');
  timeElement.textContent = formattedTime;
}

function pad(value, width) {
  value = value.toString();
  while (value.length < width) {
    value = '0' + value;
  }
  return value;
}