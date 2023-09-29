const router= require('express').Router();
const {User, Project} = require('../models');
const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });

router.get('/tiers', (req, res) => {
  res.render('tiers');
});

router.get('/profile', (req, res) => {
  res.render('profile');
});

  module.exports = router
