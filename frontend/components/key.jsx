var React = require('react');
var KeyStore = require('../stores/key_store');
var KeyActions = require('../actions/key_actions');
var ReactDOM = require('react-dom');
var TONES = require('../constants/tones');
var Note = require('../util/note');
var KeyListener = require('../util/key_listener');

var Key = React.createClass({
  getInitialState: function(){
    return {playing: false}
  },
  _keysChanged: function(){
    var keyStore = KeyStore.all();

    if (keyStore.indexOf(this.props.noteName) !== -1 ) {
      this.note.start();
      this.setState({playing: true});
    } else {
      this.note.stop();
      this.setState({playing: false});
    }
  },
  componentDidMount: function(){
    this.note = new Note(TONES[this.props.noteName]);
    KeyStore.addListener(this._keysChanged);
  },
  componentWillUnmount: function(){
    // var tone = TONES[this.props.noteName];
    this.note.stop();
    KeyStore.removeListener(this._keysChanged);
    this.show = "";
  },

  render: function(){
    return(
      <div>
        <li>{this.state.playing ? this.props.noteName : "" }</li>
      </div>
    );
  }

});



module.exports = Key;
