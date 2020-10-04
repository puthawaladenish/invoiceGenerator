import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import CustomCard from './CustomCard';

export default class DisplayInvoice extends React.Component{
    constructor(props){
    super(props);
    }
    render(){
        return(
            <Jumbotron>
                <CustomCard 
                head='Sales Invoice' >
                    <h1> Hello From Display Invoice Component</h1>
                    <h1>ID: {this.props.invoiceId}</h1>
                </CustomCard>
            </Jumbotron>
        )
    }
}
