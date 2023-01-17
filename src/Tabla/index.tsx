import { InputText } from 'component-bootstrap'
import React from 'react'
import { Button, InputGroup } from 'react-bootstrap'
import { fechaToNumber, formatoFecha, zfill } from 'utiles'
import Body from './Body'
import Th from './Th'
interface State {
  itens: any[]
  buscar: string
  by: string
  orden: string
  modal: boolean
  open: boolean
  aux: boolean
  dolar: boolean
}

export default class Tabla<p = any> extends React.Component<p, State> {
  buscarEn: string[] = []
  buscarLabel = 'BUSCAR'
  col = 8
  mostar = 7
  constructor(p: any) {
    super(p)
    this.state = {
      itens: [],
      buscar: '',
      by: 'codigo',
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
        <InputText className='form-control' upper setData={this.setState} update='buscar' value={this.state.buscar} />
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
    const {
      state: { buscar },
      buscarEn,
    } = this
    if (buscar !== '') {
      return this.getItens().filter((iten) => {
        const en = buscar.split(' ')
        let pasa = false
        buscarEn.forEach((label) => {
          let considencias = 0
          en.forEach((e) => {
            if (label === 'fecha') {
              if (formatoFecha(iten[label]).indexOf(e) > -1) {
                considencias++
              }
            } else if (isNaN(iten[label])) {
              if (iten[label].toUpperCase().indexOf(e) > -1) {
                considencias++
              }
            } else {
              if (zfill(parseFloat(iten[label])).indexOf(e) > -1) {
                considencias++
              }
            }
          })
          if (en.length === considencias) {
            pasa = true
          }
        })
        return pasa
      })
    }
    return this.getItens()
  }
  ordenar() {
    const {
      state: { by, orden },
      busqueda,
    } = this
    return busqueda().sort((a: any, b: any) => {
      if (by === 'fecha') {
        const fa = fechaToNumber(a.fecha),
          fb = fechaToNumber(b.fecha)
        if (orden === 'desc') return fb < fa ? -1 : fb > fa ? 1 : 0
        else return fa < fb ? -1 : fa > fb ? 1 : 0
      } else if (isNaN(b[by])) {
        if (orden === 'desc') return a[by] < b[by] ? -1 : a[by] > b[by] ? 1 : 0
        else return b[by] < a[by] ? -1 : b[by] > a[by] ? 1 : 0
      } else {
        if (orden === 'desc') return b[by] - a[by]
        else return a[by] - b[by]
      }
    })
  }
}
