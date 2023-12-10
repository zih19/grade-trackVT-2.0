import {Grid, Typography, CardActionArea, Card, CardContent, Button} from '@mui/material';
import {useParams, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';

const Courses = () => {
    
    
    const {department, majorId} = useParams();

    const[coursesData, setCourses] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:8000/api/${department}/${majorId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error("Course Not Found");
          }
          return response.json();
        })
        .then(data => setCourses(data))
        .catch(err => { 
          console.error(err);
          setCourses([]);
        })
    }, [department, majorId]);


    const navigate = useNavigate();

    //let course = coursesData.find((course)=>course.major === majorId);
    
    if (coursesData.length === 0) {
        return <Typography variant='h6'> The course was not found!</Typography>
    }

    const handleCourse = (course) => {
           navigate(`/${department}/${majorId}/${course}`);
    }

    return(
      <Grid container sx={{pt: '10px'}}>
        {
            coursesData.map((course) => (
                <Grid item xs={12} 
                           sm={6} 
                           md={4} 
                           lg={3} 
                           sx={{pb: '35px'}} key={course.number}>
                    <Card sx={{maxWidth: '345px',
                               height: '100%',
                               backgroundColor: "grey",
                               display: 'flex',
                               flexDirection: 'column'}}>
                        <CardActionArea sx={{height: '100%'}} onClick={() => handleCourse(course.number)}>
                       
                            <CardContent sx={{minHeight: '100%'}}>

                                <Typography variant='h5' 
                                            gutterBottom
                                            component='div'
                                            sx={{
                                                fontFamily: 'Lato',
                                                fontWeight: 'bold',
                                                minHeight: '64px'
                                            }}>
                                        {course.number}
                                </Typography>

                                <Typography variant='h5' 
                                            sx={{
                                                fontFamily: 'Lato',
                                                fontWeight: 'bold',
                                                fontStyle: 'italic',
                                                color: 'inherited'}}>
                                        {course.title}
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



export default Courses;