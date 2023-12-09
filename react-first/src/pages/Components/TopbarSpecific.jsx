import {Stack, AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VTlogo from '../../Assets/VTLogo.png';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
// import PersonIcon from '@mui/icons-material/Person';
const TopBarSpec = ({setSignIn, signedIn}) => {

    //All of the major data that will be displayed in the different Topbar's dropdown menus.
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

    const [departmentsList, setDepartment] = useState([]);

    useEffect(()=> {
        fetch("http://localhost:8000/api/departments")
        .then(response => response.json())
        .then(data => setDepartment(data))
        .catch(err => console.error(err));
    }, []);

    const navigate = useNavigate();


    const[anchorElDepartments, setAnchorElDepartment] = useState(null);
    const openDepartment = Boolean(anchorElDepartments);

    const handleDepartmentClick = (event) => {
        setAnchorElDepartment(event.currentTarget);
    }

    const handleDepartmentMenuClick = (department) => {
        navigate(`/${department}`);
        setAnchorElDepartment(null);
    }  

    //This handles the event in which the user clicks the home button. It navigates them to the home page.
    const handleHomeClick = () => {
         navigate('/');
    } 

    //This handles the event in which the user clicks the about button. It navigates them to the about page.
    const handleAboutClick = () => {
         navigate('/About');
    }

    const[anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl); 

    const handleMajorButtonClick = (event) => {
        setAnchorEl(event.currentTarget) 
    }
    
    const handleMajorMenuClick = (majorId) => {
        switch(majorId) {
            case "BSE": {
                window.open("https://www.bse.vt.edu/");
                break;
            }
            case "BME": {
                window.open("https://beam.vt.edu");
                break;
            }
            case "ECE": {
                window.open("https://ece.vt.edu/");
                break;
            }
            case "CEM": {
                window.open("https://cem.cee.vt.edu/");
                break;
            }
            case "ISE": {
                window.open("https://www.ise.vt.edu/");
                break;
            }
            case "MSE": {
                window.open("https://mse.vt.edu/");
                break;
            }
            case "MINE": {
                window.open("https://www.mining.vt.edu/");
                break;
            }
            case "ME": {
                window.open("https://me.vt.edu/");
                break;
            }
            default: {
                navigate(`/majordescription/${majorId}`);
                setAnchorEl(null);
            }
        }
    }

    //This handles the event in which the user clicks the login button. It navigates them to the login page.
    const handleLoginRegisterClick = () => {
         navigate('/Login')
    }


    //Handles the logout click by setting the signIn bool to false.
    const handleLogoutClick = () => {
        setSignIn(false);
    }
    
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
                              <>
                                <Button color='inherit' onClick={handleDepartmentClick}> Major List </Button>
                                <Menu
                                   id = "department-menu"
                                   anchorEl={anchorElDepartments}
                                   open={openDepartment}
                                   onClose={()=>setAnchorElDepartment(null)}
                                >
                                    {
                                        departmentsList.map((department) => (
                                            <MenuItem key={department.id}
                                                       onClick={() => handleDepartmentMenuClick(department.id)}>
                                                {department.name}                                             
                                            </MenuItem>
                                        ))
                                    }                                 
                                </Menu>
                              </>
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
                            <>
                            
                                <Button color="inherit" onClick={handleLogoutClick}>
                                     Log Out
                                </Button>

                                <Menu id='log out'
                                      onClick={handleLogoutClick}>
                                     <MenuItem>
                                           Log Out                                     
                                     </MenuItem>
                                </Menu>
          
                            </>    
                            
                        )}
                    </Stack>

                </Toolbar>
            </AppBar>
        </>
    );
}
export default TopBarSpec