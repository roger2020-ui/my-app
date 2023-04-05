import React from 'react'
import { ListGroup } from 'react-bootstrap'
const Sidebar = () => {
  return (
    <div>
      <ListGroup variant='flush'>
        <ListGroup.Item>Item 1</ListGroup.Item>
        <ListGroup.Item>Item 2</ListGroup.Item>
        <ListGroup.Item>
          Item 3
          <ul className='list-unstyled ml-3'>
            <li>Subitem 1</li>
            <li>Subitem 2</li>
            <li>Subitem 3</li>
          </ul>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default Sidebar
