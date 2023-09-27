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

  module.exports = router
