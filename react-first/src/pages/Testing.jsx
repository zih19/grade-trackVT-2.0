import React, { Fragment, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import { BarChart } from '@mui/x-charts/BarChart';

const Testing = () => {

    const[show1, setShow1] = useState(false);
    const[show2, setShow2] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const handleShow2 = () => setShow2(true);
    return (
        <>
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>Class Visualizations</Card.Title>
                    <Card.Text>
                        Click on the following buttons to see the visualizations of this class' grade distribution.
                    </Card.Text>
                    <Button variant="primary" onClick={handleShow1}>Bar Chart</Button>
                    <Button variant="primary" onClick={handleShow2}>Line Chart</Button>
                </Card.Body>
            </Card>

            <Modal
                show={show1}
                onHide={handleClose1}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Bar Chart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <BarChart
                    xAxis={[
                      {
                        id: 'barCategories',
                        data: ['bar A', 'bar B', 'bar C'],
                        scaleType: 'band',
                      },
                    ]}
                    series={[
                      {
                        data: [2, 5, 3],
                      },
                    ]}
                    width={500}
                    height={300}
                />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose1}>
                    Close
                  </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Testing