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
    }


  return (
    <Box>
      <Typography variant='h2'> Title </Typography>
      
      <Grid container spacing={2} sx={{pt: '8px'}}>
    
            <Grid item xs={4} sx={{pb: '5px'}}>
                <Paper sx={{height: '300px'}}>Box 1</Paper>
            </Grid>

            <Grid item xs={4} sx={{pb: '5px'}}>
                <Paper sx={{height: '300px'}}>Box 2</Paper>
            </Grid>

            <Grid item xs={4} sx={{pt: '5px'}}>
                <Paper sx={{height: '300px'}}>Box 3</Paper>
            </Grid>

            <Grid item xs={4}>
                <Paper sx={{height: '300px'}}>Box 4</Paper>
            </Grid>

            <Grid item xs={4}>
                <Paper sx={{height: '300px'}}>Box 5</Paper>
            </Grid>

            <Grid item xs={4}>
                <Paper sx={{height: '300px'}}>Box 6</Paper>
            </Grid>
      </Grid>
      </Box>
   );
}
export default Dashboard;