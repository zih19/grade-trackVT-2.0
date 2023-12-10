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

  const navigate = useNavigate();

  const handleClick = (majorId) => {
    navigate(`/${department}/${majorId}`);
  }

  if (majorsData.length === 0) {
      return <Typography variant='h5'> Data collection is still ongoing for this department </Typography>
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
                  <CardActionArea sx={{height: '100%'}} onClick={()=> handleClick(major.id)}>
                       
                            <CardMedia
                              component="img"
                              sx={{
                                  height: '300px',
                                  width: '100%',
                                  objectFit: 'cover',
                                  mb: '15px'
                              }}
                              // Image source located in major.image.
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