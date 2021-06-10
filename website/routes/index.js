var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Prompt' });
});

router.post('/', function(req, res){
    var body = req.body;

    var res_body = {
        username: body.first_name,
        email: body.email,
        password: body.password
    };

    res.render('welcome', res_body);
});

module.exports = router;
