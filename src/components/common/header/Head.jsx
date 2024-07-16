import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './header.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DateTime from './DateTime'
import Navbar from '../../Navbar'


const Head = () => {
    return (
        <>
            <div className='top-header'>
                <Container>
                    <Row>
                        <div className='top-date-time'>
                            <DateTime></DateTime>
                      </div>
                      </Row>
                   
                </Container>

            </div>
            <Container>
                <div className='second-head'>
                    <Row>
                        <div className='singleCol social-icons-wrap '>
                            <Col><a className='social-icon' href='https://www.instagram.com/womenpreneurme/'>
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                                <a className='social-icon' href='https://twitter.com/womenpreneurme'>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a className='social-icon' href='https://www.linkedin.com/company/womenpreneurme/'>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a className='social-icon' href='https://www.youtube.com/@womenpreneurme'>
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </Col>
                        </div>
                        <Col>
                            <div className="logo">
                                <a href='https://womenpreneurme.com/'>
                                    <img width={360} height={84} src="https://womenpreneurme.com/wp-content/uploads/2023/06/cropped-cropped-cropped-WME-Logo-1000-%C3%97-250-px-1-1.png" alt='logo' sizes="(max-width: 360px) 100vw, 360px"></img>
                                </a>
                            </div>
                        </Col>
                        <Col>
                            <div class="header-right-button-wrap">
                                <div class="newsletter-element">
                                    <a href="https://issuu.com/firstreadmedia" data-popup="redirect">
                                        <span class="title-text">Magazines</span>                </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        <Navbar></Navbar>
        </>
    )
}

export default Head
