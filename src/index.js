import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

//var React= require('react');
//var ReactDOM = require('react-dom');

class Hello extends React.Component {
  render () {
    return <h1> Hello a {this.props.name}!</h1>;
  }
}

ReactDOM.render(<Hello name="Jagruti" />, document.getElementById('hello-warpper'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
