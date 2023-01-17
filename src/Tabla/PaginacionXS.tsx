import React from 'react'
import { Pagination } from 'react-bootstrap'
type padre = React.HTMLProps<HTMLTextAreaElement>
interface Props extends padre {
  setpage: (page: number) => void
  length: number
  mostrar: number
  page: number
}
const xs = { padding: '.1rem .1rem .1rem .1rem', margin: '0 0 0 0', fontSize: '.75rem' }
export default function PaginacionXS(p: Props) {
  if (p.length === 0) return <></>
  const { setpage, length, mostrar, page } = p,
    total_page = Math.ceil(length / mostrar),
    buttons = []
  if (page === 1) {
    buttons.push(<Iten key='active1' active page={1} />)
  } else {
    buttons.push(<Iten key='p1' click={setpage.bind(p, 1)} page={1} />)
  }
  for (let i = 3; i > 0; i--) {
    if (page - i > 1) {
      if (i === 3) {
        buttons.push(<Pagination.Ellipsis style={xs} key='Ellipsis1' />)
      } else {
        buttons.push(<Iten key={'active' + (page - 1)} click={setpage.bind(p, page - i)} page={page - 1} />)
      }
    }
  }
  if (total_page > page && page > 1) {
    buttons.push(<Iten key={'active' + page} active page={page} />)
  }
  for (let i = 1; i < 4; i++) {
    if (page + i < total_page) {
      if (i === 3) {
        buttons.push(<Pagination.Ellipsis style={xs} key='Ellipsis2' />)
      } else {
        buttons.push(<Iten key={'active' + (page + i)} click={setpage.bind(p, page + i)} page={page + i} />)
      }
    }
  }
  if (page === total_page) {
    if (1 < total_page) {
      buttons.push(<Iten key={'active' + total_page} active page={total_page} />)
    }
  } else {
    buttons.push(<Iten key={'p' + total_page} click={setpage.bind(p, total_page)} page={total_page} />)
  }
  return <Pagination style={{ position: 'relative', float: 'right' }}>{buttons}</Pagination>
}

function Iten({ page, active, click }: { page: number; active?: boolean; click?: () => void }) {
  return (
    <Pagination.Item active={active} onClick={click} style={xs}>
      {page}
    </Pagination.Item>
  )
}
