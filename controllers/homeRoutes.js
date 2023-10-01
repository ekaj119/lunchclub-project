const router= require('express').Router();
const {User, Tiers, Profile} = require('../models');
const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });

// router.get('/tiers', (req, res) => {
//   res.render('tiers');
// });

router.get('/tiers', async (req, res) => {

  try {


    const tiersData = await Tiers.findAll(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['id']
        }
      ]
    })

    const tiers = tiersData.map((tier) => tier.get({ plain: true }));

    res.render('tiers', {
      tiers,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/profile', (req, res) => {
//   res.render('profile');
// });

router.get('/profile/:id', async (req, res) => {
  try {
    const profiletData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Profile,
          attributes: ['name', 'services', 'description', 'price'],
        },
      ],
    });

    const profile = profiletData.get({ plain: true });

    res.render('profile', {
      ...profile,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
  module.exports = router


