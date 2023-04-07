import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Sidebar = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={3}>
            <p>Sidebar content goes here</p>
          </Col>
          <Col xs={9}>
            <p>Main content goes here</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Sidebar
