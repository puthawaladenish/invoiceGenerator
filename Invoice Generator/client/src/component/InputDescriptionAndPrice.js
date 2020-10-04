import React from 'react';
import Container from 'react-bootstrap/Container';
import CustomTextField from './CustomTextField';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default class InputDescriptionAndPrice extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Col>
                    <CustomTextField
                        customId='itemDescription'
                        label='Item Description'
                        name='itemDescription'
                        placeholder='Enter the Description...'
                        val={this.props.discriptionVal}
                        inputHandler={this.props.customHandler} />
                </Col>
                <Col>
                    <CustomTextField
                        customId='itemPrice'
                        label='Item Price'
                        name='itemPrice'
                        placeholder='Enter the Price...'
                        val={this.props.priceVal}
                        inputHandler={this.props.customHandler} /></Col>
                <Col>
                    <Button 
                         varient = 'primary'
                         size = 'lg' 
                         style={{marginTop: '2em'}}
                         onClick={this.props.buttonHandler} >
                       Submit item
                    </Button>

                </Col>
            </Container>
        );
    }
}  