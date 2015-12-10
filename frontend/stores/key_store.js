var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var KeyStore = new Store(AppDispatcher);
// var toneContant = require('../contants/tones.js');

var _keys = [];
KeyStore.all = function () {
  return _keys.slice();
};

KeyStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
  case "ADD_KEY":
    addKeys(payload.key);
    break;
  case "RECEIVE_KEYS":
    resetKeys(payload.keys);
    break;
  case "REMOVE_KEY":
    removeKey(payload.key);
    break;
  }

};

var addKeys = function (key) {
  _keys.push(key);
  KeyStore.__emitChange();
};

var resetKeys = function (keys) {
  _keys = keys;
  KeyStore.__emitChange();
};

var removeKey = function (key) {
  for (var i = 0; i < _keys.length; i++) {
    if (_keys[i] === key) {
      _keys.splice(i, 1);
    }
  }
  KeyStore.__emitChange();
};

module.exports = KeyStore;
