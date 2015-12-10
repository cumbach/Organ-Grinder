var AppDispatcher = require('../dispatcher/dispatcher');

var KeyActions = {
  fetch: function (fetchKeys){
    AppDispatcher.dispatch({
      actionType: "RECEIVE_KEYS",
      keys: fetchKeys
    });
  },
  create: function(key){
    AppDispatcher.dispatch({
      actionType: "ADD_KEY",
      key: key
    });
  },
  destroy: function(key){
    AppDispatcher.dispatch({
      actionType: "REMOVE_KEY",
      key: key
    });
  }
};

module.exports = KeyActions;
