const router = require('express').Router();
const IndexController = require('../controllers/indexControllers');


router.get('/', IndexController.fetchLoginPage);

router.get("/log", IndexController.fetchLandingPage);

module.exports = router;
