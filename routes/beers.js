var express = require('express');
var router = express.Router();
var Beer = require('../models/Beer');

router.param('beer', function(req, res, next, id) {
  Beer.findOne(id, function(err, beer) {
    if (err) return next(err);
    if (!beer) return next(new Error('Invalid beer ID'));
    req.beer = beer;
    next();
  });
});

/* GET beers listing */
router.get('/', function(req, res, next) {
  Beer.find().exec(function(err, beers) {
    if (err) next(new Error('Error getting beers.. damn..'));
    res.json(beers);
  });
});

/* POST a new beer to the list */
router.post('/', function(req, res, next) {
  var beer = new Beer({
    name: req.body.name
  });

  beer.save(function(err, beer) {
    if (err) next(new Error('Unable to save beer'));
    res.json(beer);
  });
});

/* DELETE a beer from the list */
router.delete('/:beer', function(req, res, next) {
  req.beer.remove(function(err, beer) {
    if (err) next(new Error('Unable to delete beer'));
    res.json(beer);
  });
});

module.exports = router;
