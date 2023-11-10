import React from 'react';
import { Typography, Container, Grid, Paper, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

const MajorDescription = ({majorData}) => {
    
    const { majorID } = useParams();
    const major = majorData.find((m) => m.courseURL === `/majordescription:${majorID}`);
    if (!major) {
         return <Typography variant='h6'> Major was not found!</Typography>
    }
    return(
        <Container maxWidth='xl' sx={{pb: '12px'}}>
             <Typography variant='h2' component='div' sx={{mb: '10px'}}>{major.title}</Typography>
             {
                major.content.map((index, paragraph) => {
                    if(index !== major.content.length - 1) {
                        return <Typography key={index} variant='body1' component='section' sx={{pb: '10px'}}> {paragraph} </Typography>
                    } 
                    else {
                        return <Typography key={index} variant='body1' component='section' sx={{pb: '30px'}}> {paragraph} </Typography>
                    }
                })
             }
             <Grid container spacing={2}>
             {
                    major.imageURLs.map((index, imageContent) => (
                       
                        <Grid item xs={12} md={4} key={index}>
                            <Paper elevation={3} sx={{padding: 2}}>  
                                <Box component='img'
                                        sx={{height: '200px',
                                            width: '100%',
                                            objectFit: 'cover',
                                            mb: '15px'}}>
                                        src={imageContent.imagelink}
                                        alt={imageContent.label}
                                </Box>
                                <Typography variant='body2' >
                                    {imageContent.label}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))
            }

             </Grid>
        </Container>
    )

}
export default MajorDescription;