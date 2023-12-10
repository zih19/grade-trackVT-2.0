import React, { useState } from 'react'
import { TextField, Button, Paper, Grid, Container, Typography, Box, FormControlLabel, Checkbox } from '@mui/material'
import login from '../Assets/VTlogin.png';
import VTBackground from '../Assets/VTBackground.jpg'
import { useNavigate, Link} from 'react-router-dom';

const Success = () => {
    const [currRecoveryValue, setCurrRecoveryValue] = useState('');
    
    const handleRecoveryChange = (event) => {
        setCurrRecoveryValue(event.target.value);
    }

    const navigate = useNavigate();
    
    const handleSubmit = () => {
        navigate('/');
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
                                        Recovery
                            </Typography>
                            <Typography>
                                If your email is associated with an account you will have an email
                                with a recovery code. Please enter that code here.
                            </Typography>
                        </stack>

                        <Box component='form'
                                sx={{mt: 2}}>

                                <TextField  id= 'form' 
                                            label='Recovery Code'
                                            variant='outlined'
                                            type='text'
                                            fullWidth
                                            required 
                                            value={currRecoveryValue}
                                            onChange={handleRecoveryChange}
                                            sx={{mb: '10px'}}/>
                                
                                <Button type='submit'
                                        fullWidth
                                        variant='contained'
                                        color='primary'
                                        onClick={handleSubmit}
                                        >
                                        Submit
                                </Button>
                        </Box>   
                </Paper>
            </Container>
        </Box>
    );
}

export default Success