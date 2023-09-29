const router = require('express').Router();
const { Profile } = require('../../models');


router.get('/', async (req, res) => {
    try {
        const profileData = await Profile.findAll();
        res.status(200).json(profileData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const profileData = await Profile.create(req.body);
        res.status(200).json(profileData);
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;