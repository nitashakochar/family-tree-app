// change require to es6 import style
// import $ from 'jquery';
// import './style.scss';

// let count = 0;
// function counter() {
//   count += 1;
//   $('#main').html(`You've been on this page for ${count} seconds.`);
// }

// setInterval(counter, 1000);


import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div className="test">All the React are belong to us!</div>;
};

ReactDOM.render(<App />, document.getElementById('main'));
