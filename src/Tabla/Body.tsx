import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import Paginacion from './Paginacion'

interface Props {
  itens: any[]
  mostrar: number
  row: (d: any) => any
  col: number
  children: any
}
export default function Body({ children, col, row, mostrar, itens }: Props) {
  const [page, setPage] = useState(1)
  useEffect(() => setPage(1), [itens.length])
  function filter(_a: any, i: number) {
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
  function Row(d: any) {
    return <>{row(d)}</>
  }
  function BodyContent() {
    const iten = itens.filter(filter)
    return (
      <>
        {iten.map((it) => (
          <Row key={getRef(it)} {...it} />
        ))}
      </>
    )
  }
  return (
    <Table striped hover>
      <thead>{children}</thead>
      <tbody key={'mostrar' + page}>
        <BodyContent />
      </tbody>
      <tr>
        <td colSpan={col}>
          <Paginacion page={page} length={itens.length} mostrar={mostrar} setpage={setPage} />
        </td>
      </tr>
    </Table>
  )
}
