const router = require('express').Router();
const { Tiers } = require('../../models');


router.get('/', async (req, res) => {
    try {
        const tiersData = await Tiers.findAll();
        res.status(200).json(tiersData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;