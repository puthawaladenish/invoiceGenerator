import React from 'react';
import axios from 'axios';
import InvoicesTable from './InvoicesTable';
import DialogWindow from './DialogWindow';

export default class InvoicesListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            invoiceData: [],
            show: false,
            title: '',
            content: ''
        }
        this.deleteHandler = this.deleteHandler.bind(this);
        this.closeWindow = this.closeWindow.bind(this);
    }

    closeWindow() {
        this.setState({
            show: false
        })
    }

    deleteHandler(invoiceId) {
        axios.delete('http://localhost:5000/api/deleteinvoice/' + invoiceId)
            .then((res) => {
                if (res.status === 200) {
                    //The Invoice was removed
                    this.setState({
                        show: true,
                        title: 'Success!!',
                        content: 'The invoie was removed successfully'
                    });
                    const invoicesCopy = this.state.invoiceData;
                    this.state.invoiceData.map((item , index)=>{
                        if (item.id === invoiceId){
                            invoicesCopy.splice(index , 1);
                            this.setState({
                                invoiceData: invoicesCopy
                            });
                        }
                    });
                    
                } else {
                    //Something went wrong
                    this.setState({
                        show: true,
                        title: 'ERROR',
                        content: 'Problem when removing the invoice'
                    });
                }
            })
        console.log('Delete Invoice id:' + invoiceId)
    }

    componentDidMount() {
        //this method runs autometically 
        axios.get('http://localhost:5000/api/readinvoice/all')
            .then((res) => {
                if (res.status === 200) {
                    //everything is working
                    return res.data;

                } else {
                    // something went wrong
                    console.log('problems in reading information');
                }
            }).then((resOfObj) => {
                let invoiceInfo = [];
                resOfObj.map((invoice, index) => {
                    invoiceInfo.push({
                        id: invoice._id,
                        description: invoice.invoiceDescription
                    });
                });
                this.setState((state, props) => {
                    return {
                        invoiceData: this.state.invoiceData.concat(invoiceInfo)
                    }
                });
                console.log(this.state.invoiceData);
            })
    }
    render() {
        return (
            <div>
                <InvoicesTable
                    invoicesData={this.state.invoiceData}
                    handleDelete={this.deleteHandler} />
                <DialogWindow
                    show={this.state.show}
                    title={this.state.title}
                    content={this.state.content}
                    closeHandler={this.closeWindow} />
            </div>

        );
    }
}