import React from 'react'

interface Props {
  width: string | number
  children: any
  align?: 'center' | 'right' | 'left'
  tip?: string
}
export function THFila({ width, children, align, tip }: Props) {
  return (
    <th data-tip={tip} style={{ paddingTop: '1.25rem', minWidth: width, maxWidth: width, width, textAlign: align }}>
      <span>{children} </span>
    </th>
  )
}
export function THInput({ width, children, align, tip }: Props) {
  return (
    <th style={{ minWidth: width, maxWidth: width, width, textAlign: align }} data-tip={tip}>
      {children}
    </th>
  )
}
