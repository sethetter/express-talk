var mongoose = require('mongoose');

var Beer = mongoose.model('Beer', {
  name: String
});

module.exports = Beer;
