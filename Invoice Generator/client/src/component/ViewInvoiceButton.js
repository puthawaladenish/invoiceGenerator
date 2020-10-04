import React from 'react';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';


export default function ViewInvoiceButton(props){
    const history = useHistory();
    function handleClick(){
        history.push('/loaddisplayinvoice/'+ props.invoiceId)
        console.log('You want to see the invoice with the id:'+ props.invoiceId)
    }

    return(
        <Button
         varient='warning'
         onClick={handleClick} >
            View Invoice
        </Button>
    );
}