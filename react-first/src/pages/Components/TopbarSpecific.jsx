import {Stack, AppBar, Toolbar, Typography, Button, IconButton} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VTlogo from '../../Assets/VTLogo.png';
import Dropdown from 'react-bootstrap/Dropdown';

const TopBarSpec = ({signedIn}) => {

    const majorsData = [
        { id: 1, title: 'Aerospace Engineering', content: 'Click to learn more about the courses offered in the aerospace program.', coursesURL: '/Courses' },
        { id: 2, title: 'Biological Systems Engineering', content: 'Click to learn more about the courses offered in the biological systems program.', coursesURL: '/Courses'  },
        { id: 3, title: 'Biomedical Engineering', content: 'Click to learn more about the courses offered in the biomedical program.', coursesURL: '/Courses'  },
        { id: 4, title: 'Building Construction', content: 'Click to learn more about the courses offered in the building construction program.', coursesURL: '/Courses'  },
        { id: 5, title: 'Chemical Engineering', content: 'Click to learn more about the courses offered in the chemical engineering program.', coursesURL: '/Courses'  },
        { id: 6, title: 'Civil Engineering', content: 'Click to learn more about the courses offered in the civil engineering program.', coursesURL: '/Courses'  },
        { id: 7, title: 'Computer Engineering', content: 'Click to learn more about the courses offered in the computer engineering program.', coursesURL: '/Courses'  },
        { id: 8, title: 'Computer Science', content: 'Click to learn more about the courses offered in the computer science program.', coursesURL: '/Courses'  },
        { id: 9, title: 'Construction Engineering and Management', content: 'Click to learn more about the courses offered in the construction and engineering management program.', coursesURL: '/Courses'  },
        { id: 10, title: 'Electrical Engineering', content: 'Click to learn more about the courses offered in the electrical engineering program.', coursesURL: '/Courses'  },
        { id: 11, title: 'Industrial and Systems Engineering', content: 'Click to learn more about the courses offered in the industrial and systems engineering program.', coursesURL: '/Courses'  },
        { id: 12, title: 'Materials Science Engineering', content: 'Click to learn more about the courses offered in the materials science program.', coursesURL: '/Courses'  },
        { id: 13, title: 'Mechanical Engineering', content: 'Click to learn more about the courses offered in the mechanical engineering program.', coursesURL: '/Courses'  },
        { id: 14, title: 'Mining Engineering', content: 'Click to learn more about the courses offered in the mining engineering program.', coursesURL: '/Courses'  }]

    const navigate = useNavigate();

    const handleHomeClick = () => {
         navigate('./');
    } 

    const handleAboutClick = () => {
         navigate('/About');
    }

    const handleMajorClick = () => {
         navigate('/Majors')     
    }

    const handleLoginRegisterClick = () => {
         navigate('/Login')
    }

    //<Button color='inherit' onClick={handleMajorClick}> MajorsPage </Button>
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
                        <Dropdown>
                            <Dropdown.Toggle color='inherit' variant='inherit' id='dropdown-basic'>
                                Majors
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {majorsData.map((major) => (
                                    <Dropdown.Item href={major.coursesURL}>{major.title}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
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