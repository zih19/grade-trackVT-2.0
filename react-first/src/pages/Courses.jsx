//Courses (params)
import {Grid, Typography, CardActionArea, Card, CardContent} from '@mui/material';
import {useParams, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';

const Courses = () => {
    
    const[coursesData, setCourses] = useState([]);
    const {majorId} = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:8000/api/majors/${majorId}`)
        .then(response => response.json())
        .then(courses => setCourses(courses))
        .catch(err => console.error(err))
    }, [majorId]);


    const navigate = useNavigate();

    let course = coursesData.find((course)=>course.major === majorId);
    
    if (!course) {
        return <Typography variant='h6'> The course was not found!</Typography>
    }

    let card_color;
    switch(majorId) {
      case 'AOE': 
         card_color = '#1e88e5';
         break;
      case 'BC':
         card_color = '#afb42b';
         break;
      case 'BMES':
         card_color = '#689f38';
         break;
      case 'BSE':
         card_color = '#ff8a80';
         break;
      case 'CEE':
        card_color = '#d500f9';
        break;
      case 'CEM':
        card_color = '#6d4c41';
        break;
      case 'CHM':
        card_color = '#eeeeee';
        break;
      case 'CS':
        card_color = '#69f0ae';
        break;
      case 'ECE':
        card_color = '#18ffff';
        break;
      case 'ESM':
        card_color = '#009688';
        break;
      case 'ISE':
        card_color = '#880e4f';
        break;  
      case 'ME':
        card_color = '#e65100';
        break;
      case 'MINE':
        card_color = '#ffc400';
        break;
      case 'MSE':
        card_color = '#1a237e';
        break;
      default:
        card_color = '#263238';
        break;
    }

    


    const handleCourse = (course) => {
           navigate(`/Major/${majorId}/${course}`);
    }

    return(
      <Grid container sx={{pt: '10px'}}>
        {
            course.courses.map((course) => (
                <Grid item xs={12} 
                           sm={6} 
                           md={4} 
                           lg={3} 
                           sx={{pb: '35px'}} key={course.number}>
                    <Card sx={{maxWidth: '345px',
                               height: '100%',
                               backgroundColor: card_color,
                               display: 'flex',
                               flexDirection: 'column'}}>
                        <CardActionArea onClick={() => handleCourse(course.number)}>
                       
                            <CardContent sx={{minHeight: '100%'}}>

                                <Typography variant='h5' 
                                            gutterBottom
                                            component='div'
                                            sx={{
                                                fontFamily: 'Arial',
                                                fontWeight: 'bold',
                                                minHeight: '64px'
                                            }}>
                                        {course.number}
                                </Typography>

                                <Typography variant='h5' 
                                            sx={{
                                                fontFamily: 'Arial',
                                                fontWeight: 'bold'}}>
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