import React, { useState } from 'react'
import { TextField, Button, Grid, Container, Typography, Box, FormControlLabel, Checkbox } from '@mui/material'
import hokie from '../Assets/VTHokie.png';
import { useNavigate, Link} from 'react-router-dom';
import VTBackground from '../Assets/VTBackground.jpg'

const Login = ({setSignIn}) => {
    const [check, setCheck] = useState(false);
    const [currUsernameValue, setCurrUsernameValue] = useState('');
    const [currPasswordValue, setCurrPasswordValue] = useState('');

    const handleUsernameChange = (event) => {
         setCurrUsernameValue(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setCurrPasswordValue(event.target.value);
   }

    const handleCheck = (event) => {
        setCheck(event.target.checked)
    }

    const navigate = useNavigate();
    const navigateMajorPage = () => {
        if (currUsernameValue === 'admin' && currPasswordValue === '123456') {
            setSignIn(true);
            navigate('/');
        } else {
           console.error("Incorrect Useranme or Password")
        }

        
    }

    return (
        <Container maxWidth='md' spacing={2}>
            <Box sx={{
                backgroundImage: `url(${VTBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'repeat',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            
               <img src={hokie} alt='VT Hokie' style={{width: '120px', height: '120px'}} />

               <Typography variant='h2' sx={{mt: '10px', color: 'orange'}} >
                    Sign In 
                </Typography>
                
            

                <Box component='form' sx={{mt: 2}}>
                    <TextField  id= 'form' 
                                label='Username'
                                variant='outlined'
                                type='text'
                                fullWidth
                                required 
                                value={currUsernameValue}
                                onChange={handleUsernameChange}
                                sx={{mb: '10px'}}/>
                    <TextField  id='form' 
                                label='Password'
                                variant='outlined'
                                type='password'
                                fullWidth
                                required 
                                value={currPasswordValue}
                                onChange={handlePasswordChange}
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
                            {//<Link to='/Forget-Username'> UserName </Link>
                            }
                            <Link to='/Forgot-Password'> Password </Link>
                        </Grid>

                        <Grid Item xs={12}>
                            Don't have an account?
                            <Link to='/register'> Sign Up</Link>
                        </Grid>

                    </Grid>
                </Box>
            </Box>   
        </Container>
        
    );
}

export default Login;