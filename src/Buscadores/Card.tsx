import Tabla from '../Tabla'
import { InputText } from '@victorequena22/component-bootstrap'
import { Col, Card, Row, Button, InputGroup } from 'react-bootstrap'
import React from 'react'
export default class CardBuscador<p = {}> extends Tabla<p> {
  permiso = ''
  constructor(p: any) {
    super(p)
    this.Title = this.Title.bind(this)
  }
  Title() {
    return (
      <>
        <Button
          className='float-right'
          onClick={() => {
            this.setState({ modal: true })
          }}
        >
          {' '}
          <i className='fa fa-edit'></i> NUEVO
        </Button>
      </>
    )
  }
  render() {
    const { Body, Buscador, Title } = this
    return (
      <Card>
        <Card.Header className='bg-info d-flex'>
          <Title />
        </Card.Header>
        <Card.Body>
          <Buscador />
          <Col md={12}>
            <Body />
          </Col>
        </Card.Body>
      </Card>
    )
  }
  Buscador() {
    return (
      <Row className='d-flex' style={{ paddingBottom: '15px' }}>
        <Col md={9} className='mr-auto'>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>{this.buscarLabel}</InputGroup.Text>
            </InputGroup.Prepend>
            <InputText name='buscar' upper setData={this.setState} update='buscar' value={this.state.buscar} />
            <InputGroup.Append>
              <Button variant='primary'>
                <i className='fa fa-search'></i> BUSCAR
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    )
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  set() { }
  componentDidMount() {
    this.set()
  }
}
