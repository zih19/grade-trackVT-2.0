import React from 'react';
import { Typography, Container, Grid, Paper, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const MajorDescription = () => {
  const majorChoices = [
    { id: "AOE", 
      title: "Aerospace Engineering", 
      //https://www.aoe.vt.edu/undergraduate/undergraduate-curriculum.html
      content: [
              "The aerospace and ocean engineering department provides an enriching program to help adequately prepare students for the working world in their field. ",
              "Students can choose to enroll either in the aerospace or ocean engineering tracks within this department, with the ability to double major in both if desired. ",
              "A minor in naval engineering is also provided by this department, and is open to students outside of the department.",
              "Students will also have the ability to choose a path in the major that helps add a more central focus to their degree, the choices of which are listed below."
      ],
      imageURLs: [
        {
          label: "Aero/hydrodynamics",
          labelLink: "https://www.aoe.vt.edu/undergraduate/concentrations/aero-hydrodynamics.html",
          imagelink: "https://www.aoe.vt.edu/content/aoe_vt_edu/en/undergraduate/concentrations/aero-hydrodynamics.transform/m-medium/image.jpg"
        },
        {
            label: "Dynamics, control and estimation",
            labelLink: "https://www.aoe.vt.edu/undergraduate/concentrations/dynamics-control-estimation.html",
            imagelink: "https://www.aoe.vt.edu/content/aoe_vt_edu/en/undergraduate/concentrations/dynamics-control-estimation.transform/m-medium/image.jpg"
        },
        {
            label: "Energy and the environment",
            labelLink: "https://www.aoe.vt.edu/undergraduate/concentrations/energy-and-environment.html",
            imagelink: "https://www.aoe.vt.edu/content/aoe_vt_edu/en/undergraduate/concentrations/energy-and-environment.transform/m-medium/image.jpg" 
        },
        {
            label: "Naval engineering",
            labelLink: "https://www.aoe.vt.edu/undergraduate/concentrations/naval-engineering.html",
            imagelink: "https://www.aoe.vt.edu/content/aoe_vt_edu/en/undergraduate/concentrations/naval-engineering.transform/m-medium/image.jpg"
        },
        {
            label:  "Foundational Option",
            labelLink: "https://www.aoe.vt.edu/undergraduate/concentrations/foundational-option.html",
            imagelink: "https://www.aoe.vt.edu/content/aoe_vt_edu/en/undergraduate/concentrations/foundational-option.transform/m-medium/image.png"
        },
        {
            label: "Propulsion",
            labelLink: "https://www.aoe.vt.edu/undergraduate/concentrations/propulsion.html",
            imagelink: "https://www.aoe.vt.edu/content/aoe_vt_edu/en/undergraduate/concentrations/propulsion.transform/m-medium/image.jpg" 
        },
        {
            label: "Space engineering",
            labelLink: "https://www.aoe.vt.edu/undergraduate/concentrations/space.html",
            imagelink: "https://www.aoe.vt.edu/content/aoe_vt_edu/en/undergraduate/concentrations/space.transform/m-medium/image.png"
        },
        {
            label: "Structures and materials",
            labelLink: "https://www.aoe.vt.edu/undergraduate/concentrations/structures-and-materials.html",
            imagelink: "https://www.aoe.vt.edu/content/aoe_vt_edu/en/undergraduate/concentrations/structures-and-materials.transform/m-medium/image.png"
        },
        {
            label: "Vehicle and system design",
            labelLink: "https://www.aoe.vt.edu/undergraduate/concentrations/vehicle-and-system-design.html",
            imagelink: "https://www.aoe.vt.edu/content/aoe_vt_edu/en/undergraduate/concentrations/vehicle-and-system-design.transform/m-medium/image.jpg"
        }
        ],
      courseURL: "/majordescription/AOE"
    },
    { id: "BSE", 
      title: "Biological Systems Engineering",
      //https://www.bse.vt.edu/undergraduate.html
      content: [
        "The biological systems engineering department's program consists of a course schedule that allows students to work in a highly diverse range of biological systems. ",
        "The goal of the program is to provide its students with the knowledge to create a more sustainable future that leverages the technology of today to create products and systems that protect natural resources. ",
        "While not supporting tracks for students, the department still offers a wide range of classes that students can choose from depending on their particular interests."
      ],
      imageURLs: [
        {
            label: "Biochemistry and Chemistry",
            imagelink: "https://www.bse.vt.edu/content/bse_vt_edu/en/undergraduate/jcr:content/content/vtmulticolumn_397201_1226992697/vt-items_0/adaptiveimage_116777466.transform/l-medium/image.JPG"
        },
        {
            label: "Biology, MicroBiology, Genetics",
            imagelink: "https://www.bse.vt.edu/content/bse_vt_edu/en/undergraduate/jcr:content/content/vtmulticolumn_397201_1226992697/vt-items_1/adaptiveimage_116777.transform/l-medium/image.JPG"
        },
        {
            label: "Biomedical Engineering",
            imagelink: "https://www.bse.vt.edu/content/bse_vt_edu/en/undergraduate/jcr:content/content/vtmulticolumn_397201_496573460/vt-items_0/adaptiveimage_116777466.transform/l-medium/image.JPG"
        },
        {
            label: "Chemical Engineering",
            imagelink: "https://www.bse.vt.edu/content/bse_vt_edu/en/undergraduate/jcr:content/content/vtmulticolumn_397201_496573460/vt-items_1/adaptiveimage_116777.transform/l-medium/image.JPG"
        },
        {
            label: "Civil Engineering",
            imagelink: "https://www.bse.vt.edu/content/bse_vt_edu/en/undergraduate/jcr:content/content/vtmulticolumn_397201_1218036660/vt-items_0/adaptiveimage_116777466.transform/l-medium/image.JPG"
        },
        {
            label: "Environmental Science, Water, or Natural Resources",
            imagelink: "https://www.bse.vt.edu/content/bse_vt_edu/en/undergraduate/jcr:content/content/vtmulticolumn_397201_1218036660/vt-items_1/adaptiveimage_116777.transform/l-medium/image.JPG"
        },
        {
            label: "Pre-Med",
            imagelink: "https://www.bse.vt.edu/content/bse_vt_edu/en/undergraduate/jcr:content/content/vtmulticolumn_397201_1285047353/vt-items_0/adaptiveimage_116777466.transform/l-medium/image.jpg"
        }
      ], 
      courseURL: "/majordescription/BSE"
    },
    { id: "BME", 
      title: "Biomedical Engineering",
      //https://eng.vt.edu/academics/undergraduate-students/explore-engineering/biomedical-engineering.html
      content: [
        "The biomedical engineering department strives to create a curriculum that teaches engineers how to work with others with the goals of improving human health, safety, and healthcare while minimizing cost. ",
        "Students will be taught the importance of combining their engineering and biological knowledge in order to create systems that benefit all that are involved.",
        "With the wide range of courses provided to the students, their is a high amount of freedom to decide what areas of biomedical engineering to focus on for each student."
      ],
      imageURLs: [
        {
            label: "Pharmacology",
            imagelink: "https://cdn11.bigcommerce.com/s-tn86bkk28c/images/stencil/1280x1280/products/129/586/course_PHARM103-rectangle__45415.1697715273.jpg?c=1"
        },
        {
            label: "Anatomy",
            imagelink: "https://cdn.mos.cms.futurecdn.net/yebgNAPBke9z9U3mxpSAB9-1200-80.jpg"
        },
        {
            label: "Biology",
            imagelink: "https://img.freepik.com/free-vector/science-biology-scribbles_23-2147501586.jpg"
        },
        {
            label: "Mathematics",
            imagelink: "https://www.clarkson.edu/sites/default/files/2023-06/Mathematics-Hero-1600x900.jpg"
        },
        {
            label: "Chemistry",
            imagelink: "https://t4.ftcdn.net/jpg/05/52/90/05/360_F_552900530_D4WF1c3zGsvIGfLgKaRBrEmbvPlk6O6E.jpg"
        }
      ], 
      courseURL: "/majordescription/BME"
    },
    { id: 'BC', 
      title: "Building Construction",
      //https://www.vt.edu/academics/majors/building-construction.html https://mlsoc.vt.edu/programs/undergraduate/bachelor-of-science-in-building-construction.html
      content: [
        "The building construction department focuses on teaching its students the engineering behind construction projects from the constructing, managing, and performance of buildings to their sustainability. ",
        "This focus on the different parts of this field allows for the students to gain a very diverse skill set that will be useful when working in future construction, no matter what role they may take.",
        "Students may also choose a degree track which allows them to attain a more specialized degree in this field."
      ],
      imageURLs: [
        {

        },
        {

        },
        {

        }
      ], 
      courseURL: "/majordescription/BC"
    },
    { id: 'CHE', 
      title: "Chemical Engineering",
      //https://eng.vt.edu/academics/undergraduate-students/explore-engineering/chemical-engineering.html
      content: [
        "Students within the chemical engineering program will take a variety of courses that help to teach them how to apply a range of skills to numerous fields in everyday life. ",
        "Students take a variety of courses with a focus on chemistry, math, physics, and biochemistry. Additionally, students will be introduced to challenging but rewarding labs that help them get practical hands-on knowledge of their field.",
        "There are three optional tracks in this major that a student can choose to focus on. If chosen, the tracks restrict the courses a student will take to allow them a more focused overall degree goal."
      ],
      imageURLs: [], 
      courseURL: "/majordescription/CHE"
    },
    { id: 'CEE', 
      title: "Civil Engineering",
      //https://cee.vt.edu/AboutUs-menu/fast_facts.html
      content: [
        "The civil engineering department strives to provide its students with a wide array of skills that are expected of an engineer in this field. Covering a broad area of instruction, skills developed include critical thinking, problem solving, communication, and leadership. ",
        "Civil engineering students will have a coursework that will focus on mathematics and mechanics in the first two years, while moving to more specialized and specific courses in the third and fourth years of coursework.",
        "There are also specializations that students can choose to give their degree a central focus."
      ],
      imageURLs: [
        {

        },
        {

        },
        {

        }
      ], 
      courseURL: "/majordescription/CEE"
    },
    { id: 'ECE', 
      title: "Electric/Computer Engineering",
      //https://ece.vt.edu/about.html
      content: [
        "The electrical/computer engineering program helps to teach students in a broad range of subjects to allow for students to "
      ],
      imageURLs: [
        {

        },
        {

        },
        {
            
        }
      ],
      courseURL: "/majordescription/ECE"
    },
    { id: 'CS', 
      title: "Computer Science",
      content: [
        "The computer science department strives to teach students a wide range of skills that allow for a better understanding of the profession as a whole as well as allowing the students to pick an area of computer science that is particularly interesting to them.",
        "The computer science department has three tracks that students can choose from, which are listed below."
      ],
      imageURLs: [
        {

        },
        {

        },
        {
            
        }
      ], 
      courseURL: "/majordescription/CS"
    },
    { id: 'CEM', 
      title: "Construction Engineering and Management",
      content: [],
      imageURLs: [
        {

        },
        {

        },
        {
            
        }
      ], 
      courseURL: "/majordescription/CEM"
    },
    { id: 'ISE', 
      title: "Industrial and Systems Engineering", 
      content: [],
      imageURLs: [
        {

        },
        {

        },
        {
            
        }
      ],
      courseURL: "/majordescription/ISE"
    },
    { id: 'MSE', 
      title: "Materials Science Engineering",
      content: [], 
      imageURLs: [
        {

        },
        {

        },
        {
            
        }
      ],
      courseURL: "/majordescription/MSE"
    },
    { id: 'ME', 
      title: "Mechanical Engineering",
      content: [],
      imageURLs: [
        {

        },
        {

        },
        {
            
        }
      ], 
      courseURL: "/majordescription/ME"
    },
    { id: 'MINE', 
      title: "Mining Engineering",
      content: [],
      imageURLs: [
        {

        },
        {

        },
        {
            
        }
      ], 
      courseURL: "/majordescription/MINE"
    }
  ];
    
    const { majorId } = useParams();
    const major = majorChoices.find((m) => m.id.toString() === majorId);
    if (!major) {
         return <Typography variant='h6'> Major was not found!</Typography>
    }
    return(
        <Container maxWidth='xl' sx={{pb: '12px'}}>
             <Typography variant='h2' component='div' gutterBottom>{major.title}</Typography>
             <Card bg='light' border='primary' text='black' style={{fontSize:'19px', marginBottom:'30px'}}>
              <Card.Title style={{textDecoration: 'bold', fontSize:'25px', textAlign:'left'}}>Specialization/Subject</Card.Title>
              <Card.Body style={{textAlign:'left', fontFamily:'Arial'}}>{major.content}</Card.Body>
             </Card>
             <Grid container spacing={2}>
             {
                major.imageURLs.map((imageContent, index) => (
                      <Grid item xs={12} md={4} key={index}>
                            <Paper elevation={3} sx={{padding: 2}}>
                            <a href={imageContent.labelLink} target="_blank" rel="noopener noreferrer">  
                                <Box component='img'
                                        sx={{height: '200px',
                                            width: '100%',
                                            objectFit: 'cover',
                                            mb: '15px'}}
                                        src={imageContent.imagelink}
                                        alt={imageContent.label} />  
                              </a>
                                <Typography variant='body2' >
                                    {imageContent.label}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))
            }

             </Grid>
        </Container>
    )

}
export default MajorDescription;