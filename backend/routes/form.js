const express=require('express');
const router=express.Router();
const Form = require('../model/Form');
router.post('/forms', async (req, res) => {
    const {name, email, phone,subject,message} = req.body;
    if (!name || !email || !phone || !message || !subject) {
        return res.status(422).json({error: "Plz filled the form"});
    }
    try {
        const form = new Form({name, email, phone,subject, message});
        const formJson = await form.save();
        res.status(201).json(formJson);
    } catch (error) {
        console.log(error);
    }
});
module.exports = router;