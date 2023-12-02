import React, { Fragment, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Ben from '../Assets/Authors/BenCulverhouse.jpg';
import Zi from '../Assets/Authors/ZiHuang.jpg';
import Sachi from '../Assets/Authors/SachiChitre.jpg';
import Pri from '../Assets/Authors/PriBalaji.jpg';
import Tanisi from '../Assets/Authors/TanisiTripathi.jpg';
import {Typography} from '@mui/material';

const About = () => {

    //Bools and setters for the modals that are used on this page.
    const[show1, setShow1] = useState(false);
    const[show2, setShow2] = useState(false);
    const[show3, setShow3] = useState(false);
    const[show4, setShow4] = useState(false);
    const[show5, setShow5] = useState(false);

    //Handles all of the opening and closing of the individual modals.
    //Maybe this could be done better?
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    return (
        <>
            <Typography 
                variant = 'h2' 
                textAlign='center' 
                fontFamily='Arial' 
                fontstyle= 'italic'
                gutterBottom> 
                About Us 
            </Typography>
            <Container>
                <Card bg='light' border='primary' text='black' style={{fontSize:'20px'}}>
                    <Card.Body style={{fontFamily:'Arial'}}>
                        As current students at Virginia Tech, we have found the grade distribution website an extremely valuable tool to use while looking at the course offerings for each semester. 
                        Although we found this tool to be useful for students to research the classes that they were going to take, we felt that the concept could be elevated to allow for a better user experience in general.
                        With this goal in mind, we set out to create a website that allows users to easily inspect grade distributions of various majors, with visualizations included, such as multiple graphs that allow for an
                        easier understanding of a particular data set. Feel free to contact the development team through the components below.
                    </Card.Body>
                </Card>
            </Container>
            <div className='padding'></div>

            <Container>
                <Row xs={1} md={4} lg={5} className='g-5'>
                    <Col>
                        <Card style={{width: '14rem', height: '20rem'}}>
                            <Card.Img variant='top' height={'230rem'} src={Ben} />
                            <Card.Body>
                                <Card.Title>Ben Culverhouse</Card.Title>
                                <Button variant="primary" onClick={handleShow1}>Contact Me</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{width: '14rem', height: '20rem'}}>
                        <Card.Img variant='top' height={'223rem'} src={Zi} />
                        <Card.Body>
                            <Card.Title>Zi Huang</Card.Title>
                            <Button variant="primary" onClick={handleShow2}>Contact Me</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col>
                    <Card style={{width: '14rem', height: '20rem'}}>
                        <Card.Img variant='top' height={'223rem'} src={Sachi} />
                        <Card.Body>
                            <Card.Title>Sachi Chitre</Card.Title>
                            <Button variant="primary" onClick={handleShow3}>Contact Me</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col>
                    <Card style={{width: '14rem', height: '20rem'}}>
                        <Card.Img variant='top' height={'230rem'} src={Pri} />
                        <Card.Body>
                            <Card.Title>Priuyankaa Balaji</Card.Title>
                            <Button variant="primary" onClick={handleShow4}>Contact Me</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col>
                    <Card style={{width: '14rem', height: '20rem'}}>
                        <Card.Img variant='top' height={'230rem'} src={Tanisi} />
                        <Card.Body>
                            <Card.Title>Tanisi Tripathi</Card.Title>
                            <Button variant="primary" onClick={handleShow5}>Contact Me</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
            <Modal
                show={show1}
                onHide={handleClose1}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Ben Culverhouse</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <a href='https://www.linkedin.com/in/benjamin-culverhouse/'>LinkedIn</a> 
                    <br></br>
                    <a href='https://benjaminculverhouse.com/'>Personal Link</a>
                    <br></br>
                    Email: <a href='mailto:benc114@vt.edu'>benc114@vt.edu</a>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose1}>
                    Close
                  </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={show2}
                onHide={handleClose2}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Zi Huang</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <a href='https://www.linkedin.com/in/zi-huang-b612051a2/'> LinkedIn </a> 
                    <br></br>
                    <a href='https://github.com/zih19'> Personal Link </a>
                    <br></br>
                    Email: <a href='mailto: zih19@vt.edu'>zih19@vt.edu </a> 
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose2}>
                    Close
                  </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={show3}
                onHide={handleClose3}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Sachi Chitre</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <a href='https://linkedin.com/in/sachi-chitre'> LinkedIn </a> 
                    <br></br>
                    <a href='https://github.com/sachichitre'> Personal Link </a>
                    <br></br>
                    Email: <a href='mailto: sachic@vt.edu'>sachic@vt.edu </a>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose3}>
                    Close
                  </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={show4}
                onHide={handleClose4}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Priuyankaa Balaji</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <a href='https://www.linkedin.com/in/priuyankaa-balaji/'> LinkedIn </a> 
                    <br></br>
                    <a href='https://github.com/pribalaji'> Personal Link </a>
                    <br></br>
                    Email: <a href='mailto: pribalaji@vt.edu'>pribalaji@vt.edu </a>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose4}>
                    Close
                  </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={show5}
                onHide={handleClose5}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Tanisi Tripathi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <a href='https://www.linkedin.com/in/tanisi-tripathi/'> LinkedIn </a> 
                    <br></br>
                    <a href='https://github.com/tanisitripathi'> Personal Link </a>
                    <br></br>
                    Email: <a href='mailto: tanisi@vt.edu'>tanisi@vt.edu </a>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose5}>
                    Close
                  </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default About;