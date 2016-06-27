var express = require('express');
var router = express.Router();

router.post('/aa', function(req, res) {
	if(req.body.username === "yuki" && req.body.password) {
		res.json({"success":true,"name":"半条命"})
	} else {
		res.json({"success":false,"msg":"用户名不存在"})
	}
})



module.exports = router;