// your code here:
var start = document.querySelector('#start')
var reset = document.querySelector('#reset')
var pause = document.querySelector('#pause')
// var body = document.querySelector('body')

 start.addEventListener('click', increMent);
 reset.addEventListener('click', resetTime);
 pause.addEventListener('click', pauseTime);

var seconds = 0;
var timerId;

function updateTime(){

  var head1 = document.querySelector('#timer')
  head1.textContent = 'Timer: ' + seconds + 's'
  seconds++
}

function increMent(){
 timerId = window.setInterval(updateTime, 1000);
}

function pauseTime(){
  window.clearInterval(timerId)
}

function resetTime(){
  var head1 = document.querySelector('#timer')
  head1.textContent = 'Stop Watch'
  seconds = 0
}
