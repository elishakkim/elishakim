import React from 'react'
import './style.scss'
import { IoIosCode } from 'react-icons/io'
import { Redirect } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap'

const Header = (props) => {
  return (
    <div className='header'>
      <Container>
        <Row>
          <Col className='col'>
            <IoIosCode className='logo'size={110} onClick={() => <Redirect to='/' />}/>                  
          </Col>
          <Col className='col'>
            <h3 className='name'>Elisha Kim</h3>
            <div className='title'>Full-Stack Developer</div>    
          </Col>
        </Row>  
      </Container>
    </div>
  )
}

export default Header