//Majors (params) (1) id (2) name
//We have a database for all majors[courses]
//One server API function that returns information of a particular major thorugh its id | fetch it with useeffect(){, []}
//major id, major name, list of courses
//heading: major name
//map function to display all the courses cards inside the major
//courses.map(<card courseId: ____, courseName: ______, courseURL: _____>)
//inside card you have a navigate that takes you the course component, when you navigate to course component send the course_id to the reusable course component

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import React from 'react'
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col'; 
// import Container from 'react-bootstrap/Container';

import {Grid, Card, CardContent, CardMedia, CardActionArea, Typography} from '@mui/material';
import {useNavigate, useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';


const Majors = () => {
  const { department } = useParams();
  const [majorsData, setMajors] = useState([]);
  
  useEffect(()=> {
       fetch(`http://localhost:8000/api/${department}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Department not found');
        }
        return response.json();
      })
      .then(data => setMajors(data))
      .catch(err => {
        console.error(err);
        setMajors([]);
      });
  }, [department]);

  
  if (majorsData.length === 0) {
    <Typography variant='h5'> The department does not have any majors currently </Typography>
  }
  
  const navigate = useNavigate();

  const handleClick = (majorId) => {
    navigate(`/${department}/${majorId}`);
  }

    return (
       <Grid container sx={{pt: '10px'}}>
        {
          majorsData.map(major => (
            <Grid Item xs={12} 
                       sm={6} 
                       md={5} 
                       lg={3} 
                       sx={{pb: "35px"}} key={major.id} >
              <Card sx={{maxWidth: '345px', 
                         height: '100%',
                         backgroundcolor: '#263238',
                         display: 'flex',
                         flexDirection: 'column'}}>
                  <CardActionArea onClick={()=> handleClick(major.id)}>
                       
                            <CardMedia
                              component="img"
                              sx={{
                                  height: '300px',
                                  width: '100%',
                                  objectFit: 'cover',
                                  mb: '15px'
                              }}
                              src={major.image}
                              alt={major.id}
                            />
                            
                            <CardContent sx={{minHeight: '100%'}}>
                              <Typography variant="h4"
                                          gutterBottom
                                          component='div'
                                          sx={{
                                            fontFamily: 'Arial',
                                            fontWeight: 'bold',
                                            color: 'pink',
                                            minHeight: '64px'}}>
                                  {major.title}
                              </Typography>
                              
                              <Typography variant= "body2" color= "text.secondary">
                                  {major.content}
                              </Typography>

                            </CardContent>
                        
                  </CardActionArea>
              </Card>   
            </Grid>
          ))
        } 
      </Grid>
  );
}

export default Majors;