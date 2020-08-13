import React from 'react';
import Form from 'react-bootstrap/Form';

export default class CustomTextField extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Form.Group>
                <Form.Label controlid = {this.props.customId}>
                <h5>
                    {this.props.label}
                </h5>
                </Form.Label>
                <Form.Control
                       type = 'text'
                       name = {this.props.name}
                       placeholder = {this.props.placeholder}
                       value = {this.props.val}
                       onChange={this.props.inputHandler}>                   
                </Form.Control>
                <Form.Text>
                    {this.props.text}
                </Form.Text>
            </Form.Group>
            );
    }
}
