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
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Switch } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import './style.scss';
import reducers from './reducers';
import Counter from './containers/counter';
import Controls from './containers/controls';


const About = (props) => {
  return <div> All there is to know about me </div>;
};

const Welcome = (props) => {
  return (
    <div>
      <div>Welcome</div>
      <div> <Counter /></div>
      <div> <Controls /></div>
    </div>
  );
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
      </ul>
    </nav>
  );
};

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

// this creates the store with the reducers, and does some other stuff to initialize devtools
const store = createStore(reducers, {}, compose(
  applyMiddleware(),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
          <Route exact path="/test/:id" component={Test} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};


ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('main'));
