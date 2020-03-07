const express = require('express');
const BloodTest = require('../../models/bloodTest');
const router = express.Router();
/* POST user BloodTest */
router.post('/', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["name", "Morfology", "Biochemy", "Immunology"];
    const isValidOperation = updates.every(value => allowedUpdates.includes(value));
    if (!isValidOperation) {
        res.status(400).send({error: "Invalid updates!"})
    }
    try {
        const bloodTest = new BloodTest(req.body);
        await bloodTest.save();
        res.status(201).send(bloodTest);
    } catch (err) {
        res.status(400).send();
    }
});

module.exports = router;
