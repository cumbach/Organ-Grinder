var React = require('react');
var KeyStore = require('../stores/key_store');
var KeyActions = require('../actions/key_actions');
var ReactDOM = require('react-dom');
var TONES = require('../constants/tones');
var Note = require('../util/note');
var KeyListener = require('../util/key_listener');

var Key = React.createClass({
  // createKey: function(key) {
  //   KeyActions.create(key);
  // },
  // removeKey: function(key){
  //   KeyActions.destroy(key);
  // }
  _keysChanged: function(){
    var keyStore = KeyStore.all();
    // debugger;
    if (keyStore.indexOf(this.props.noteName) !== -1 ) {
      this.note.start();
    } else {
      this.note.stop();
    }
  },
  componentDidMount: function(){
    // var tone = TONES[this.props.noteName];
    this.note = new Note(TONES[this.props.noteName]);
    // this.note.start();
    console.log(TONES[this.props.noteName]);
    // debugger
    KeyStore.addListener(this._keysChanged);
    KeyActions.fetch();
    // var keyStore = KeyStore.all();


  },
  componentWillUnmount: function(){
    // var tone = TONES[this.props.noteName];
    this.note.stop();
    KeyStore.removeListener(this._keysChanged);
  },

  render: function(){
    return(
      <div>
        <li>{this.props.noteName}</li>
      </div>
    );
  }

});



module.exports = Key;
