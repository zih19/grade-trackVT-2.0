import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Ben from '../Assets/Authors/BenCulverhouse.jpg';
import Zi from '../Assets/Authors/ZiHuang.jpg';

const About = () => {
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
            <h1>About Us</h1>
            <div className='padding'></div>
            <div className='about_container'>
                <div className='about_body'>
                    Who We Are: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                
                <div className='padding'></div>

                <div className='about_body'>
                    Purpose Of Website : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
            <div className='padding'></div>
                <Row>
                    <Col>
                        <Card style={{width: '14rem'}}>
                            <Card.Img variant='top' src={Ben} />
                            <Card.Body>
                                <Card.Title>Ben Culverhouse</Card.Title>
                                <Button variant="primary" onClick={handleShow1}>Contact Me</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                    <Card style={{width: '14rem'}}>
                        <Card.Img variant='top' src={Zi} />
                        <Card.Body>
                            <Card.Title>Zi Huang</Card.Title>
                            <Button variant="primary" onClick={handleShow2}>Contact Me</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col>
                    <Card style={{width: '14rem'}}>
                        <Card.Img variant='top' src='holder.js/100px180' />
                        <Card.Body>
                            <Card.Title>Team Member</Card.Title>
                            <Button variant="primary" onClick={handleShow3}>Contact Me</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col>
                    <Card style={{width: '14rem'}}>
                        <Card.Img variant='top' src='holder.js/100px180' />
                        <Card.Body>
                            <Card.Title>Team Member</Card.Title>
                            <Button variant="primary" onClick={handleShow4}>Contact Me</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col>
                    <Card style={{width: '14rem'}}>
                        <Card.Img variant='top' src='holder.js/100px180' />
                        <Card.Body>
                            <Card.Title>Team Member</Card.Title>
                            <Button variant="primary" onClick={handleShow5}>Contact Me</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>

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
                    <a href='mailto: zih19@vt.edu'> Email </a> 
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
                    <Modal.Title>Memeber Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    LinkedIn:
                    <br></br>
                    Personal Link:
                    <br></br>
                    Email:
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
                    <Modal.Title>Memeber Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    LinkedIn:
                    <br></br>
                    Personal Link:
                    <br></br>
                    Email:
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
                    <Modal.Title>Memeber Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    LinkedIn:
                    <br></br>
                    Personal Link:
                    <br></br>
                    Email:
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