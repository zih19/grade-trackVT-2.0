import {Stack, AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VTlogo from '../../Assets/VTLogo.png';
import { useState } from 'react';
import {Link} from 'react-router-dom';
// import PersonIcon from '@mui/icons-material/Person';
// import Dropdown from 'react-bootstrap/Dropdown';
// import {majorChoices} from '../DataNoMongo/courseIntroduction';

const TopBarSpec = ({signedIn}) => {

    const majorsData = [
        { id: "AOE", title: "Aerospace Engineering", courseURL: "/majordescription/AOE"},
        { id: "BSE", title: "Biological Systems Engineering", courseURL: "/majordescription/BSE"},
        { id: "BME", title: "Biomedical Engineering", courseURL: "/majordescription/BME"},
        { id: "BC",  title: "Building Construction", courseURL: "/majordescription/BC"},
        { id: "CHE", title: "Chemical Engineering", courseURL: "/majordescription/CHE"},
        { id: "CEE", title: "Civil Engineering", courseURL: "/majordescription/CEE"},
        { id: "ECE", title: "Electric/Computer Engineering", courseURL: "/majordescription/ECE"},
        { id: "CS", title: "Computer Science", courseURL: "/majordescription/CS"},
        { id: "CEM", title: "Construction Engineering and Management", courseURL: "/majordescription/CEM"},
        { id: "ISE", title: "Industrial and Systems Engineering", courseURL: "/majordescription/ISE"},
        { id: "MSE", title: "Materials Science Engineering", courseURL: "/majordescription/MSE"},
        { id: "ME", title: "Mechanical Engineering", courseURL: "/majordescription/ME"},
        { id: 'MINE', title: 'Mining Engineering', courseURL: '/majordescription/MINE'}
    ];
    

    const navigate = useNavigate();

    const handleHomeClick = () => {
         navigate('/');
    } 

    const handleAboutClick = () => {
         navigate('/About');
    }

    const[anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl); 

    const handleMajorButtonClick = (event) => {
        setAnchorEl(event.currentTarget) 
    }
    
    const handleMajorMenuClick = (majorId) => {
        navigate(`/majordescription/${majorId}`);
        setAnchorEl(null);
    }
    

    const handleLoginRegisterClick = () => {
         navigate('/Login')
    }

    const handleMajorClick = () => {
        navigate('/Major')
    }

    //<Button color='inherit' onClick={handleMajorClick}> MajorsPage </Button>
    return (
        <>
            <AppBar position='static'>
                <Toolbar>
                
                    {/* <IconButton aria-label='Virginia Tech-logo'> */}
                        <Link to='/'>
                            <img src={VTlogo} alt='Virginia Tech' style={{width: 50, height: 35}} />
                        </Link>
                    {/* </IconButton> */}

                    <Typography variant='h6' component='div' color='text.inherit' sx={{ flexGrow: 1 }} >
                        Welcome to Virginia Tech GradeTrack System!
                    </Typography>

                    <Stack spacing={2} direction='horizontal'>
                        <Button color='inherit' onClick={handleHomeClick}> Home </Button>


                        <Button color='inherit' onClick={handleAboutClick}> About </Button>

                        {
                            signedIn? 
                            <Button color='inherit' onClick={handleMajorClick}> Major List </Button>
                            :null
                        }
                        
                        <Button color="inherit" onClick={handleMajorButtonClick}> Major Info </Button>
                        <Menu
                           id="major-menu"
                           anchorEl={anchorEl}
                           open={open}
                           onClose={()=> setAnchorEl(null)}
                           >
                            {majorsData.map((major) => (
                                <MenuItem key={major.id} 
                                          onClick={()=> handleMajorMenuClick(major.id)}>
                                    {major.title}
                                </MenuItem>
                            ))}
                        </Menu>

                        {!signedIn ? 
                        <Button color='inherit' onClick={handleLoginRegisterClick}> Login/Register </Button>
                        :(
                            <IconButton>
                                {/* <PersonIcon /> */}
                                <Typography> ABC </Typography>
                            </IconButton>
                        )}
                    </Stack>

                </Toolbar>
            </AppBar>
        </>
    );
}
export default TopBarSpec