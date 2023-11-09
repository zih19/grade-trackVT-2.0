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
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Container from 'react-bootstrap/Container';


const Majors = () => {

  const majorsData = [
    { id: 1, title: 'Aerospace Engineering', content: 'Click to learn more about the courses offered in the aerospace program.', coursesURL: '/Courses' },
    { id: 2, title: 'Biological Systems Engineering', content: 'Click to learn more about the courses offered in the biological systems program.', coursesURL: '/Courses'  },
    { id: 3, title: 'Biomedical Engineering', content: 'Click to learn more about the courses offered in the biomedical program.', coursesURL: '/Courses'  },
    { id: 4, title: 'Building Construction', content: 'Click to learn more about the courses offered in the building construction program.', coursesURL: '/Courses'  },
    { id: 5, title: 'Chemical Engineering', content: 'Click to learn more about the courses offered in the chemical engineering program.', coursesURL: '/Courses'  },
    { id: 6, title: 'Civil Engineering', content: 'Click to learn more about the courses offered in the civil engineering program.', coursesURL: '/Courses'  },
    { id: 7, title: 'Computer Engineering', content: 'Click to learn more about the courses offered in the computer engineering program.', coursesURL: '/Courses'  },
    { id: 8, title: 'Computer Science', content: 'Click to learn more about the courses offered in the computer science program.', coursesURL: '/Courses'  },
    { id: 9, title: 'Construction Engineering and Management', content: 'Click to learn more about the courses offered in the construction and engineering management program.', coursesURL: '/Courses'  },
    { id: 10, title: 'Electrical Engineering', content: 'Click to learn more about the courses offered in the electrical engineering program.', coursesURL: '/Courses'  },
    { id: 11, title: 'Industrial and Systems Engineering', content: 'Click to learn more about the courses offered in the industrial and systems engineering program.', coursesURL: '/Courses'  },
    { id: 12, title: 'Materials Science Engineering', content: 'Click to learn more about the courses offered in the materials science program.', coursesURL: '/Courses'  },
    { id: 13, title: 'Mechanical Engineering', content: 'Click to learn more about the courses offered in the mechanical engineering program.', coursesURL: '/Courses'  },
    { id: 14, title: 'Mining Engineering', content: 'Click to learn more about the courses offered in the mining engineering program.', coursesURL: '/Courses'  }]

    return (
      <Container>
      <h1>Majors</h1>
      <Row>
        {majorsData.map((major) => (
          <Col lg={3} md={6} key={major.id}>
            <Card style={{height: '15rem', width: '18rem'}}>
              <Card.Title>{major.title}</Card.Title>
              <Card.Text className='card-body d-flex flex-column' >{major.content}</Card.Text>
              <Button variant="primary" href={major.coursesURL}>Learn More</Button>
            </Card>
          </Col>
        ))}
      </Row>
      </Container>
    );
}

export default Majors;