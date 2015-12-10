var KeyActions = require('../actions/key_actions');

var Mapping = {
  65: "C",
  83: "D",
  68: "E",
  70: "F",
  71: "G",
  72: "A",
  74: "B"
};

var KeyListener = function(){
  // $(document).keyup(function(e){console.log(e)})
  $(document).on({
    keyup: function(key) {KeyActions.destroy(Mapping[key.keyCode])},
    keydown: function(key) {KeyActions.create(Mapping[key.keyCode])}
  });
};

module.exports = KeyListener;
