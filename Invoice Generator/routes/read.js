// init code
const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice');


//routes
//read all data
router.get('/all',(req,res)=>{
    invoiceModel.find((err,docs)=>{
      if (err){
          console.log('ERROR' + err)
          res.status(500).json({message: "information couln't reading"})
      }else{
          console.log('invoices found');
          res.status(200).json(docs);
      }
    })
});

//Read data by id
router.get('/:invoiceId',(req,res) => {
    invoiceModel.findOne({
        _id : request.params.invoiceId
    },(err, invoice) =>{
        if (err){
            console.log('something went wrong' + err);
            res.status(500).json({message:'find one invoice error'})
        }else{
            console.log('findone invoice success');
            res.status(200).json(invoice);
        }
    }  )
});

// export
module.exports = router;