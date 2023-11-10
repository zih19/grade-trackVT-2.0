import React, { useState } from 'react'
import { TextField, Button, Paper, Grid, Container, Typography, Box, FormControlLabel, Checkbox } from '@mui/material'
import login from '../Assets/VTlogin.png';
import { useNavigate, Link} from 'react-router-dom';
import VTBackground from '../Assets/VTBackground.jpg'

const Login = () => {
    const [check, setCheck] = useState(false);
    const [currValue, setCurrValue] = useState('');

    const handleChange = (event) => {
         setCurrValue(event.target.value);
    }

    const handleCheck = (event) => {
        setCheck(event.target.checked)
    }

    const navigate = useNavigate();

    const navigateMajorPage = () => {
         navigate('/Major');
    }

    return (
        <Box sx={{
            backgroundImage: `url(${VTBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 4
        }}>
            <Container  maxwidth= 'xs' sx={{pb: '12px' }}>
                <Paper elevation={10}
                        sx={{marginTop: 12, 
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>

                        <stack spacing={2} direction='horizontal'>
                            <img src={login} alt="VT Login" style={{width: '150px', height: '150px'}} />
                            
                            <Typography variant='h3'>
                                        Sign In 
                            </Typography>
                        </stack>

                        <Box component='form'
                                sx={{mt: 2}}>

                                <TextField  id= 'form' 
                                            label='Username'
                                            variant='outlined'
                                            type='text'
                                            fullWidth
                                            required 
                                            value={currValue}
                                            onChange={handleChange}
                                            sx={{mb: '10px'}}/>
                                <TextField  id='form' 
                                            label='Password'
                                            variant='outlined'
                                            type='password'
                                            fullWidth
                                            required 
                                            value={currValue}
                                            onChange={handleChange}
                                            sx={{mb: '10px'}}/>
                                
                                <FormControlLabel control={<Checkbox checked={check}
                                                                    onChange={handleCheck}/>} 
                                                label= 'Remember Me' 
                                                sx={{justifyContent: 'flex-start',
                                                        width: "100%"}}/>
                                
                                <Button type='submit'
                                        fullWidth
                                        variant='contained'
                                        color='primary'
                                        onClick={navigateMajorPage}
                                        >
                                        Login In
                                </Button>
                                

                                <Grid container spacing={2} direction='column' sx={{padding: '20px'}}>
                                    
                                    <Grid Item xs={12}>
                                        Forget
                                        <Link to='/Forget-Username'> UserName </Link>
                                        or
                                        <Link to='/Forget-Password'> Password </Link>
                                    </Grid>

                                    <Grid Item xs={12}>
                                        Don't have an account? 
                                        <Link to='/Register'> Sign Up!</Link>
                                    </Grid>

                                </Grid>
                        </Box>   
                </Paper>
            </Container>
        </Box>
    );
}

export default Login;