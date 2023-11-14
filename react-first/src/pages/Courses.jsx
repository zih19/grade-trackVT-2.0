//Courses (params)
import {Grid, Paper, Typography, CardActionArea, Card, CardContent} from '@mui/material';
import {useParams, useNavigate} from 'react-router-dom';

const Courses = () => {
    
    const coursesData = [
        {
            major: "AOE",
            courses: [ "AOE2024", "AOE2054", "AOE2074", "AOE2104", 
                       "AOE2114", "AOE2204", "AOE2664", "AOE3014",
                       "AOE3014", "AOE3034", "AOE3044", "AOE3054",
                       "AOE3094", "AOE3114", "AOE3124", "AOE3134",
                       "AOE3144", "AOE3154", "AOE3164", "AOE3214",
                       "AOE3224", "AOE3234", "AOE3264", "AOE3354",
                       "AOE3564", "AOE4004", "AOE4024", "AOE4054",
                       "AOE4064", "AOE4065", "AOE4066", "AOE4084",
                       "AOE4105", "AOE4106", "AOE4114", "AOE4124",
                       "AOE4154", "AOE4165", "AOE4166", "AOE4174",
                       "AOE4205", "AOE4206", "AOE4234", "AOE4244",
                       "AOE4254", "AOE4264", "AOE4265", "AOE4266",
                       "AOE4274", "AOE4324", "AOE4334", "AOE4344",
                       "AOE4404", "AOE4434", "AOE4454", "AOE4474",
                       "AOE4514", "AOE4604", "AOE4624", "AOE4634",
                       "AOE4654", "AOE4674", "AOE4804", "AOE4814",
                       "AOE4864"]
    },
        {
            major: "BC",
            courses: ["BC1014", "BC1214", "BC1224", "BC2014", 
                        "BC2024", "BC2064", "BC2104", "BC2114", 
                        "BC2134", "BC2214", "BC2354", "BC3014", 
                        "BC3064", "BC3114", "BC3134", "BC4064", 
                        "BC4114", "BC4124", "BC4164", "BC4314", 
                        "BC4324", "BC4334", "BC4364", "BC4374", 
                        "BC4434", "BC4444", "BC4974", "BC5134",
                        "BC5144", "BC5154", "BC5314", "BC5514",
                        "BC5524"]
        },
        {
            major: "BMES",
            courses: ["BMES2004", "BMES2014", "BMES2104", "BMES2984",
                      "BMES3024", "BMES3034", "BMES3124", "BMES3134", 
                      "BMES3144", "BMES3154", "BMES3184", "BMES3984",
                      "BMES4015", "BMES4016", "BMES4064", "BMES4134",
                      "BMES4154", "BMES4974", "BMES4984", "BMES4994",
                      "BMES5024", "BMES5044", "BMES5054", "BMES5064",
                      "BMES5074", "BMES5124", "BMES5154", "BMES5164",
                      "BMES5174", "BMES5184", "BMES5214", "BMES5234",
                      "BMES5304", "BMES5305", "BMES5314", "BMES5514",
                      "BMES5574", "BMES5604", "BMES5614", "BMES5714",
                      "BMES5984", "BMES6064", "BMES6194"]
        },
        {
            major: "BSE",
            courses: ["BSE2004", "BSE2304", "BSE3144", "BSE3154",
                      "BSE3504", "BSE3504", "BSE4125", "BSE4126",
                      "BSE4224", "BSE4304", "BSE4324", "BSE4344",
                      "BSE4524", "BSE4534", "BSE4544", "BSE4564",
                      "BSE4604"]
        },
        {
            major: "CEE",
            courses: ["CEE2804", "CEE2814", "CEE2824", "CEE2834",
                      "CEE3014", "CEE3104", "CEE3274", "CEE3304",
                      "CEE3314", "CEE3404(Theory)", "CEE3404", "CEE3424",
                      "CEE3434", "CEE3514", "CEE3604", "CEE3684", 
                      "CEE3804", "CEE3814", "CEE4014", "CEE4024", 
                      "CEE4034", "CEE4074", "CEE4104", "CEE4114",
                      "CEE4134", "CEE4144", "CEE4174", "CEE4254",
                      "CEE4264", "CEE4274", "CEE4284", "CEE4304",
                      "CEE4314", "CEE4324", "CEE4334", "CEE4344",
                      "CEE4384", "CEE4394", "CEE4404", "CEE4454",
                      "CEE4514", "CEE4534", "CEE4544", "CEE4564",
                      "CEE4604", "CEE4610", "CEE4614", "CEE4624",
                      "CEE4634", "CEE4654", "CEE4664", "CEE4674",
                      "CEE4684", "CEE4694", "CEE4804", "CEE4824",
                      "CE4844"]
        },
        {
            major: "CEM", 
            courses: ["CEM2104", "CEM2404", "CEM3024", "CEM3064",
                      "CEM3074", "CEM3084", "CEM3134", "CEM3154",
                      "CEM3164", "CEM4024", "CEM4445", "CEM4446"]
        },
        {
            major: "CHE",
            courses: ["CHE2114", "CHE2164", "CHE3015", "CHE3044",
                      "CHE3114", "CHE3124", "CHE3134", "CHE3144",
                      "CHE3184", "CHE4024", "CHE4114", "CHE4134",
                      "CHE4144", "CHE4185", "CHE4186", "CHE4214",
                      "CHE4404", "CHE4544"]
        },
        {
            major: "CS", 
            courses: ["CS1044", "CS1054", "CS1064", "CS1114", 
                      "CS2064", "CS2104", "CS2114", "CS2144",
                      "CS2505", "CS2506", "CS3114", "CS3214",
                      "CS3304", "CS3314", "CS3604", "CS3654",
                      "CS3704", "CS3724", "CS3744", "CS3754",
                      "CS3824", "CS4104", "CS4114", "CS4124",
                      "CS4134", "CS4134", "CS4144", "CS4164",
                      "CS4204", "CS4224", "CS4234", "CS4254",
                      "CS4264", "CS4274", "CS4284", "CS4304",
                      "CS4414", "CS4504", "CS4604", "CS4624",
                      "CS4634", "CS4644", "CS4654", "CS4664",
                      "CS4704", "CS4774", "CS4784", "CS4804",
                      "CS4824", "CS4884"]
        },
        {
            major: "ECE",
            courses: ["ECE1004", "ECE1574", "ECE2004", "ECE2014",
                      "ECE2024", "ECE2054", "ECE2074", "ECE2164",
                      "ECE2204", "ECE2214", "ECE2274", "ECE2500",
                      "ECE2500", "ECE2504", "ECE2514", "ECE2524",
                      "ECE2534", "ECE2544", "ECE2564", "ECE2574",
                      "ECE2704", "ECE2714", "ECE2804", "ECE3004",
                      "ECE3054", "ECE3074", "ECE3104", "ECE3105",
                      "ECE3106", "ECE3134", "ECE3154", "ECE3174",
                      "ECE3204", "ECE3214", "ECE3254", "ECE3274",
                      "ECE3304", "ECE3354", "ECE3504", "ECE3514",
                      "ECE3524", "ECE3544", "ECE3564", "ECE3574",
                      "ECE3604", "ECE3704", "ECE3714", "ECE4104",
                      "ECE4114", "ECE4124", "ECE4134", "ECE4144",
                      "ECE4154", "ECE4164", "ECE4194", "ECE4205",
                      "ECE4220", "ECE4224", "ECE4254", "ECE4284",
                      "ECE4304", "ECE4324", "ECE4334", "ECE4354",
                      "ECE4364", "ECE4414", "ECE4424", "ECE4504",
                      "ECE4514", "ECE4520", "ECE4524", "ECE4525",
                      "ECE4530", "ECE4534", "ECE4540", "ECE4550",
                      "ECE4554", "ECE4560", "ECE4564", "ECE4574",
                      "ECE4580", "ECE4584", "ECE4605", "ECE4614",
                      "ECE4624", "ECE4634", "ECE4644", "ECE4664",
                      "ECE4664", "ECE4684", "ECE4704", "ECE4805",
                      "ECE4806"]
        },
        {
            major: "ESM",
            courses: ["ESM2074", "ESM2104", "ESM2204", "ESM2304",
                      "ESM3024", "ESM3034", "ESM3054", "ESM3064",
                      "ESM3114", "ESM3124", "ESM3134", "ESM3154",
                      "ESM3234", "ESM3334", "ESM3444", "ESM3704",
                      "ESM4015", "ESM4016", "ESM4024", "ESM4044",
                      "ESM4105", "ESM4106", "ESM4114", "ESM4194",
                      "ESM4204", "ESM4224", "ESM4246", "ESM4304",
                      "ESM4734"]
        },
        {
            major: "ISE",
            courses: ["ISE2004", "ISE2014", "ISE2024", "ISE2034",
                      "ISE2204", "ISE2214", "ISE2404", "ISE3004",
                      "ISE3034", "ISE3204", "ISE3214", "ISE3414",
                      "ISE3424", "ISE3434", "ISE3614", "ISE3624",
                      "ISE4004", "ISE4005", "ISE4006", "ISE4015",
                      "ISE4204", "ISE4214", "ISE4264", "ISE4304",
                      "ISE4404", "ISE4414", "ISE4424", "ISE4434",
                      "ISE4624", "ISE4644", "ISE4654", "ISE4804"]
        },
        {
             major: "ME",
             courses: ["ME2004", "ME2024", "ME2124", "ME2134",
                       "ME3024", "ME3034", "ME3124", "ME3134",
                       "ME3194", "ME3304", "ME3404", "ME3414",
                       "ME3504", "ME3514", "ME3524", "ME3534",
                       "ME3604", "ME3614", "ME3624", "ME4005",
                       "ME4006", "ME4015", "ME4016", "ME4034",
                       "ME4034", "ME4124", "ME4164", "ME4194",
                       "ME4204", "ME4224", "ME4234", "ME4454",
                       "ME4504", "ME4524", "ME4534", "ME4544",
                       "ME4554", "ME4564", "ME4584", "ME4614",
                       "ME4624", "ME4634", "ME4644", "ME4654",
                       "ME4664", "ME4674", "ME4724"]
        },
        {
            major: "MINE",
            courses: ["MINE1024", "MINE1034", "MINE1044", "MINE2114",
                      "MINE2504", "MINE2524", "MINE2534", "MINE2544",
                      "MINE2564", "MINE3504", "MINE3514", "MINE3524",
                      "MINE3534", "MINE3544", "MINE3554", "MINE3564",
                      "MINE3574", "MINE3584", "MINE3604", "MINE3624",
                      "MINE3634", "MINE3644", "MINE3664", "MINE3674",
                      "MINE3714", "MINE4504", "MINE4514", "MINE4524",
                      "MINE4535", "MINE4536", "MINE4544", "MINE4554",
                      "MINE4614", "MINE4624", "MINE4635", "MINE4636",
                      "MINE4644", "MINE4654", "MINE4664"]
        },
        {
            major: "MSE",
            courses: ["MSE1004", "MSE1014", "MSE2014", "MSE2034",
                      "MSE2044", "MSE2054", "MSE2114", "MSE2884",
                      "MSE3044", "MSE3054", "MSE3064", "MSE3094",
                      "MSE3114", "MSE3134", "MSE3204", "MSE3304",
                      "MSE3314", "MSE3324", "MSE3884", "MSE4034",
                      "MSE4044", "MSE4055", "MSE4075", "MSE4076",
                      "MSE4085", "MSE4086", "MSE4164", "MSE4234",
                      "MSE4304", "MSE4305", "MSE4306", "MSE4324",
                      "MSE4334", "MSE4384", "MSE4414", "MSE4424",
                      "MSE4434", "MSE4554", "MSE4574", "MSE4584",
                      "MSE4604", "MSE4614", "MSE4644"]
        }
    ]

    const navigate = useNavigate();

    const {majorId} = useParams();
    const course = coursesData.find((course)=>course.major = majorId);
    if (!course) {
        return <Typography variant='h6'> The course was not found!</Typography>
    }


    const handleCourse = (course) => {
           navigate(`/Major/${majorId}/${course}`);
    }

    return(
        <Grid container sx={{pt: '10px'}}>
        {
           course.courses.map((course, index) => (
              <Grid item xs={12} 
                         md={3} 
                         sx={{pb: '15px'}}
                         key={index}> 
                    <Card sx={{maxHeight: '200px'}}>
                        <CardActionArea onClick={()=>handleCourse(course)}>
                                <CardContent>
                                    {course}
                                </CardContent>
                        </CardActionArea>
                   </Card>
              </Grid>
           ))
        }
        </Grid>

    );
}



export default Courses;