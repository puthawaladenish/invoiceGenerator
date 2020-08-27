import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CustomTextField from './CustomTextField';
import CustomTextArea from './CustomTextArea';
import ProductAndPrices from './ProductAndpricesListing';
import FinalPrice from './FinalPrice';
import DesriptionAndPrice from './InputDescriptionAndPrice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DialogWindow from './DialogWindow';
import CustomCard from './CustomCard';
import axios from 'axios';

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
            priceVal: '',
            show: false,
            title: '',
            content: ''
        }
        this.textFieldHandler = this.textFieldHandler.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeWindow = this.closeWindow.bind(this);
    }
    closeWindow() {
        console.log('You want to close this dislog box.')
        this.setState({
            show: false
        })
    }

    handleSubmit(event) {
        //final Price
        const currentItems = this.state.itemsListing;
        let finalPrice = 0;
        currentItems.map((product, index) => {
            finalPrice = finalPrice + product.price
        });
        const salesInvoice = {
            sellerName: this.state.sellerName,
            sellerAddress: this.state.sellerAddress,
            customerName: this.state.customerName,
            customerAddress: this.state.customerAddress,
            items: this.state.itemsListing,
            finalPrice: finalPrice,
            terms: this.state.termsAndConditions,
            invoiceDescription: this.state.invoiceDescription,
        }
        axios.post('http://localhost:5000/api/createinvoice', salesInvoice)
            .then((res) => {
                if (res.status === 200) {
                    this.setState({
                        show: true,
                        title: 'Success!!',
                        content: 'The Invoice was successfully Inserted'
                    });
                } else {
                    this.setState({
                        show: true,
                        title: 'Error!!',
                        content: 'Problem in creating in invoice - try again'
                    });
                }
            });

        event.preventDefault();
        console.log('You are to create new sales invoice');

    }

    buttonClick() {
        this.setState((state) => {
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
                <Container>
                    <Row style={{ marginTop: '1em' }}>
                        <Col>
                            <CustomCard head="Invoice Description" >
                                <CustomTextArea
                                    label='Invoice Description'
                                    name='invoiceDescription'
                                    val={this.state.invoiceDescription}
                                    inputHandler={this.textFieldHandler} />
                            </CustomCard>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '1em' }}>
                        <Col>
                            <CustomCard head="Seller's Information">
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
                            </CustomCard>
                        </Col>
                        <Col>
                            <CustomCard head="Customer's Information">
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
                            </CustomCard>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '1em' }}>
                        <Col>
                            <CustomCard head='Items/Servicies Purchased'>
                                <ProductAndPrices
                                    itemsListing={this.state.itemsListing} />
                                <DesriptionAndPrice
                                    descriptionVal={this.state.descriptionVal}
                                    priceVal={this.state.priceVal}
                                    customHandler={this.textFieldHandler}
                                    buttonHandler={this.buttonClick} />
                            </CustomCard>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '1em' }}>
                        <Col>
                            <CustomCard head='Final Price'>
                                <FinalPrice
                                    itemsListing={this.state.itemsListing} />
                            </CustomCard>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '1em' }}>
                        <Col>
                        <CustomCard head='Terms and condition'>
                            <CustomTextArea
                                label='Terms and Conditions'
                                name='termsAndConditions'
                                val={this.state.termsAndConditions}
                                inputHandler={this.textFieldHandler}
                                buttonHandler={this.buttonClick} />
                                </CustomCard>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Card>
                            <Card.Body>
                            <Button
                                type='submit'
                                varient='primary'
                                size='lg'>
                                Create sales invoice
                            </Button>
                            </Card.Body>
                        </Card>
                            
                        </Col>
                    </Row>
                </Container>

                <DialogWindow
                    show={this.state.show}
                    title={this.state.title}
                    content={this.state.content}
                    closeHandler={this.closeWindow} />
            </Form>
        )
    }
}