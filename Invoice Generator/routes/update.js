// init code
const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice');


//route
router.put('/:invoiceId', (req, res) => {
    invoiceModel.findByIdAndUpdate({
        _id: req.params.invoiceId
    }, {
        sellerName: req.body.sellerName,
        sellerAddress: req.body.sellerAddress,
        customerName: req.body.customerName,
        customerAddress: req.body.customerAddress,
        items: req.body.items,
        finalPrice: req.body.finalPrice,
        terms: req.body.terms,
        invoiceDescription: req.body.invoiceDescription
    }, (err, data) => {
        if (err) {
            console.log('ERROR:' + err);
            res.status(500).json({ Message: 'Update Task Internal Error' });
        } else {
            console.log('Update Task succesfull');
            res.status(200).json({ data });
        }
    })
});


// export
module.exports = router;