import React from 'react'
import { CSSProperties } from 'react'
import { useState } from 'react'
import { Row } from 'react-bootstrap'
import Paginacion from './PaginacionXS'

interface Props {
  itens: any[]
  mostrar: number
  row: (d: any) => any
  style?: CSSProperties
  bodyStyle?: CSSProperties
}
export default function Paginador({ row, mostrar, itens, style, bodyStyle }: Props) {
  const [page, setPage] = useState(1)
  function filter(_k: any, i: number) {
    const init = (page - 1) * mostrar,
      fin = init + mostrar
    return i >= init && i < fin
  }
  function getRef({ codigo, id, status, estado, estatus }: any) {
    let key = 'key'
    if (status) key += status
    if (estado) key += estado
    if (estatus) key += estatus
    if (codigo) key += codigo
    if (id) key += id
    if (key === 'key') return key + Math.random()
    return key
  }
  function RowIten(d: any) {
    return <>{row(d)}</>
  }
  function BodyContent() {
    const iten = itens.filter(filter)
    return (
      <div className='w-100' style={{ height: 'calc(100%  - 55px)', ...bodyStyle }}>
        {iten.map((it) => (
          <RowIten key={getRef(it)} {...it} />
        ))}
      </div>
    )
  }
  return (
    <Row className='d-flex flex-row w-100 p-0 m-0' style={style}>
      <BodyContent />
      <Row className='d-flex flex-row w-100  p-0 m-0'>
        <div className='m-1 mr-auto' />
        <Paginacion
          key={`page${Math.random()}`}
          page={page}
          length={itens.length}
          mostrar={mostrar}
          setpage={setPage}
        />
      </Row>
    </Row>
  )
}
