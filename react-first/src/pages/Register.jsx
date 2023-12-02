import {Box, Button, Container, FormControl, FormLabel, FormControlLabel, Grid, InputLabel, 
        ListItemIcon, MenuItem, Paper, Radio, RadioGroup, Select, Typography, TextField} from '@mui/material';       
//import Man2OutlinedIcon from '@mui/icons-material/Man2Outlined';
//import Woman2OutlinedIcon from '@mui/icons-material/Woman2Outlined';
//import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import {useNavigate, Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import hokie from '../Assets/VTHokie.png';
import VTBackgroud from '../Assets/VTBackground.jpg'

const Register = () => {
   const[firstName, setFirstName] = useState('');
   const[middleName, setMiddleName] = useState('');
   const[lastName, setLastName] = useState('');

   const[birthDate, setBirthDate] = useState({
      day: '',
      month: '',
      year: ''
   });
   const[graduationDate, setGraduationDate] = useState({
      day: '',
      month: '',
      year: ''
   });
   const generateArray = (start, end) => Array.from({length: (end - start + 1)}, (_, i) => start + i);
   const years = generateArray(1900, new Date().getFullYear());
   const months = generateArray(1, 12);
   const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate();
   const days = generateArray(1, getDaysInMonth(birthDate.year, birthDate.month));

   const[age, setAge] = useState(0);

   const[email, setEmail] = useState('');
   const[phone, setPhone] = useState('');
   const[gender, setGender] = useState('');

   const[userName, setUserName] = useState('');
   const[password, setPassword] = useState('');
   const[confirmedPassword, setConfirmedPassword] = useState('');

   const handleFirstNameChange = (event) => {
      setFirstName(event.target.value);
   }

   const handleMiddleNameChange = (event) => {
      setMiddleName(event.target.value);
   }

   const handleLastNameChange = (event) => {
      setLastName(event.target.value);
   }
   
   const calculateAge = (dob) => {
      const today = new Date();
      const birth = new Date(dob.year, dob.month - 1, dob.day);
      let age = today.getFullYear() - birth.getFullYear()
      const month = today.getMonth() - birth.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
           age--;
      }
      return age;
   }

   useEffect(() => {
      if (birthDate.year && birthDate.month && birthDate.day) {
         const ageComputed = calculateAge(birthDate);
         setAge(ageComputed);
      }
   }, [birthDate]);
   
   const handleBirthDateChange = (event) => {
      const {name, value} = event.target;
      setBirthDate({...birthDate, [name] : value});
   }

   const handleGraduationDateChange = (event) => {
      const {name, value} = event.target;
      setGraduationDate({...graduationDate, [name]: value});
   }

   const handleUserNameChange = (event) => {
      setUserName(event.target.value);
   }

   const handleEmailChange = (event) => {
      setEmail(event.target.value);
   }

   const handlePhoneChange = (event) => {
      setPhone(event.target.value);
   }

   const handleGender = (event) => {
      setGender(event.target.value);
   }

   const handlePasswordChange = (event) => {
      setPassword(event.target.value);
   }

   const handleConfirmedPasswordChange = (event) => {
      setConfirmedPassword(event.target.value);
   }

   const navigate = useNavigate();
   const handleSignupChange = (event) => {
      navigate('/RegisterSuccess')
   }

   return(
      <Container sx={{mt: '300px'}}>
         <Box sx={{
                backgroundImage: `url(${VTBackgroud})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'repeat',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
         }}>

         <Paper elevation={20} sx={{padding: '50px 40px', 
                                    width:'750px', 
                                    margin:'150px'}}>
            
            <Grid align='center'>
               <img src={hokie} alt="VT Hokie" style={{width: '120px', height: '120px'}}/>
               <Typography variant='h2' sx={{margin: '0px'}}>Sign Up</Typography>
               <Typography variant='h5'> please fill this form to create an account</Typography>
            </Grid>

            <Box component="form" sx={{mt: '2px'}}>

               <TextField  id = 'firstName'
                           label = 'First Name' 
                           fullWidth
                           type = 'text'
                           variant = 'outlined'
                           required
                           placeholder = 'Enter Your First Name'
                           value = {firstName}
                           onChange = {handleFirstNameChange}
                           sx = {{mb: '10px'}} />

               <TextField id = 'middleName'
                          label = 'Middle Name'
                          fullWidth
                          variant = 'outlined'
                          type = 'text'
                          placeholder = 'Enter Your Middle Name'
                          value = {middleName}
                          onChange = {handleMiddleNameChange}
                          sx = {{mb: '10px'}} />
               
               <TextField id = 'lastName'
                          label = "Last Name"
                          fullWidth
                          type = 'text'
                          variant = 'outlined'
                          required
                          placeholder = 'Enter Your Last Name'
                          value = {lastName}
                          onChange = {handleLastNameChange}           
                          sx = {{mb: '10px'}} />

               <Grid container spacing = {3}>
                  <Grid item>
                     <FormControl fullWidth sx={{width: '85px'}}>
                         <InputLabel>Year</InputLabel>
                         <Select name = "year" 
                                 required
                                 value = {birthDate.year} 
                                 onChange = {handleBirthDateChange}>
                           {
                              years.map((year) => (
                                 <MenuItem key = {year}
                                           value = {year}>
                                    {year}
                                 </MenuItem>
                              ))
                           }
                        </Select>   
                     </FormControl>          
                  </Grid>

                  <Grid item>
                     <FormControl fullWidth sx={{width: '85px'}}>
                        <InputLabel fullWidth> Month </InputLabel>
                        <Select name = "month"
                                required
                                value = {birthDate.month}
                                onChange = {handleBirthDateChange}>
                        { 
                           months.map((month) => (
                              <MenuItem key = {month} 
                                        month = {month}>
                                  {month}
                              </MenuItem>
                           ))
                        }                             
                        </Select>
                     </FormControl>
                  </Grid>

                  <Grid item>
                     <FormControl fullWidth sx={{width: '85px'}}>
                        <InputLabel fullWidth> Day </InputLabel>
                        <Select name = "day"
                                value = {birthDate.day}
                                required
                                onChange = {handleBirthDateChange}>
                        {
                           days.map((day) => (
                              <MenuItem key = {day}
                                        value = {day}>
                                 {day}      
                              </MenuItem>
                           ))
                        }    
                        </Select>
                     </FormControl>
                  </Grid>
               </Grid>
               
               <Box sx={{mt: '10px'}}>
                  <TextField id = 'age'
                             label = 'Age'
                             fullWidth
                             variant = 'outlined'
                             value = {age}
                             InputProps={{
                               readOnly: true
                             }} 
                             />
               </Box>

               <TextField id = 'email'
                          label = 'Email'
                          fullWidth
                          variant = 'outlined'
                          type = 'email'
                          required
                          placeholder = 'Enter Your Email Address'
                          value = {email}
                          onChange = {handleEmailChange}
                          sx = {{mb: '10px'}} />
               
               <TextField id = 'phone'
                          label = 'Phone'
                          fullWidth
                          variant = 'outlined'
                          type= 'tel'
                          required
                          placeholder = 'Enter Your Phone Number'
                          value = {phone}
                          onChange = {handlePhoneChange}
                          sx = {{mb: '10px'}} />

               <FormControl>
                  <FormLabel id="gender-list" required> Gender </FormLabel>
                  <RadioGroup aria-labelledby = "gender-list"
                              row
                              name = "gender-buttons-group"
                              value = {gender} 
                              onChange = {handleGender}>
                     <FormControlLabel value = "female" 
                                       control = {<Radio/>} 
                                       label = 
                                       {
                                          <>
                                             <ListItemIcon>
                                                {//<Woman2OutlinedIcon />
                                                }
                                             </ListItemIcon>
                                             "female"
                                          </>
                                       } />
                     <FormControlLabel value = "male" 
                                       control = {<Radio />} 
                                       label = 
                                       { 
                                         <>
                                             <ListItemIcon>
                                                   {//<Man2OutlinedIcon />
                                                   }
                                             </ListItemIcon>
                                             "male"
                                         </>
                                       }/>
                     <FormControlLabel value = "others" 
                                       control = {<Radio />} 
                                       label = 
                                       {
                                          <>
                                             <ListItemIcon>
                                                {//<QuestionMarkOutlinedIcon />
                                                }
                                             </ListItemIcon>
                                             "others"
                                          </>
                                       } />
                  </RadioGroup>
               </FormControl>

               <Grid container spacing={2}>
                  <Grid item>
                     <FormControl>
                        <InputLabel> Year </InputLabel>
                        <Select name ='year'
                                placeholder = "Enter a year (yyyy)"
                                value = {graduationDate.year} 
                                onChange = {handleGraduationDateChange}>
                        {
                           years.map((year) => (
                              <MenuItem key = {year}
                                        value = {year}>
                                 {year}
                              </MenuItem>
                           ))
                        }
                        </Select>
                     </FormControl>
                  </Grid>

                  <Grid item>
                     <FormControl>
                        <InputLabel> Month </InputLabel>
                        <Select name = "month"
                                placeholder = "Enter a month (mm)"
                                value = {graduationDate.month}
                                onChange = {handleGraduationDateChange}>
                        {
                           months.map((month) => (
                              <MenuItem key = {month}
                                        value = {month}>
                                 {month}
                              </MenuItem>
                           ))
                        }
                        </Select>
                     </FormControl>
                  </Grid>                  
                  
                  <Grid item>
                     <FormControl>
                        <InputLabel> Day </InputLabel>
                        <Select name = "day"
                                placeholder = "Enter a day (dd)"
                                fullWidth
                                value = {graduationDate.day}
                                onChange = {handleGraduationDateChange}>
                        {
                           days.map((day) => (
                              <MenuItem key = {day}
                                        value = {day}>
                                    {day}
                              </MenuItem>
                           ))
                        }
                        </Select>
                     </FormControl>
                  </Grid>
               </Grid>

               <TextField id = 'username'
                          label = "Username"
                          fullWidth
                          variant = 'outlined'
                          type = 'text'
                          required
                          placeholder = 'Enter Your UserName'
                          value = {userName}
                          onChange = {handleUserNameChange}
                          sx = {{mb: '10px'}} />
               
               <TextField id = 'password'
                          label = 'Password'
                          fullWidth
                          variant = 'outlined'
                          type= 'password' 
                          required
                          placeholder = 'Enter Your Password'
                          value = {password}
                          onChange = {handlePasswordChange}
                          sx = {{mb: '10px'}} />
               
               <TextField id = 'confirmedPassword'
                          label = 'Confirmed Password'
                          fullWidth
                          variant = 'outlined'
                          type = 'password'
                          required
                          placeholder = 'Enter Your Confirmed Password'
                          value = {confirmedPassword}
                          onChange = {handleConfirmedPasswordChange}
                          sx = {{mb: '20px'}} />

               <Button type='submit' variant='contained' 
                       color='primary' onClick={handleSignupChange} > 
                       Sign Up
               </Button>

            </Box>
            
            <Grid align='left'>
               <Link to="/Login">Back to Login Page</Link>
            </Grid>
         </Paper>
         </Box>
      </Container>
   )
}
export default Register;