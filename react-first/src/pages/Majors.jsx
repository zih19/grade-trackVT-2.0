//Majors (params) (1) id (2) name
//We have a database for all majors[courses]
//One server API function that returns information of a particular major thorugh its id | fetch it with useeffect(){, []}
//major id, major name, list of courses
//heading: major name
//map function to display all the courses cards inside the major
//courses.map(<card courseId: ____, courseName: ______, courseURL: _____>)
//inside card you have a navigate that takes you the course component, when you navigate to course component send the course_id to the reusable course component

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'


const Majors = () => {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Computer Science</Card.Title>
            <Card.Text>
              Browse the courses that are offered within the computer science program.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
    );
}

export default Majors;