import React from 'react';
import { Container, Typography, Link, Grid, Box} from '@mui/material';
import COE from '../Assets/VT-COE.jpg';
import place from '../Assets/Placeholder.png';
import bulletin from '../Assets/VTBulletin.jpg';
import backImage from '../Assets/HomeBackgroud.jpg'

const Home = () => {
    return (
        <Box 
            sx={{
                backgroundImage: `url(${backImage})`,
                backgroundSize: 'cover',
                bckgroundAttachment: 'fixed',
                width: '100%',
                minHeight: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: -1   
            }}>            
            <Container maxwidth='xl' component='main' sx={{pb: 6, position: 'relative', zIndex: 2} }>
                <Typography variant = 'h2' 
                            textAlign='center' 
                            fontFamily='San Serif' 
                            gutterBottom
                            sx={{ mt: 12, 
                                  color: '#ff5722',
                                  fontWeight: 'bold',
                                  fontStyle: 'italic' }}> 
                      GradeTrackVT 
                </Typography>

                <Typography 
                            textAlign='left'
                            fontFamily='Lato' 
                            sx={{pb: '12px',
                                 fontSize: '1.15rem',
                                 fontWeight: 'bold'}}>
                     Virginia Tech was founded in 1872 and is a public university. 
                     Located in the New River Valley Region, in Blacksburg, VA, Virginia Tech has
                     nine colleges to offer. With 110+ undergraduate degrees, there are a lot of
                     programs for students to discover. If you want to learn more, it can be found at both websites 
                     <Link href='https://eng.vt.edu/academics/undergraduate-students.html'> Undergraduate Programs</Link> and 
                     <Link href='https://www.registrar.vt.edu/graduation-multi-brief/checksheets.html'> CheckSheet </Link>. 
                </Typography>
                
                 <Grid container spacing={2} sx={{mt: 4}}>
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

                    <Typography fontFamily='Lato' 
                                variant = 'caption'
                                sx={{fontStyle: 'italic' }}>
                        We are delighted to help thousands of students at Virginia Tech to be successful 
                        in their respective fields of study, no matter where they are in achieving their goals. To learn 
                        more about our current grade distributions, please login in to our system 
                        <Link href='/login'> here.</Link>  
                    </Typography>
                 </Grid>

            </Container>
        </Box>
    );
}

export default Home;