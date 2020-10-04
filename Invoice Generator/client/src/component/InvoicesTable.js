import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ViewInvoiceButton from './ViewInvoiceButton';

export default class InvoicesTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const idsAndDescription = this.props.invoicesData;
        const htmlMarkup = [];
        if (idsAndDescription.length > 0) {
            idsAndDescription.map((invoice, index) => {
                htmlMarkup.push(
                    <Row key={'index-' + index}>
                        <Col>
                            <h5>{invoice.id}</h5>
                        </Col>
                        <Col>
                            <h5>{invoice.description}</h5>
                        </Col>
                        <Col>
                            <ButtonGroup>
                                <Button
                                    varient='danger'
                                    onClick={() => this.props.handleDelete(invoice.id)} >
                                    Delete
                                   </Button>
                                <ViewInvoiceButton
                                    invoiceId={invoice.id} />
                            </ButtonGroup>
                        </Col>
                    </Row>
                );
            }
            );
        }
        return (
            <Container>
                <Row>
                    <Col>
                        <h4>Invoice ID</h4>
                    </Col>
                    <Col>
                        <h4>Description</h4>
                    </Col>
                    <Col>
                        <h4>Actions</h4>
                    </Col>
                </Row>
                <div>{htmlMarkup}</div>
            </Container>
        );
    }
}