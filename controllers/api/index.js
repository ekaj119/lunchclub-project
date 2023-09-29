const router = require('express').Router();
const userRoutes = require('./userRoutes');
const tiersRoutes = require('./tiersRoutes');
const profileRoutes = require('./profileRoutes');

router.use('/users', userRoutes);
router.use('/tiers', tiersRoutes);
router.use('/profile', profileRoutes);

module.exports = router;