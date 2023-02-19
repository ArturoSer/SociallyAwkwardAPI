const router = require('express').Router();
const userRouter = require('./userRoute');
const awkwardRoute = require('./awkwardRoute');

router.use('/user', userRoute);
router.use('/social', awkwardRoute);

module.exports = router;