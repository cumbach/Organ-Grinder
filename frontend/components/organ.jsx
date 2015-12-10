var React = require('react');
var TONES = require('../constants/tones');
var Key = require('./key');

var Organ = React.createClass({
  render: function(){

    var organKeys = function(){
      var arr = [];
      for (var keys in TONES) {
        arr.push(<Key key={keys} noteName={keys}/>);
      }
      return arr;
    };

    return(
      <div>
        {organKeys()}
      </div>
    );
  }
});

module.exports = Organ;
