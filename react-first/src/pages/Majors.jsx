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

import {Grid, Box, Paper, Typography, CardActionArea} from '@mui/material';
import { useState } from 'react'; 
import {useNavigate} from 'react-router-dom';


const Majors = () => {
  

  const majorsList = [
      { id: 'AOE', 
        title: 'Aerospace Engineering(AOE)', 
        content: 'Click to learn more about the courses offered in the aerospace program.', 
        coursesURL: '/Major/AOE',
        image: 'https://eng.vt.edu/content/eng_vt_edu/en/academics/undergraduate-students/explore-engineering/ocean-engineering/jcr:content/content/adaptiveimage.transform/xl-medium/image.jpg'
      },
      { id: 'BSE', 
        title: 'Biological Systems Engineering(BSE)', 
        content: 'Click to learn more about the courses offered in the biological systems program.', 
        coursesURL: '/Major/BSE',
        image: 'https://eng.vt.edu/content/eng_vt_edu/en/academics/undergraduate-students/explore-engineering/biological-systems-engineering/jcr:content/content/adaptiveimage.transform/xl-medium/image.jpg'
      },
      { id: 'BE', 
        title: 'Biomedical Engineering(BE)', 
        content: 'Click to learn more about the courses offered in the biomedical program.', 
        coursesURL: '/Major/BE',
        image: 'https://eng.vt.edu/content/eng_vt_edu/en/academics/undergraduate-students/explore-engineering/biomedical-engineering/jcr:content/content/adaptiveimage.transform/xl-medium/image.jpg'  
      },
      { id: 'BC', 
        title: 'Building Construction(BC)', 
        content: 'Click to learn more about the courses offered in the building construction program.', 
        coursesURL: '/Major/BC',
        image: 'https://eng.vt.edu/content/eng_vt_edu/en/academics/undergraduate-students/explore-engineering/building-construction/jcr:content/content/adaptiveimage.transform/xl-medium/image.jpg'
      },
      { id: 'CHE', 
        title: 'Chemical Engineering(CHE)', 
        content: 'Click to learn more about the courses offered in the chemical engineering program.', 
        coursesURL: '/Major/CHE',
        image: 'https://eng.vt.edu/content/eng_vt_edu/en/academics/undergraduate-students/explore-engineering/chemical-engineering/jcr:content/content/adaptiveimage.transform/xl-medium/image.jpg'  
      },
      { id: 'CEE', 
        title: 'Civil Engineering(CEE)', 
        content: 'Click to learn more about the courses offered in the civil engineering program.', 
        coursesURL: '/Major/CEE',
        image: 'https://eng.vt.edu/content/eng_vt_edu/en/academics/undergraduate-students/explore-engineering/civil-engineering/jcr:content/content/adaptiveimage.transform/xl-medium/image.jpg' 
      },
      { id: 'CS', 
        title: 'Computer Science(CS)', 
        content: 'Click to learn more about the courses offered in the computer science program.', 
        coursesURL: '/Major/CS',
        image: 'https://eng.vt.edu/content/eng_vt_edu/en/academics/undergraduate-students/explore-engineering/computer-science/jcr:content/content/adaptiveimage.transform/xl-medium/image.jpg'  
      },
      { id: 'CEM', 
        title: 'Construction Engineering and Management(CEM)', 
        content: 'Click to learn more about the courses offered in the construction and engineering management program.', 
        coursesURL: '/Major/CEM',
        image: 'https://eng.vt.edu/content/eng_vt_edu/en/academics/undergraduate-students/explore-engineering/construction-engineering-and-management/jcr:content/content/adaptiveimage.transform/xl-medium/image.jpg'  
      },
      { id: 'ECE', 
        title: 'Electrical Engineering(ECE)', 
        content: 'Click to learn more about the courses offered in the electrical engineering program.', 
        coursesURL: '/Major/ECE',
        image: 'https://eng.vt.edu/content/eng_vt_edu/en/academics/undergraduate-students/explore-engineering/computer-engineering/jcr:content/content/adaptiveimage.transform/xl-medium/image.jpg'  
      },
      { id: 'ISE', 
        title: 'Industrial and Systems Engineering(ISE)', 
        content: 'Click to learn more about the courses offered in the industrial and systems engineering program.', 
        coursesURL: '/Major/ISE',
        image: 'https://eng.vt.edu/content/eng_vt_edu/en/academics/undergraduate-students/explore-engineering/industrial-and-systems-engineering/jcr:content/content/adaptiveimage.transform/xl-medium/image.jpg'  
      },
      { id: 'MSE', 
        title: 'Materials Science Engineering(MSE)', 
        content: 'Click to learn more about the courses offered in the materials science program.', 
        coursesURL: '/Major/MSE',
        image: 'https://eng.vt.edu/content/eng_vt_edu/en/academics/undergraduate-students/explore-engineering/materials-science-and-engineering/jcr:content/content/adaptiveimage.transform/xl-medium/image.jpg'  
      },
      { id: 'ME', 
        title: 'Mechanical Engineering(ME)', 
        content: 'Click to learn more about the courses offered in the mechanical engineering program.', 
        coursesURL: '/Major/ME',
        image: 'https://eng.vt.edu/content/eng_vt_edu/en/academics/undergraduate-students/explore-engineering/mechanical-engineering/jcr:content/content/adaptiveimage.transform/xl-medium/image.jpg' 
      },
      { id: 'MINE', 
        title: 'Mining Engineering(MINE)', 
        content: 'Click to learn more about the courses offered in the mining engineering program.', 
        coursesURL: '/Major/MINE',
        image: 'https://eng.vt.edu/content/eng_vt_edu/en/academics/undergraduate-students/explore-engineering/mining-engineering/jcr:content/content/adaptiveimage.transform/xl-medium/image.jpg'  
      }
  ]

  
  const navigate = useNavigate();

  const handleClick = (majorId) => {
    navigate(`/Major/${majorId}`);
  }

    return (
       <Grid container sx={{pt: '10px'}}>
        {
          majorsList.map((major) => (
            <Grid Item xs={12} md={4} sx={{pb: "35px"}} key={major.id} >
              <CardActionArea onClick={()=> handleClick(major.id)}>
                <Paper elevation={3} sx={{padding: "2px"}}>
                   <Box
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
                
                    <Typography variant="h4"
                                sx={{fontFamily: 'Arial',
                                    fontWeight: 'bold',
                                    color: 'pink'}}>{major.title}</Typography>
                </Paper>
                <Typography>{major.content}</Typography> 
              </CardActionArea>   
            </Grid>
          ))
        }

       </Grid>
    );
}

export default Majors;