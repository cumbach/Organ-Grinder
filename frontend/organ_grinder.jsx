var ReactDOM = require('react-dom');
var React = require('react');
var Key = require('./components/key');
var KeyListener = require('./util/key_listener');

KeyListener();

document.addEventListener("DOMContentLoaded", function(){
  var root = document.querySelector('#root');
  ReactDOM.render(<Key noteName={"C"} />, root);
});
