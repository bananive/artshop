import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <div className='my-bg'>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <video className='my-video' controls src='/images/1.mp4'/>
          </Col>
          <Col className='text-center py-3'>
              <video className='my-video' controls src='/images/2.mp4'/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
