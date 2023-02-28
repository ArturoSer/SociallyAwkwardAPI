const router = require('express').Router();
const userRoute = require('./userRoute');
const awkwardRoute = require('./awkwardRoute');

router.use('/user', userRoute);
router.use('/awkward', awkwardRoute);

module.exports = router;