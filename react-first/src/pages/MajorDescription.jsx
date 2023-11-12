import React from 'react';
import { Typography, Container, Grid, Paper, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

const MajorDescription = () => {
  const majorChoices = [
    { id: "AOE", 
      title: "Aerospace Engineering", 
      content: [
        "- The Kevin T. Crofton Department of Aerospace and Ocean Engineering offers a bachelor of science degree in aerospace and ocean engineering.",
        "- Students in the department may major in either aerospace engineering or ocean engineering. These degrees share many course requirements because the two curricula cover a broad range of common interests and offer a wide range of technical electives.",
        "- Students with an interest in both majors may enroll in a double major program—aerospace with ocean engineering or ocean with aerospace engineering.",
        "- The Department of Aerospace and Ocean Engineering also offers a multidisciplinary minor in naval engineering, which is open to non-AOE students.",
        "There are 9 tracks available to be chosen, and students who are majoring in AOE can select any one of them to take into consideration: " 
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
      content: [
        "BSE graduates develop engineering solutions that safeguard land and water resources, detect and prevent human diseases, and produce food, pharmaceuticals, and polymers. We are invested in your success and prepare you to make a difference in the career you desire through dedicated advising, supportive faculty, and a community atmosphere. Our ABET-accredited Bachelor of Science program prepares our graduates to excel as STEM professionals in the global workforce.",
        "BSE students are provided with a common foundation of biology and chemistry to expand core skills in math, physics, and engineering design principles. Our flexible curriculum, specialized technical elective courses, and career-enhancing extracurricular opportunities equip our graduates to make a meaningful impact on natural resources, food, and biotechnology. Over 90% of BSE students participate in research, internships, and/or co-op experiences during their degree program.",
        "BSE’s graduates are equipped with the technical abilities and skill sets desirable to employers. Our students are employed in the biotechnology, pharmaceutical, energy, and food industries as well as government agencies, environmental consulting firms, and non-profit organizations. BSE students also succeed in professional schools such as medicine, dentistry, and veterinary medicine, and as graduate students in a variety of disciplines, including biomedical engineering. 90% of BSE graduates have job or graduate school placements within 6 months after graduation within their respective fields. Median starting salary for recent BSE graduates is $68,500.",
        "To determine whether BSE is a good major for students to pursue, students with a strong tendency over the following areas of expertise can take into account as carefully: "],
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
      content: [
        "Virginia Tech offers an undergraduate degree program in biomedical engineering as well as a minor program of study.",
        "With the nation’s demand for health-related services, products, and professionals expected to skyrocket over the next decade, Virginia Tech biomedical engineering students will be uniquely trained to bridge the gap between traditional medicine and the technology needed to address emerging and complex health care problems.",
        "Our program emphasizes technology transfer, engineering fundamentals, and hands-on learning opportunities. Students will have access to undergraduate research alongside program faculty, internships and clinical rotations, and innovative entrepreneurial training.",
        "If you are a student with the strong interest in the following areas of expertise, then you will definitely be a great fit for BME: "           
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
      content: [],
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
      content: [],
      imageURLs: [], 
      courseURL: "/majordescription/CHE"
    },
    { id: 'CEE', 
      title: "Civil Engineering",
      content: [],
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
      content: [],
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
      content: [],
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
             {
                major.content.map((paragraph, index) => {
                    if(index === major.content.length - 2) {
                        return (
                          
                           <Typography key={index} 
                                        variant='body1' 
                                        sx={{pb: '50px'}}
                                        textAlign='left'> 
                                {paragraph} 
                            </Typography>
                          
                        );
                    } 
                    else if (index === major.content.length - 1) {
                      return (
                        <>
                          <Typography variant='h4' textAlign='left'> Specialization/Subject </Typography>
                          <Typography key={index} 
                                      variant='body1' 
                                      sx={{pb: '8px'}}
                                      textAlign='left'> 
                              {paragraph} 
                          </Typography>
                        </>
                      );
                    }
                    else {
                      return (
                        <Typography key={index} 
                                    variant='body1' 
                                    sx={{pb: '10px'}}
                                    textAlign='left'> 
                              {paragraph} 
                        </Typography>
                      );
                    }
                })
             }
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