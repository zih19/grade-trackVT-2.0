
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
              "The Aerospace and Ocean Engineering department provides an enriching program to help adequately prepare students for the working world in their field. ",
              "Students can choose to enroll either in the Aerospace or Ocean Engineering tracks and have the option to double major in both. ",
              "A minor in Naval Engineering falls within this department and is also open to students outside of the department. ",
              "Students will also have the ability to choose a path in the major, listed below, that helps add a more central focus to their degree."
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
        "The Building Construction department focuses on teaching its students the engineering behind construction projects from the constructing, managing, and performance of buildings. ",
        "This focus on the different attributes allows students to gain a very diverse skill set no matter what role they may take. ",
        "Students may also choose a degree track which allows them to attain a more specialized degree in this field."
      ],

      //https://housing.com/news/hudco-housing-and-urban-development-corporation-limited/
      //https://ismailsusanti.blogspot.com/2021/07/faculty-of-built-environment-were-here.html
      //https://www.constructiontuts.com/sustainable-construction/
      imageURLs: [
        {
          label: "Emergent Technologies for Construction, Housing and Development",
          labelLink: "https://mlsoc.vt.edu/programs/undergraduate/bachelor-of-science-in-building-construction.html",
          imagelink: "https://assets-news.housing.com/news/wp-content/uploads/2021/02/24165258/All-you-need-to-know-about-Housing-and-Urban-Development-Corporation-HUDCO-FB-1200x700-compressed.jpg"
        },
        {
          label: "Information Systems in Built Environment",
          labelLink: "https://mlsoc.vt.edu/programs/undergraduate/bachelor-of-science-in-building-construction.html",
          imagelink: "https://knowledge.uli.org/-/media/images/reports/decarbonizing-the-built-environment.jpg?h=726&mw=1290&w=1290&rev=ed3d9cbab0554fbabd9dbd056352ba46&hash=4A0F7CC693EC49171B5F87D85CD2AC32"
        },
        {
          label: "Sustainable Building Performance",
          labelLink: "https://mlsoc.vt.edu/programs/undergraduate/bachelor-of-science-in-building-construction.html",
          imagelink: "https://www.constructiontuts.com/wp-content/uploads/2019/12/sustainable-strategy-in-building.jpg"
        }
      ], 
      courseURL: "/majordescription/BC"
    },
    { id: 'CHE', 
      title: "Chemical Engineering",
      //https://eng.vt.edu/academics/undergraduate-students/explore-engineering/chemical-engineering.html
      content: [
        "Students within the Chemical Engineering degree will take a variety of courses that will teach them a way to apply a range of skills to numerous fields in everyday life. ",
        "Students take courses with a focus in chemistry, math, physics, and biochemistry. Additionally, students will be introduced to challenging, yet rewarding labs that help them achieve practical hands-on knowledge of their field. ",
        "There are three tracks in this major that a student can choose to focus on, listed below. A chosen track allows for courses focused towards that niche."
      ],
      //https://www.c2es.org/2022/07/the-time-for-climate-action-is-now/
      //https://www.world-today-news.com/definition-data-science-futura-tech/
      //https://www.healthworkscollective.com/healthcare-tech-advances-clinics-use/
      imageURLs: [
      {
        label: "Climate and energy solutions",
        labelLink: "https://che.vt.edu/programs/undergraduate-program.html",
        imagelink: "https://www.c2es.org/wp-content/uploads/2022/07/iStock-1306849663-scaled.jpg"
      },
      {
        label: "Computational and data sciences",
        labelLink: "https://che.vt.edu/programs/undergraduate-program.html",
        imagelink: "https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/5/0/950321c11d_50173256_data-science-1.jpg"
      },
      {
        label: "Healthcare technologies",
        labelLink: "https://che.vt.edu/programs/undergraduate-program.html",
        imagelink: "https://www.healthworkscollective.com/wp-content/uploads/2017/08/healthcare-tech.jpg"
      }], 
      courseURL: "/majordescription/CHE"
    },
    { id: 'CEE', 
      title: "Civil/Environmental Engineering",
      //https://cee.vt.edu/AboutUs-menu/fast_facts.html
      content: [
        "The Civil/Environmental Engineering department strives to provide its students with a wide array of skills. Covering a broad area of instruction, skills developed include: critical thinking, problem solving, communication, and leadership. ",
        "Civil engineering students will have a coursework that will focus on mathematics and mechanics in the first two years, while moving to more specialized and course-specific in the third and fourth years of coursework. ",
        "There are also specializations that students can choose to give their degree a central focus."
      ],
      //https://www.handle.com/construction-project-management/
      //https://us.anteagroup.com/news-events/blog/environmental-engineers-week
      //https://www.riley-group.com/expertise/geotechnical-engineering/
      //https://nearterm.com/are-there-great-career-opportunities-in-the-land-development-engineering-field/
      //https://www.tuf-bar.com/composite-materials-for-civil-engineering-applications/
      //https://carrollengineering.com/services/structural-engineering-services/
      //http://martinjoyce10.blogspot.com/2013/02/civil-engineering-in-nutshell.html
      //https://www.straughanenvironmental.com/markets-services/services/water-resources-and-civil-engineering/
      imageURLs: [
        {
          label: "Construction Engineering and Management",
          imagelink: "https://www.handle.com/wp-content/uploads/2020/07/construction-project-management-scaled.jpeg",
          labelLink: "https://cee.vt.edu/Undergraduate-menu/prospective-undergraduate-students.html"
        },
        {
          label: "Environmental",
          imagelink: "https://cdnpreprodanteagroup.blob.core.windows.net/prod/media/resized/3/7d8b1a01-0e7f-4b5a-bf0a-b2dd3465a9b4/autox1160_gettyimages-814023320.jpg",
          labelLink: "https://cee.vt.edu/Undergraduate-menu/prospective-undergraduate-students.html"
        },
        {
          label: "Geotechnical",
          imagelink: "https://www.riley-group.com/wp-content/uploads/2018/02/Geotechnical-Engineering.jpg",
          labelLink: "https://cee.vt.edu/Undergraduate-menu/prospective-undergraduate-students.html"
        },
        {
          label: "Land Development",
          imagelink: "https://nearterm.com/wp-content/uploads/2021/07/nearterm-civil-engineering-land-development.jpg",
          labelLink: "https://cee.vt.edu/Undergraduate-menu/prospective-undergraduate-students.html"
        },
        {
          label: "Materials",
          imagelink: "https://www.tuf-bar.com/wp-content/uploads/2018/11/Civil-Engineering-Applications.jpg",
          labelLink: "https://cee.vt.edu/Undergraduate-menu/prospective-undergraduate-students.html"
        },
        {
          label: "Structural",
          imagelink: "https://carrollengineering.com/wp-content/uploads/2021/01/Structural-Engineering_Compressed.jpg",
          labelLink: "https://cee.vt.edu/Undergraduate-menu/prospective-undergraduate-students.html"
        },
        {
          label: "Transportation",
          imagelink: "https://3.bp.blogspot.com/-AqxczPx7QIU/UX8XgP2k0UI/AAAAAAAAACI/4Q8kQF5fPQk/s1600/transportation-Engineering.jpg",
          labelLink: "https://cee.vt.edu/Undergraduate-menu/prospective-undergraduate-students.html"
        },
        {
          label: "Water Resources",
          imagelink: "https://www.straughanenvironmental.com/wp-content/uploads/2021/04/AdobeStock_125778651-lg-crop.jpg",
          labelLink: "https://cee.vt.edu/Undergraduate-menu/prospective-undergraduate-students.html"
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
        "The Computer Science Department strives to teach students a wide range of skills that allow for a better understanding of the profession as a whole as well as allowing the students to pick an area of computer science that is particularly interesting to them. ",
        "The Computer Science Department has three tracks that students can choose from, which are listed below."
      ],
      //https://www.pixelstalk.net/hd-computer-science-backgrounds/
      //https://betanews.com/2015/02/02/how-the-cloud-boosts-business-security/
      //https://ebs-integrator.com/blog/basics-data-centric-vs-data-driven-the-whys-and-whats/
      imageURLs: [
        {
          label: "Computer science",
          imagelink: "https://www.pixelstalk.net/wp-content/uploads/2016/07/Computer-Science-Pictures-HD.jpg",
          labelLink: "https://cs.vt.edu/Undergraduate.html"
        },
        {
          label: "Secure computing",
          imagelink: "https://betanews.com/wp-content/uploads/2015/02/Cloud-security-800x450.png",
          labelLink: "https://cs.vt.edu/Undergraduate.html"
        },
        {
          label: "Data-centric computing",
          imagelink: "https://ebs-integrator.com/wp-content/uploads/2020/08/DC-DD_Stats-3.png",
          labelLink: "https://cs.vt.edu/Undergraduate.html"
        }
      ], 
      courseURL: "/majordescription/CS"
    },
    { id: 'CEM', 
      title: "Construction Engineering and Management",
      content: ["No tracks as far as I know"],
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
      content: ["No tracks as far as I know."],
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
      content: ["No tracks as far as I know"], 
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
