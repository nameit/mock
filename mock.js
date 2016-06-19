var express = require('express');
var router = express.Router();

router.post('/aa', function(req, res) {
	res.json({"success":true})
})

module.exports = router;