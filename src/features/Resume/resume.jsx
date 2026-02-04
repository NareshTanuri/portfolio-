import {
    Box,
    Typography,
    Grid,
    Container,
    Link,
    Divider
} from "@mui/material";
import { GitHub, LinkedIn, Email, Phone } from "@mui/icons-material";

const Resume = () => {
    const navLinks = [
        { id: 1, link: "9347081115", icon: <Phone /> },
        { id: 2, link: "nareshtanuri1418@gmail.com", icon: <Email /> },
        { id: 3, link: "https://www.linkedin.com/in/naresh-tanuri-320295257/", icon: <LinkedIn />, name: "LinkedIn" },
        { id: 4, link: "https://github.com/NareshTanuri", icon: <GitHub />, name: "GitHub" }
    ];

    const skillSets = [
        { id: 1, skills: "HTML5" }, { id: 2, skills: "CSS3" }, { id: 3, skills: "JavaScript" }, { id: 4, skills: "React.js" },
        { id: 5, skills: "Node.js" }, { id: 6, skills: "Bootstrap" }, { id: 7, skills: "React-Bootstrap" }, { id: 8, skills: "GraphQL" },
        { id: 9, skills: "C Language Basics" }, { id: 10, skills: "SQL" }, { id: 11, skills: "MySQL" }, { id: 12, skills: "Redux" },
        { id: 13, skills: "Material-UI" }, { id: 14, skills: "Git" }, { id: 15, skills: "Postman" }, { id: 16, skills: "WinSCP" },
        { id: 17, skills: "FileZilla" }, { id: 18, skills: "Jira" }, { id: 19, skills: "React Hooks" }, { id: 20, skills: "Next.js" }
    ];

    const skillCategories = {
        Frontend: [1, 2, 3, 19, 13, 6, 7, 20],
        Backend: [5, 8],
        Database: [10, 11],
        Frameworks: [4],
        Tools: [14, 15, 16, 17, 18],
        "State Management": [12],
    };

    const renderSkills = (category) => category.map(id => skillSets.find(skill => skill.id === id)?.skills).filter(Boolean).join(', ');

    const educationDetails = [
        { institution: "Dvr Degree College, Krishana University", education: "Bachelor of Science", field: "Computer Science", gpa: 7.67, scale: 10, startYear: 2019, endYear: 2022 },
        { institution: "Dvr Junior College", education: "Intermediate", field: "MPC", gpa: 7.09, scale: 10, startYear: 2017, endYear: 2019 },
        { institution: "Pavan Sbhodaya VNHS", education: "SSC", field: "General", gpa: 8.3, scale: 10, startYear: 2016, endYear: 2017 },
    ];

    const languages = ["English", "Hindi", "Telugu"];

    const contactInfo = navLinks.filter(item => item.name);

    const experiences = [
        {
            id: 1,
            name: "KGN Ceiling – Nandigama",
            // role: "Front-End Developer",
            link: "https://kgncellings.netlify.app/",
            company: "KGN Ceiling (Client Project)",
            duration: "Jan 2026 – Present",
            responsibilities: [
                "Developed a responsive business website for a local false ceiling service provider using React and Material UI.",
                "Designed structured sections including Home, About, Services, Gallery, and Contact to clearly present business offerings.",
                "Implemented an image gallery with Swiper, including navigation and pagination for enhanced visual presentation.",
                "Built an admin panel to manage services, gallery images, and contact enquiries, enabling easy content updates.",
                "Integrated call-to-action features for free consultation, improving lead generation and user engagement."
            ]
        },
        {
            id: 2,
            name: "Rizee Educational Platform (Student & College)",
            link: "https://rizee.in",
            company: "Rizee Educational Platform",
            duration: "May 2023 – Present",
            responsibilities: [
                "Developed both web and mobile applications for Rizee, an online educational platform that helps students achieve their best by offering various methods of preparation and enhancing their readiness for competitive exams.",
                "These strategies assiststudentsin attaining the ranks and gradesthey dream of.",
                "Any student preparing forthe JEE/ NEET/ EAMCET exam be it amonth away or a year away we wantthem to be ready and confident with their abilities",
                "This,we believe, is possible with constantrelevantpractice tests and crisp notes for reference.",
                "Educational institutions can use the platform to track student progress and raise performance standards.",
                "Improved platform scalability and performance by optimizing front-end workflows."
            ]
        },
        // {
        //     id: 2,
        //     name: "Testanic (Student & College)",
        //     link: "https://testonic.ai/",
        //     company: "Testanic Educational Platform",
        //     duration: "Jan 2025 – Present",
        //     responsibilities: [
        //         "Personalized Dashboard: Offers insights into performance metrics, helping students identify their strengths and areas for improvement",
        //         "Exam Simulations: Provides real-time mock exams tailored to JEE, NEET, AP/TS EAMCET, and KCET patterns for better preparation",
        //         "Result Visualization: Displays progress through interactive graphs, highlighting accuracy, speed, and subject-wise scores.",
        //         "Time Management Analysis: Breaks down time spent on each question, enabling students to optimize their answering strategies",
        //         "Detailed Question Insights: Includes explanations, related topics, and difficulty levels to strengthen concept understanding..",
        //     ]
        // },
        {
            id: 3,
            name: "C3CRM",
            link: "https://user.c3crm.in",
            company: "C3CRM Platform",
            duration: "Oct 2023 – Present",
            responsibilities: [
                " Builtshopping categories, automated templates, and marketing workflows for WhatsApp Integration.",
                " Streamlinedlead tracking and managementforsocial media campaigns with QR Code Generation.",
                " Designed a slot booking system with user-friendly interfaces for Appointment Booking.",
                " Enhanced data organization and outbound marketing capabilities with File Categorization and Campaigns.",
                " Enhanced productivity by automating repetitive tasks and centralizing data."
            ]
        },
        // {
        //     id: 4,
        //     name: "Navakranthi – Farmer Platform",
        //     link: "https://navakranthi.rizee.in",
        // company: "Navakranthi – Farmer Project",
        // duration: "Dec 2023 – Present",
        //     responsibilities: [
        //         "Created tools for tracking attendance during farmer events with Attendance Systems.",
        //         "Designed a module to create and manage training plans and group activities with Event Scheduling.",
        //         "Developed features to store and display soil and land details with Data Management.",
        //         "Built interactive charts and tables for data visualization in Dashboards and Analytics.",
        //         "Delivered responsive web designs for accessibility across devices, empowering rural users."
        //     ]
        // },
    ];

    const careerStartYear = 2023; // change this once
    const currentYear = new Date().getFullYear();
    const totalExperience = currentYear - careerStartYear;

    return (
        <Container fluid sx={{ fontFamily: "Calibri, Arial, sans-serif", color: "#000" }}>
            <Box textAlign="center" mb={2}>
                <Typography variant="h4" fontWeight={700}>Naresh Tanuri</Typography>
                <Typography color="primary">Front-End Developer</Typography>
            </Box>

            <Grid container spacing={5} justifyContent="center" mb={3}>
                {navLinks.map((item) => (
                    <Grid item key={item.id}>
                        {item.name ? (
                            <Link href={item.link} target="_blank" rel="noopener" color="inherit" underline="none">
                                <Box display="flex" alignItems="center" gap={1}>
                                    {item.icon} <Typography>{item.name}</Typography>
                                </Box>
                            </Link>
                        ) : (
                            <Box display="flex" alignItems="center" gap={1}>
                                {item.icon} <Typography>{item.link}</Typography>
                            </Box>
                        )}
                    </Grid>
                ))}
            </Grid>

            {/* Professional Summary */}
            <Typography
                variant="body1"
                gutterBottom
                sx={{
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    textAlign: "center",
                    textTransform: "uppercase",
                    mt: 2.5,
                }}
            >
                Professional Summary
            </Typography>

            <Divider sx={{ bgcolor: 'rgb(19, 18, 18)' }} />

            <Typography
                sx={{
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 1.6,
                    color: "#000",
                    textAlign: "justify",
                    mt: 2,
                }}
            >
                Highly motivated and skilled Front-End Developer with {`${totalExperience}`} years of experience in developing robust, user- friendly web
                applications. Proficient in React.js, Next.js with expertise in building scalable, responsive, and high - performance applications.
                Strong problem-solving abilities, attention to detail, and a commitment to delivering top- quality solutions in EdTech, CRM,
                and other domains
            </Typography>

            {/* WORK EXPERIENCE */}
            <Typography
                variant="body1"
                gutterBottom
                sx={{
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    textAlign: "center",
                    mt: 2.5,
                }}
            >
                WORK EXPERIENCE
            </Typography>

            <Divider sx={{ bgcolor: 'rgb(19, 18, 18)' }} />

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    width: "100%",
                    mt: 2.5
                }}
            >
                {/* LEFT: Company + Role */}
                <Box>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 600
                        }}
                    >
                        Mylearning Plus Pvt Ltd
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: "12.5px",
                            fontWeight: 500,
                            color: "text.secondary"
                        }}
                    >
                        Front-End Developer
                    </Typography>
                </Box>

                {/* RIGHT: Location + Duration */}
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                    <Typography
                        sx={{
                            fontSize: "12.5px",
                            fontWeight: 500
                        }}
                    >
                        Hyderabad
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: "12px",
                            color: "text.secondary"
                        }}
                    >
                        May 2023 – Present
                    </Typography>
                </Box>
            </Box>


            <Grid container spacing={1} mt={2}>
                {[
                    "Developed and maintained responsive front-end interfaces for product-based applications using React.js and Next.js, focusing on performance and user experience.",
                    "Designed and optimized reusable UI components, improving development efficiency and consistency across applications.",
                    "Collaborated with backend teams to integrate RESTful APIs, ensuring efficient data retrieval and real-time updates.",
                    "Implemented secure user authentication and authorization using JWT, enhancing data security and controlled access.",
                    "Created dynamic and user-friendly admin dashboards, enabling clients to manage services and resources with ease.",
                    "Enhanced application load times and performance through lazy loading, memoization, and code-splitting techniques.",
                    "Debugged and resolved critical performance bottlenecks, ensuring smooth user interactions across platforms."
                ].map((point, index) => (
                    <Grid item size={{ xs: 12, md: 12 }} key={index}>
                        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                            {/* Bullet */}
                            <Typography
                                sx={{
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: "#000",
                                    mr: 1,
                                    lineHeight: 1.2
                                }}
                            >
                                •
                            </Typography>

                            {/* Text */}
                            <Typography
                                sx={{
                                    fontSize: "12.5px",
                                    lineHeight: 1.2,
                                    color: "#000"
                                }}
                            >
                                {point}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            {/* PROJECTS */}
            <Typography
                variant="body1"
                gutterBottom
                sx={{
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    textAlign: "center",
                    mt: 2,
                }}
            >
                PROJECTS
            </Typography>

            <Divider sx={{ bgcolor: 'rgb(19, 18, 18)' }} />

            {experiences.map((exp) => (
                <Box key={exp.id} mb={3} mt={2}>
                    {/* Company + Duration */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            mb: 0.5
                        }}
                    >
                        {/* LEFT */}
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 600
                                }}
                            >
                                {exp.name}
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: "12.5px",
                                    fontWeight: 500,
                                    color: "text.secondary"
                                }}
                            >
                                {exp.role}
                            </Typography>

                            {exp.link && (
                                <Link
                                    href={exp.link}
                                    target="_blank"
                                    rel="noopener"
                                    underline="hover"
                                    sx={{ fontSize: "12px" }}
                                >
                                    {exp.link}
                                </Link>
                            )}
                        </Box>

                        {/* RIGHT */}
                        <Typography
                            sx={{
                                fontSize: "12px",
                                color: "text.secondary"
                            }}
                        >
                            {exp.duration}
                        </Typography>
                    </Box>

                    {/* Responsibilities */}
                    <Box mt={1}>
                        {exp.responsibilities.map((res, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    mb: 0.5
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "12.5px",
                                        fontWeight: 700,
                                        color: "#000",
                                        mr: 1,
                                        lineHeight: 1.6
                                    }}
                                >
                                    •
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: "12.5px",
                                        lineHeight: 1.6
                                    }}
                                >
                                    {res}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            ))}


            {/* PROJECTS */}
            <Typography
                variant="body1"
                gutterBottom
                sx={{
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    textAlign: "center",
                    mt: 2,
                }}
            >
                TECHNICAL SKILLS
            </Typography>

            <Divider sx={{ bgcolor: 'rgb(19, 18, 18)' }} />

            <Box mt={2}>
                {Object.entries(skillCategories).map(([key, value]) => (
                    <Box key={key} sx={{ display: "flex", mb: 0.5 }}>
                        <Typography sx={{
                            fontSize: "12.5px",
                            fontWeight: 700,
                            color: "#000",
                            mr: 1,
                            lineHeight: 1.6
                        }}>•</Typography>
                        <Typography sx={{
                            fontSize: "12.5px",
                            lineHeight: 1.6
                        }}>
                            <strong>{key}&nbsp;:&nbsp;</strong> {renderSkills(value)}
                        </Typography>
                    </Box>
                ))}
            </Box>


            {/* EDUCATION */}
            <Typography
                variant="body1"
                gutterBottom
                sx={{
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    textAlign: "center",
                    mt: 2,
                }}
            >
                EDUCATION
            </Typography>

            <Divider sx={{ bgcolor: 'rgb(19, 18, 18)' }} />

            {educationDetails.map((edu, idx) => (
                <Box key={idx} mb={2} mt={2}>
                    {/* Degree + Duration */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start"
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: 600
                            }}
                        >
                            {edu.education}, {edu.field}
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "12px",
                                color: "text.secondary"
                            }}
                        >
                            {edu.startYear} – {edu.endYear}
                        </Typography>
                    </Box>

                    {/* Institution + GPA */}
                    <Typography
                        sx={{
                            fontSize: "12.5px",
                            color: "text.secondary"
                        }}
                    >
                        {edu.institution} | GPA: {edu.gpa}/{edu.scale}
                    </Typography>
                </Box>
            ))}

            {/* PERSONAL DETAILS  */}
            <Typography
                variant="body1"
                gutterBottom
                sx={{
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    textAlign: "center",
                    mt: 2,
                }}
            >
                PERSONAL DETAILS
            </Typography>

            <Divider sx={{ bgcolor: 'rgb(19, 18, 18)' }} />

            <Box mt={2}>
                {[
                    { label: "Total Experience", value: `${totalExperience} Years` },
                    { label: "Current Location", value: "Hyderabad" },
                    { label: "Date of Birth", value: "05-06-2002" },
                    { label: "Gender", value: "Male" },
                    { label: "Marital Status", value: "Single" }
                ].map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            mb: 1
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: 600
                            }}
                        >
                            {item.label}&nbsp;:&nbsp;
                        </Typography>

                        <Typography sx={{
                            fontSize: "12.5px",
                            lineHeight: 1.6
                        }}>
                            {item.value}
                        </Typography>
                    </Box>
                ))}
            </Box>


            {/* LANGUAGES */}
            <Typography
                variant="body1"
                gutterBottom
                sx={{
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    textAlign: "center",
                    mt: 2,
                }}
            >
                LANGUAGES
            </Typography>

            <Divider sx={{ bgcolor: 'rgb(19, 18, 18)' }} />

            <Box mt={2}>
                {languages.map((lang, i) => (
                    <Typography key={i} sx={{
                        fontSize: "12.5px",
                        fontWeight: 700,
                        color: "#000",
                        mr: 1,
                        lineHeight: 1.6,
                        mb: 0.5
                    }}>
                        • &nbsp;{lang}
                    </Typography>
                ))}
            </Box>
        </Container>
    );
};
export default Resume;