import React from 'react';
import InvoicesListing from './InvoicesListing';
import Card from 'react-bootstrap/Card';

export default function LoadAllInvoices(props) {
    return (
      <Card bg ='dark' text ='white'>
        <Card.Header as='h3' style={{textAlign:'center'}}>
          Invoice Listing
        </Card.Header>
        <Card.Body>
             <InvoicesListing/>
        </Card.Body>
      </Card>
    );
  }