import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {Grid, Paper, Typography, Box} from '@mui/material';

const Dashboard = () => {
    const {department, majorId, courseId} = useParams();
    const [courseDetails, setCourseDetails] = useState([]);

    useEffect(()=> {
        fetch(`http://localhost:8000/api/${department}/${majorId}/${courseId}`)
        .then(response=> {
              if (!response.ok) {
                 throw new Error("This course does not have a description yet!");
              }
              return response.json();
        })
        .then(data => setCourseDetails(data))
        .catch(err => {
           console.error(err);
           setCourseDetails([]);    
        });
    }, [department, majorId, courseId]);

    if (courseDetails.length === 0) {
        <Typography variant='h5'> Course Not Found</Typography>
        return;
    }

  return (
    <Box>
      <Typography variant='h1'> {courseDetails.Course.Title} </Typography>
      
      <Grid container spacing={2} sx={{pt: '8px'}}>
    
            <Grid item xs={4} sx={{pb: '5px'}}>
                <Paper sx={{height: '300px'}}>
                <Typography variant='h5' sx={{fontFamily: 'Lato', fontWeight: 'bold'}}> Description </Typography>
                    <Typography variant='b5' 
                        gutterBottom
                        component='div'
                        sx={{
                            fontFamily: 'Lato',
                            minHeight: '64px'
                        }}>
                    {courseDetails.Course.Description}
                    </Typography>
                </Paper>
            </Grid>

            <Grid item xs={4} sx={{pb: '5px'}}>
                <Paper sx={{height: '300px'}}>
                <Typography variant='h5' sx={{ paddingBottom: '55px', fontFamily: 'Lato', fontWeight: 'bold'}}> Average GPA </Typography>
                <Typography variant='h1' 
                        gutterBottom
                        component='div'
                        sx={{
                            top: "10px",
                            fontFamily: 'Lato',
                            minHeight: '64px',
                            textAlign: 'center'
                        }}>
                    {courseDetails.GPA}
                    </Typography>
                </Paper>
            </Grid>

            <Grid item xs={4} sx={{pt: '5px'}}>
                <Paper sx={{height: '300px'}}>
                <Typography variant='h5' sx={{paddingBottom: '55px', fontFamily: 'Lato', fontWeight: 'bold'}}> Total Attendance </Typography>  
                <Typography variant='h4' 
                        gutterBottom
                        component='div'
                        sx={{
                            top: "10px",
                            fontFamily: 'Lato',
                            minHeight: '64px',
                            textAlign: 'center'
                        }}>
                    Enrollment at the beginning of the semester: {courseDetails.Numbers.Enrolled}
                </Typography>
                <Typography variant='h4' 
                        gutterBottom
                        component='div'
                        sx={{
                            top: "10px",
                            fontFamily: 'Lato',
                            minHeight: '64px',
                            textAlign: 'center'
                        }}>
                    Number of students that withdrew the course: {courseDetails.Numbers.Withdrawn}
                </Typography>
                </Paper>
            </Grid>

            <Grid item xs={4}>
                <Paper sx={{height: '300px'}}>
                <Typography variant='h5' sx={{paddingBottom: '55px', fontFamily: 'Lato', fontWeight: 'bold'}}> Credits </Typography>
                    <Typography variant='h1' 
                        gutterBottom
                        component='div'
                        sx={{
                            top: "10px",
                            fontFamily: 'Lato',
                            minHeight: '64px',
                            textAlign: 'center'
                        }}>
                        {courseDetails["Credit(s)"]}
                    </Typography>
                </Paper>
            </Grid>

            <Grid item xs={4}>
                <Paper sx={{height: '300px', overflow: 'auto'}}>
                    <Typography variant='h5' sx={{paddingBottom: '25px', fontFamily: 'Lato', fontWeight: 'bold'}}> Instructors </Typography>

                    {
                        courseDetails["Instructor(s)"].map((instructor) => (
                            <Typography variant='b1' 
                            gutterBottom
                            component='div'
                            sx={{
                                top: "10px",
                                fontFamily: 'Lato',
                                minHeight: '32px',
                                textAlign: 'center'
                            }}>
                    {instructor}
                </Typography>
                    ))}
                </Paper>
            </Grid>

            <Grid item xs={4}>
                <Paper sx={{height: '300px'}}>Box 6</Paper>
            </Grid>
      </Grid>
      </Box>
   );
}
export default Dashboard;