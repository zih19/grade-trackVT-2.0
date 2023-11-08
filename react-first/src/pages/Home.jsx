import React from 'react';
import { Container, Stack, AppBar, ToolBar, Typography, Button, IconButton, Link, Grid, Box} from '@mui/material';
import VTlogo from '../Assets/VTlogo';
import { useNavigate } from 'react-router-dom';
import COE from '../Assets/VT-COE';
import place from '../Assets/Placeholder';
import bulletin from '../Assets/VTBulletin';

const Home = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
         navigate('/');
    } 

    const handleAboutClick = () => {
         navigate('/About');
    }

    const handleFacultyClick = () => {
         navigate('/Faculty')     
    }

    const handleLoginRegisterClick = () => {
         navigate('/Login')
    }

    return (
        <>
            <AppBar position='static' color='transparent'>
                <ToolBar>
                
                    <IconButton aria-label='Virginia Tech-logo'>
                        <img src={VTlogo} alt='Virginia Tech' style={{width: 24, height: 24}} />
                    </IconButton>

                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} >
                        Virginia Tech
                    </Typography>

                    <Stack spacing={2} direction='horizontal'>
                        <Button color='inherit' onClick={handleHomeClick}> Home </Button>
                        <Button color='inherit' onClick={handleAboutClick}> About </Button>
                        <Button color='inherit' onClick={handleFacultyClick}> Faculty </Button>
                        <Button color='inherit' onClick={handleLoginRegisterClick}> Login/Register </Button>
                    </Stack>

                </ToolBar>
            </AppBar>
            
            
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
                    in their fields of study, no matter what grades they are currently in. To learn 
                    more about our current grade distributions, please login in to our system 
                    <Link href={navigate('/login')}> here </Link>  
                </Typography>
            </Container>
        </>
    );
}

export default Home;