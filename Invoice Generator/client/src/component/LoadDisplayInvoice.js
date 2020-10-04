import React from 'react';
import {useParams} from 'react-router-dom';
import DisplayInvoice from './Displayinvoice';

export default function LoadDisplayInvoice(props) {

  const {invoiceId} = useParams();
  // saving the URL parameter into the invoiceId constant
    return (
      <DisplayInvoice 
      invoiceId = {invoiceId} />
    );
  }