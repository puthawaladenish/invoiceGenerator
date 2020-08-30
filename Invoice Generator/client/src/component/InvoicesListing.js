import React from 'react';
import axios from 'axios';

export default class InvoicesListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            invoiceData: []
        }
    }
    componentDidMount() {
        //this method runs autometically 
        axios.get('http://localhost:5000/api/readinvoice/all')
            .then((res) => {
                if (res.status === 200) {
                    //everything is working
                    return res.data;
                    console.log(res.data)
                } else {
                    // something went wrong
                    console.log('problems in reading information');
                }
            }).then((resOfObj)=>{
                let invoiceInfo = [];
                resOfObj.map((invoice,index)=>{
                    invoiceInfo.push({
                        id: invoice._id,
                        description: invoice.invoiceDescription
                    });
                });
                this.setState((state,props)=>{
                    return {
                        invoiceData:state.invoiceData.concat(invoiceInfo)
                    }
                });
                console.log(this.state.invoiceData);
            })
        }
        render() {
        return (
            <h1> Hello from Invoices Listing!!!</h1>
        );
    }
}