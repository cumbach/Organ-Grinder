var ReactDOM = require('react-dom');
var React = require('react');
var Key = require('./components/key');
var KeyListener = require('./util/key_listener');
var Organ = require('./components/organ');

KeyListener();

document.addEventListener("DOMContentLoaded", function(){
  var root = document.querySelector('#root');
  ReactDOM.render(<Organ />, root);
});
