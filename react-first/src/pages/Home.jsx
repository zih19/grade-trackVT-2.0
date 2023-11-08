import React from 'react';
import { Container, Typography, Link, Grid, Box} from '@mui/material';
import COE from '../Assets/VT-COE.jpg';
import place from '../Assets/Placeholder.png';
import bulletin from '../Assets/VTBulletin.jpeg';

const Home = () => {
    return (
        <>            
            <Container maxwidth='lg' component='main' sx={{pb: 6}}>
                <Typography variant = 'h2' 
                            textAlign='center' 
                            fontFamily='Arial' 
                            fontstyle= 'italic'
                            gutterBottom> 
                      GradeTrackVT 
                </Typography>
                
                 <Grid container spacing={2}>
                    <Grid Item md={4}>
                         <Box 
                            component='img'
                            sx={{
                                height: 200,
                                width: '100%',
                                objectFit: 'cover',
                            }}
                            src={COE}
                            alt='VTCOE' />
                    </Grid>

                    <Grid Item md={4}>
                        <Box 
                          component='img'
                          sx={{
                            height: 200,
                            width: '100%',
                            objectFit: 'cover'
                          }}
                          src={place}
                          alt='VT campus' />
                    </Grid>

                    <Grid Item md={4}>
                        <Box
                        component='img'
                        sx= {{
                            height: 200,
                            width: '100%',
                            objectFit: 'cover'
                        }}
                        src={bulletin}
                        alt='VT Image'
                        />
                    </Grid>
                 </Grid>

                <Typography variant='h5' fontFamily='Arial'>
                    We are delighted to help thousands of students at Virginia Tech to be successful 
                    in their fields of study, no matter where they are in achieving their goals. To learn 
                    more about our current grade distributions, please login in to our system 
                    <Link href='/login'> here.</Link>  
                </Typography>
            </Container>
        </>
    );
}

export default Home;