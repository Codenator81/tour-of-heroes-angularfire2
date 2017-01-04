var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
//user:"admin", pwd:"admin123"
var db = mongojs('mongodb://localhost:27017/heroes', ['heroes', 'crisises']);

//Heroes
/* GET All Heroes */
router.get('/heroes', function(req, res) {
  db.heroes.find(function(err, heroes) {
    if (err) {
      res.send(err);
    } else {
      res.json(heroes);
    }
  });
});
/* GET One Hero with the provided ID */
router.get('/hero/:id', function(req, res, next) {
  db.heroes.findOne({
    _id: mongojs.ObjectId(req.params.id)
  }, function(err, heroes) {
    if (err) {
      res.send(err);
    } else {
      res.json(heroes);
    }
  });
});
/* POST/SAVE a Hero */
router.post('/hero', function(req, res) {
  var hero = req.body;
  if (!hero.name || !hero.power) {
    res.status(400);
    res.json({
      "error": "Invalid Data"
    });
  } else {
    db.heroes.save(hero, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    })
  }
});
/* PUT/UPDATE a Hero */
router.put('/hero/:id', function(req, res) {
  var hero = req.body;
  var updObj = {};
  if (hero.name) {
    updObj.name = hero.name;
  }
  if (hero.power) {
    updObj.power = hero.power;
  }
  if (hero.alterEgo) {
    updObj.alterEgo = hero.alterEgo;
  }
  if (!updObj) {
    res.status(400);
    res.json({
      "error": "Invalid Data"
    });
  } else {
    db.heroes.update({
      _id: mongojs.ObjectId(req.params.id)
    }, updObj, {}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  }
});
/* DELETE a Hero */
router.delete('/hero/:id', function(req, res) {
  db.heroes.remove({
    _id: mongojs.ObjectId(req.params.id)
  }, '', function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

//Crisis
/* GET All Crisis */
router.get('/crisises', function(req, res) {
  db.crisises.find(function(err, crisises) {
    if (err) {
      res.send(err);
    } else {
      res.json(crisises);
    }
  });
});
/* GET One Crisis with the provided ID */
router.get('/crisis/:id', function(req, res, next) {
  db.crisises.findOne({
    _id: mongojs.ObjectId(req.params.id)
  }, function(err, crisises) {
    if (err) {
      res.send(err);
    } else {
      res.json(crisises);
    }
  });
});
/* POST/SAVE a Crisis */
router.post('/crisis', function(req, res) {
  var crisis = req.body;
  if (!crisis.name) {
    res.status(400);
    res.json({
      "error": "Invalid Data"
    });
  } else {
    db.crisises.save(crisis, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    })
  }
});
/* PUT/UPDATE a Crisis */
router.put('/crisis/:id', function(req, res) {
  var crisis = req.body;
  var updObj = {};
  if (crisis.name) {
    updObj.name = crisis.name;
  }
  if (!updObj) {
    res.status(400);
    res.json({
      "error": "Invalid Data"
    });
  } else {
    db.crisises.update({
      _id: mongojs.ObjectId(req.params.id)
    }, updObj, {}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  }
});
/* DELETE a Crisis */
router.delete('/crisis/:id', function(req, res) {
  db.crisises.remove({
    _id: mongojs.ObjectId(req.params.id)
  }, '', function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
