import React from 'react';
import axios from 'axios';

export default class InvoicesListing extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        //this method runs autometically 
        axios.get('http://localhost:5000/api/readinvoice/all')
        .then((res)=>{
            if (res.status === 200){
                //everything is working
                return JSON.stringify(res);
                //console.log('res.json()');
            }else{
                // something went wrong
                console.log('problems in reading information');
            }
        });
    }
    render(){
        return (
            <h1> Hello from Invoices Listing!!!</h1>
        );
    }
}