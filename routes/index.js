const router = require('express').Router();
const model = require('seed/lib/seed/errors/model');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;