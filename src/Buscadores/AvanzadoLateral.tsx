import { InputText } from 'component-bootstrap'
import { Col, Card, Row, Button, InputGroup, Accordion } from 'react-bootstrap'
import React from 'react'
import CardBuscador from './Card'
export default class AvanzadoBuscador extends CardBuscador {
  permiso = ''
  constructor(p: any) {
    super(p)
    this.Avansado = this.Avansado.bind(this)
  }
  Avansado() {
    return <></>
  }
  render() {
    const { Body, Buscador, Avansado, Title } = this
    return (
      <Card as={Accordion}>
        <Card.Header className='bg-info d-flex row'>
          <Button as={Accordion.Toggle} eventKey='0'
            variant='default' data-tip='BUSQUEDA DETALLADA'
            onClick={() => this.setState({ open: !this.state.open })}>
            <i className='fa fa-wrench'></i>
          </Button>
          <Title />
        </Card.Header>
        <Card.Body>
          <Row>
            <Card style={{ with: '20%' }} as={Accordion.Collapse} eventKey='0'>
              <Card.Body><Avansado /></Card.Body>
            </Card>
            <Card><Buscador /><Col md={12}><Body /></Col>
            </Card>
          </Row>
        </Card.Body>
      </Card>
    )
  }
}
