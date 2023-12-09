import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {Grid, Paper, Typography, Box, Stack} from '@mui/material';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ScoreIcon from '@mui/icons-material/Score';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import InfoIcon from '@mui/icons-material/Info';

const Dashboard = () => {
    const {department, majorId, courseId} = useParams();
    const [courseDetails, setCourseDetails] = useState([]);

    useEffect(()=> {
        fetch(`http://localhost:8000/api/${department}/${majorId}/${courseId}`)
        .then(response=> {
              if (!response.ok) {
                throw new Error("This course does not have a description yet!");
              }
              return response.json();
        })
        .then(data => setCourseDetails(data))
        .catch(err => {
           console.error(err);
           setCourseDetails([]);    
        });
    }, [department, majorId, courseId]);

    if (courseDetails.length === 0) {
        <Typography variant='h5'> Course Not Found</Typography>
        return;
    }

    const formatList = (list, depth = 0) => {
       const joiner = depth === 1 ? ' or ' :', ' 
 
        return list.map(item => {
           if (Array.isArray(item)) {
                if (list.length === 1) {
                    return formatList(item, depth + 1);
                }
                else {
                    return '(' + formatList(item, depth + 1) + ')';
                }
           }
           else {
              return item;
           }
        }).join(joiner);
    };

    let lenCourseNum = courseDetails.course_id.length
    let courseNum = courseDetails.course_id.substring(lenCourseNum - 4)

    console.log(courseNum)

  return (
    <Box>
      <Typography variant='h3' 
                  sx={{fontStyle: 'italic', fontWeight: 'bold'}}> 
                  {courseDetails.Course.Title} 
      </Typography>
      
      <Grid container spacing={10} sx={{pt: '20px'}}>
    
            <Grid item xs={4} sx={{pb: '5px'}}>
                <Paper sx={{height: '300px', overflow: 'auto'}}>
                    <Stack direction='horizontal' justifyContent='center'>
                        <Typography variant='h5' 
                                    gutterBottom 
                                    sx={{fontFamily: 'Lato', 
                                         fontWeight: 'bold'}}> 
                                    Description 
                        </Typography>
                        <DescriptionOutlinedIcon />
                    </Stack>

                    <Stack>
                    <Typography variant='subtitle1' 
                        component='div'
                        sx={{
                            fontFamily: 'Lato',
                            fontWeight: 'bold',
                            fontStyle: 'italic',
                            minHeight: '64px',
                            mb: '15px'
                        }}>
                        {courseDetails.Course.Description}
                    </Typography>

                    <Typography
                        variant='subtitle1' 
                        component='div'
                        sx={{
                            fontFamily: 'Lato',
                            fontWeight: 'bold',
                            fontStyle: 'italic',
                            minHeight: '64px',
                        }}>
                        Source: https://www.coursicle.com/vt/courses/{courseDetails.major_id}/{courseNum}
                    </Typography>
                    </Stack>
                </Paper>
            </Grid>

            <Grid item xs={4} sx={{pb: '5px'}}>
                <Paper sx={{height: '300px', overflow: 'auto'}}>
                    <Stack direction='horizontal' justifyContent='center'>
                        <Typography variant='h5' 
                                    sx={{ paddingBottom: '55px', 
                                        fontFamily: 'Lato', 
                                        fontWeight: 'bold'
                                    }}> 
                            Average GPA 
                        </Typography>
                        <ScoreIcon />
                    </Stack>
                    <Typography variant='h1' 
                            component='div'
                            sx={{
                                top: "10px",
                                fontFamily: 'Lato',
                                fontWeight: 'bold',
                                minHeight: '64px',
                                textAlign: 'center'
                            }}>
                        {courseDetails.GPA} / 4.0
                    </Typography>
                </Paper>
            </Grid>

            <Grid item xs={4} sx={{pt: '5px'}}>
                <Paper sx={{height: '300px', overflow: 'auto'}}>
                <Stack direction= 'horizontal' justifyContent='center'>
                   <Typography variant='h5' 
                               sx={{paddingBottom: '55px', fontFamily: 'Lato', fontWeight: 'bold'
                                   }}> 
                        Total Attendance 
                   </Typography>
                   <HowToRegOutlinedIcon />
                </Stack>
                <Stack direction='horizontal' justifyContent ='center'>
                    <PersonOutlineOutlinedIcon />
                    <Typography variant='h5' 
                            gutterBottom
                            component='div'
                            sx={{
                                top: "10px",
                                fontFamily: 'Lato',
                                fontStyle: 'italic',
                                fontWeight: 'bold',
                                minHeight: '64px',
                                textAlign: 'center'
                            }}>
                         Enrolled: {courseDetails.Numbers.Enrolled}
                    </Typography>
                </Stack>
                <Stack direction='horizontal' justifyContent = 'center'>
                    <PersonOutlineOutlinedIcon />
                    <Typography variant='h5' 
                            gutterBottom
                            component='div'
                            sx={{
                                top: "10px",
                                fontFamily: 'Lato',
                                fontStyle: 'italic',
                                fontWeight: 'bold',
                                minHeight: '64px',
                                textAlign: 'center'
                            }}>
                        Withdrawn: {courseDetails.Numbers.Withdrawn}
                    </Typography>
                </Stack>
                </Paper>
            </Grid>

            <Grid item xs={4}>
                <Paper sx={{height: '300px', overflow: 'auto'}}>
                <Stack direction='horizontal' justifyContent='center'>
                    <Typography variant='h5' 
                               sx={{paddingBottom: '55px', 
                                    fontFamily: 'Lato', 
                                    fontWeight: 'bold'
                                  }}> 
                            Credit(s) 
                    </Typography>
                    <GradeOutlinedIcon/>
                </Stack>
                    <Typography variant='h1' 
                        gutterBottom
                        component='div'
                        sx={{
                            top: "10px",
                            fontFamily: 'Lato',
                            fontWeight: 'bold',
                            minHeight: '64px',
                            textAlign: 'center'
                        }}>
                        {courseDetails["Credit(s)"]}
                    </Typography>
                </Paper>
            </Grid>

            <Grid item xs={4}>
                <Paper sx={{height: '300px', overflow: 'auto'}}>
                    <Stack direction='horizontal' justifyContent='center'>
                        <Typography variant='h5' sx={{paddingBottom: '25px', 
                                                      fontFamily: 'Lato', 
                                                      fontWeight: 'bold'
                                                    }}> 
                                Instructor(s) 
                        </Typography>
                        <PersonSearchIcon />
                    </Stack>
                    {
                        courseDetails["Instructor(s)"].map((instructor) => (
                            <Typography variant='b1' 
                            gutterBottom
                            component='div'
                            sx={{
                                top: "10px",
                                fontFamily: 'Lato',
                                minHeight: '32px',
                                textAlign: 'center'
                            }}>
                                   {instructor}
                            </Typography>
                        ))
                    }
                </Paper>
            </Grid>

            <Grid item xs={4}>
                <Paper sx={{height: '300px', overflow: 'auto'}}>
                    <Stack direction='horizontal' justifyContent='center'>
                        <Typography variant='h5' sx={{pb: '55px',
                                                      fontFamily: 'Lato',
                                                      fontWeight: 'Bold'}}>
                               Requirement(s)
                        </Typography>
                        <InfoIcon />                          
                    </Stack>
                    <Stack direction='column' justifyContent='center'>
                            <Stack>
                                {
                                    Array.isArray(courseDetails.Requirements.Prerequisites) ?
                                        <Typography variant='h5'
                                                    gutterBottom 
                                                    sx={{fontWeight: 'bold', fontStyle: 'italic'}}>
                                            PreRequisite(s): {formatList(courseDetails.Requirements.Prerequisites)}
                                        </Typography>
                                    :<Typography variant='h5' 
                                                 gutterBottom
                                                 sx={{fontWeight: 'bold', fontStyle: 'italic'}}>
                                        Prerequisite(s): {courseDetails.Requirements.Prerequisites}
                                     </Typography>
                                },
                            </Stack>
                            <Stack>
                                {
                                    Array.isArray(courseDetails.Requirements.Corequisites) ?
                                        <Typography variant='h5'
                                                    gutterBottom 
                                                    sx={{fontWeight: 'bold', fontStyle: 'italic'}}>
                                            CoRequisite(s): {formatList(courseDetails.Requirements.Corequisites)}
                                        </Typography>
                                    :<Typography variant='h5'
                                                 gutterBottom 
                                                 sx={{fontWeight: 'bold', fontStyle: 'italic'}}>
                                        CoRequisite(s): {courseDetails.Requirements.Corequisites}
                                     </Typography>
                                }
                            </Stack>
                    </Stack>
                </Paper>
            </Grid>
      </Grid>
      </Box>
   );
}
export default Dashboard;