/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { Modal } from 'react-bootstrap'
import Tabla from '../Tabla'
interface Props {
  title?: string
  open: boolean
  close: () => void
  add: (d: any) => void
}
// eslint-disable-next-line @typescript-eslint/ban-types
export default class ModalBusqueda<p = {}> extends Tabla<Props & p> {
  variant = 'bg-info'
  constructor(p: any) {
    super(p)
    this.Title = this.Title.bind(this)
  }
  Title() {
    return <></>
  }
  render() {
    const {
      Body,
      Buscador,
      Title,
      props: { open, close },
    } = this
    return (
      <Modal show={open} onHide={close} size='xl'>
        <Modal.Header className={this.variant} closeButton>
          <Title />
        </Modal.Header>
        <Modal.Body>
          <div style={{ padding: '10px 10px 10px 10px', overflowX: 'scroll' }}>
            <Buscador />
            <Body />
          </div>
        </Modal.Body>
      </Modal>
    )
  }
  reset() {}
  set() {}
  componentDidMount() {
    this.set()
  }
}
