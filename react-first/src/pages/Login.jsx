import React, { useState } from 'react'
import { TextField, Button, IconButton, Paper, Grid, Container, Typography, Box, FormControlLabel, Checkbox } from '@mui/material'
import login from '../Assets/VTlogin.png';
import { useNavigate, Link} from 'react-router-dom';

const Login = () => {
    const [currValue, setCurrValue] = useState('');
    const handleChange = (event) => {
         setCurrValue(event.target.value);
    }

    const navigate = useNavigate();

    const navigateMajorPage = () => {
         navigate('/Major');
    }

    return (
        <Container maxWidth='md'>
           <Paper elevation={8}
                  sx={{marginTop: 8, 
                       display: 'flex',
                       flexDirection: 'column',
                       alignItems: 'center'}}>
               <Typography variant='h2'>
                         Sign In 
               </Typography>
               
               <Box component='form'
                    sx={{mt: 1}}>

                    <TextField  id= 'form' 
                                label='Username'
                                variant='outlined'
                                type='text'
                                fullWidth
                                required 
                                value={currValue}
                                onChange={handleChange}/>
                    <TextField  id='form' 
                                label='Password'
                                variant='outlined'
                                type='password'
                                fullWidth
                                required 
                                value={currValue}
                                onChange={handleChange}/>
                     
                     <FormControlLabel control={<Checkbox />} 
                                       label= 'Remember Me' />
                    
                     <Button type='submit'
                             fullWidth
                             variant='contained'
                             color='primary'
                             onClick={navigateMajorPage}>
                            Login In
                     </Button>

                     <Grid container xs>
                         <Grid Item>
                            <Link to='/Forget Your Password'> Forget Your Password?</Link>
                          </Grid>
                          <Grid Item>
                             <Link to='/Register'> Don't have an account? Sign Up!</Link>
                          </Grid>

                     </Grid>
                       
               </Box>
           </Paper>
        </Container>
    );
}

export default Login;