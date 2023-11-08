import {Stack, AppBar, Toolbar, Typography, Button, IconButton} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VTlogo from '../../Assets/VTLogo.png';

const TopBarSpec = ({signedIn}) => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
         navigate('./');
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
                <Toolbar>
                
                    <IconButton aria-label='Virginia Tech-logo' href='/'>
                        <img src={VTlogo} alt='Virginia Tech' style={{width: 24, height: 24}} />
                    </IconButton>

                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} >
                        {//You can put this here if you want ig Virginia Tech
                        }
                    </Typography>

                    <Stack spacing={2} direction='horizontal'>
                        <Button color='inherit' onClick={handleHomeClick}> Home </Button>
                        <Button color='inherit' onClick={handleAboutClick}> About </Button>
                        <Button color='inherit' onClick={handleFacultyClick}> Faculty </Button>
                        {!signedIn ? 
                        <Button color='inherit' onClick={handleLoginRegisterClick}> Login/Register </Button>
                        :null}
                    </Stack>

                </Toolbar>
            </AppBar>
        </>
    );
}
export default TopBarSpec