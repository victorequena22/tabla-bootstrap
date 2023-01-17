import React from 'react'
interface Props {
  width: string | number
  children: any
  aling?: 'center' | 'right' | 'left'
  label?: string
  by?: string
  orden?: string
  setOrden?: (d: any) => void
}
export default function Th({ width, label, children, aling = 'center', orden, by, setOrden }: Props) {
  function Flechas() {
    if (by === label)
      if (orden === 'desc') return <i className='fa fa-arrow-up' />
      else return <i className='fa fa-arrow-down' />
    return <></>
  }
  function colorOrden() {
    if (by === label) {
      return '#afd9ee'
    }
    return '#bfe9fe'
  }
  return (
    <th
      style={{
        width,
        maxWidth: width,
        minHeight: width,
        textAlign: aling,
        backgroundColor: colorOrden(),
      }}
      onClick={() => {
        if (label && setOrden)
          if (by === label) {
            if (orden === 'asc') setOrden({ orden: 'desc' })
            else setOrden({ orden: 'asc' })
          } else {
            setOrden({ orden: 'desc', by: label })
          }
      }}
    >
      {children} <Flechas />
    </th>
  )
}
