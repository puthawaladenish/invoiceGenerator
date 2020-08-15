import React from 'react';
import CustomTextField from './CustomTextField';
import CustomTextArea from './CustomTextArea';
import ProductAndPrices from './ProductAndpricesListing';
import FinalPrice from './FinalPrice';
import DesriptionAndPrice from './InputDescriptionAndPrice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sellerName: '',
            sellerAddress: '',
            customerName: '',
            customerAddress: '',
            invoiceDescription: '',
            termsAndConditions: '',
            itemsListing: [],
            descriptionVal: '',
            priceVal: ''

        }
        this.textFieldHandler = this.textFieldHandler.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        //final Price
        const currentItems = this.state.itemsListing;
        let FinalPrice = 0;
        currentItems.map((product, index) => {
            Finalprice = Finalprice + product.price
        });
        const salesInvoice = {
            
        }

        event.preventDefault();
        console.log('You are to create new sales invoice');
    }

    buttonClick() {
        this.setState((state, props) => {
            const currentArray = this.state.itemsListing;
            return {
                itemsListing: currentArray.concat([
                    {
                        description: state.descriptionVal,
                        price: parseFloat(state.priceVal)
                    }
                ])
            }
        });
        console.log('You want to add an item to the listing ')
    }
    textFieldHandler(event) {
        if (event.target.name === 'itemDescription') {
            this.setState({
                descriptionVal: event.target.value
            });
            console.log(this.state.invoiceDescription);
        }

        if (event.target.name === 'itemPrice') {
            this.setState({
                priceVal: event.target.value
            });
        }

        if (event.target.name === 'termsAndConditions') {
            this.setState({
                termsAndConditions: event.target.value
            });
            console.log(this.state.invoiceDescription);
        }

        if (event.target.name === 'invoiceDescription') {
            this.setState({
                invoiceDescription: event.target.value
            });
            console.log(this.state.invoiceDescription);
        }

        if (event.target.name === 'sellerName') {
            this.setState({
                sellerName: event.target.value
            });
        }

        if (event.target.name === 'sellerAddress') {
            this.setState({
                sellerAddress: event.target.value
            });
        }

        if (event.target.name === 'customerName') {
            this.setState({
                customerName: event.target.value
            });
        }

        if (event.target.name === 'customerAddress') {
            this.setState({
                customerAddress: event.target.value
            });
        }
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <CustomTextArea
                    label='Invoice Description'
                    name='invoiceDescription'
                    val={this.state.invoiceDescription}
                    inputHandler={this.textFieldHandler} />
                <CustomTextField
                    customld='seller-name'
                    label="Seller's name"
                    placeholder='Type in the name...'
                    name="sellerName"
                    val={this.state.sellerName}
                    inputHandler={this.textFieldHandler}
                    text="Enter the full name" />
                <CustomTextField
                    customld='seller-address'
                    label="Seller's Address"
                    placeholder='Type in the address...'
                    name="sellerAddress"
                    val={this.state.sellerAddress}
                    inputHandler={this.textFieldHandler}
                    text="Enter the full address" />
                <CustomTextField
                    customld='customer-name'
                    label="Customer's name"
                    placeholder='Type in the customer-name...'
                    name="customerName"
                    val={this.state.customerName}
                    inputHandler={this.textFieldHandler}
                    text="Enter the full customer name" />
                <CustomTextField
                    customld='customer-address'
                    label="Customer's Address"
                    placeholder='Type in the customer Address...'
                    name="customerAddress"
                    val={this.state.customerAddress}
                    inputHandler={this.textFieldHandler}
                    text="Enter the full customer Address" />
                <ProductAndPrices
                    itemsListing={this.state.itemsListing} />
                <DesriptionAndPrice
                    descriptionVal={this.state.descriptionVal}
                    priceVal={this.state.priceVal}
                    customHandler={this.textFieldHandler}
                    buttonHandler={this.buttonClick} />
                <FinalPrice
                    itemsListing={this.state.itemsListing} />
                <CustomTextArea
                    label='Terms and Conditions'
                    name='termsAndConditions'
                    val={this.state.termsAndConditions}
                    inputHandler={this.textFieldHandler}
                    buttonHandler={this.buttonClick} />
                <Button
                    type='submit'
                    varient='primary'
                    size='lg'>
                    Create sales invoice
                </Button>

            </Form>
        )
    }
}