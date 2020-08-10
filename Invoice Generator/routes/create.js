// init code
const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice');


//routes
router.post('/',(req,res)=>{
    const input = req.body;

    const newDocument = new invoiceModel({
        sellerName : input.sellerName,
        sellerAddress : input.sellerAddress,
        customerName : input.customerName,
        customerAddress : input.customerAddress,
        items : input.items,
        finalPrice : input.finalPrice,
        terms : input.terms,
        invoiceDescription : input.invoiceDescription
    });
    // Saving the information inside the database
    newDocument.save((err,doc) =>{
        if (err) {
            //something went wrong
            console.log('Error' + err); 
            res.status(500).json({message:'Problem when saving the information'})
        }else{
            //everything is ok
            console.log('The Information was Saved')
            res.status(200).json({message : 'The invoice was creeated successfully'})
        } 
    });
});



// export
module.exports = router;