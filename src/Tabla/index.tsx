import { InputText } from '@victorequena22/component-bootstrap'
import React from 'react'
import { Button, InputGroup } from 'react-bootstrap'
import { busqueda, ordenar } from '@victorequena22/utiles'
import Body from './Body'
import Th from './Th'
interface State {
  itens: any[]
  buscar: string
  by: string
  orden:  'desc' | 'asc'
  modal: boolean
  open: boolean
  aux: boolean
  dolar: boolean
}

export default class Tabla<p = any> extends React.Component<p, State> {
  buscarEn: string[] = []
  fechas: string[] = []
  buscarLabel = 'BUSCAR'
  col = 8
  mostar = 7
  constructor(p: any) {
    super(p)
    this.state = {
      itens: [],
      buscar: '',
      by: 'id',
      orden: 'desc',
      modal: false,
      open: false,
      aux: false,
      dolar: false,
    }
    this.setState = this.setState.bind(this)
    this.Buscador = this.Buscador.bind(this)
    this.busqueda = this.busqueda.bind(this)
    this.Body = this.Body.bind(this)
    this.Header = this.Header.bind(this)
    this.Row = this.Row.bind(this)
    this.Th = this.Th.bind(this)
  }
  Buscador() {
    return (
      <InputGroup style={{ paddingBottom: '15px' }}>
        <InputGroup.Prepend>
          <InputGroup.Text>{this.buscarLabel}</InputGroup.Text>
        </InputGroup.Prepend>
        <InputText name='buscar' className='form-control' upper setData={this.setState} update='buscar' value={this.state.buscar} />
        <InputGroup.Append>
          <Button variant='primary'>
            <span className='fa fa-search'></span> BUSCAR
          </Button>
        </InputGroup.Append>
      </InputGroup>
    )
  }
  Th(p: { width: string | number; label?: string; children: any; aling?: 'center' | 'right' | 'left' }) {
    const {
      setState,
      state: { by, orden },
    } = this
    return <Th {...p} setOrden={setState} by={by} orden={orden} />
  }
  Body() {
    const { col, mostar, Row, Header } = this
    return (
      <Body mostrar={mostar} col={col} row={Row} itens={this.filter()}>
        <Header />
      </Body>
    )
  }
  render() {
    const { Body, Buscador } = this
    return (
      <>
        <Buscador />
        <Body />
      </>
    )
  }
  Header() {
    return <></>
  }
  Row(p: any) {
    console.log(p)
    return <></>
  }
  getItens() {
    return this.state.itens
  }
  filter() {
    return this.ordenar()
  }
  busqueda() {
    const { state: { buscar }, buscarEn, fechas } = this
    return busqueda(this.getItens(), buscar, buscarEn, fechas);
  }
  ordenar() {
    const { state: { by, orden }, busqueda, fechas } = this
    return ordenar(busqueda(), by, orden, fechas);
  }
}
