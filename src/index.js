// change require to es6 import style
import $ from 'jquery';
import './style.scss';

let count = 0;
function counter() {
  count += 1;
  $('#main').html(`You've been on this page for ${count} seconds.`);
}

setInterval(counter, 1000);


// let counts = 0;
// function update() {
//   $('#main').html(counts);
//   counts += 1;
// }
// setInterval(update, 1000);
