import React from 'react'
import { Pagination } from 'react-bootstrap'
type padre = React.HTMLProps<HTMLTextAreaElement>
interface Props extends padre {
  setpage: (page: number) => void
  length: number
  mostrar: number
  page: number
}

export default function Paginacion(p: Props) {
  if (p.length === 0) return <></>
  const { setpage, length, mostrar, page } = p,
    total_page = Math.ceil(length / mostrar),
    buttons = []
  if (page === 1) {
    buttons.push(
      <Pagination.Item key='active1' active>
        1
      </Pagination.Item>,
    )
  } else {
    buttons.push(
      <Pagination.Item key='p1' onClick={setpage.bind(p, 1)}>
        1
      </Pagination.Item>,
    )
  }
  for (let i = 3; i > 0; i--) {
    if (page - i > 1) {
      if (i === 3) {
        buttons.push(<Pagination.Ellipsis key='Ellipsis1' />)
      } else {
        buttons.push(
          <Pagination.Item key={'p' + (page - i)} onClick={setpage.bind(p, page - i)}>
            {page - i}
          </Pagination.Item>,
        )
      }
    }
  }
  if (total_page > page && page > 1) {
    buttons.push(<Pagination.Item active>{page}</Pagination.Item>)
  }
  for (let i = 1; i < 4; i++) {
    if (page + i < total_page) {
      if (i === 3) {
        buttons.push(<Pagination.Ellipsis key='Ellipsis2' />)
      } else {
        buttons.push(
          <Pagination.Item key={'p' + (page + i)} onClick={setpage.bind(p, page + i)}>
            {page + i}
          </Pagination.Item>,
        )
      }
    }
  }
  if (page === total_page) {
    if (1 < total_page) {
      buttons.push(
        <Pagination.Item key={'active' + total_page} active>
          {total_page}
        </Pagination.Item>,
      )
    }
  } else {
    buttons.push(
      <Pagination.Item key={'p' + total_page} onClick={setpage.bind(p, total_page)}>
        {total_page}
      </Pagination.Item>,
    )
  }
  return <Pagination style={{ position: 'relative', float: 'right' }}>{buttons}</Pagination>
}
