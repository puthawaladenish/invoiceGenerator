// init code
const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice');

//route
//Delete one data
router.delete('/:invoiceId', (req, res) => {
    invoiceModel.findOneAndDelete({
        _id: req.params.invoiceId
    }, (err, delinv) => {
        if (err) {
          console.log('ERROR' + err);
          res.status(500).json({Message : 'delete data not performing'})
        }else{
            console.log('delete data successfully');
            res.status(200).json({delinv});
        }
    }
    )
});


// export
module.exports = router;