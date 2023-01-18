import Tabla from '../Tabla'
import { InputText } from 'component-bootstrap'
import { Col, Card, Row, Button, InputGroup, Accordion } from 'react-bootstrap'
import React from 'react'
export default class CardBuscador extends Tabla {
  permiso = ''
  con!: any
  constructor(p: any) {
    super(p)
    this.Avansado = this.Avansado.bind(this)
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
  Avansado() {
    return <></>
  }
  render() {
    const { Body, Buscador, Avansado, Title } = this
    return (
      <Card as={Accordion}>
        <Card.Header className='bg-info d-flex'>
          <Title />
        </Card.Header>
        <Card.Body>
          <Buscador />
          <Accordion.Collapse eventKey='0'>
            <Card>
              <Card.Body>
                <Avansado />
              </Card.Body>
            </Card>
          </Accordion.Collapse>
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
            <InputText upper setData={this.setState} update='buscar' value={this.state.buscar} />
            <InputGroup.Append>
              <Button variant='primary'>
                <i className='fa fa-search'></i> BUSCAR
              </Button>
              <Button
                as={Accordion.Toggle}
                eventKey='0'
                variant='default'
                data-tip='BUSQUEDA DETALLADA'
                onClick={() => {
                  this.setState({ open: !this.state.open })
                }}
              >
                <i className='fa fa-wrench'></i> DETALLADO
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    )
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  set() {}
  componentDidMount() {
    this.set()
  }
}
