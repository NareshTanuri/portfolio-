import { Box, Typography, Grid, Card, Container, CardMedia, CardContent, CardActions, Button, } from "@mui/material";
import { useState } from "react";
import kgnCelling from "../../assets/kgnCeilling.png";
import c3crmLogo from "../../assets/crm_logo.png";
import rizeeLogo from "../../assets/logo-blue.png";

const services = [
    {
        id: 1,
        title: "Frontend Development",
        desc: "Building responsive and dynamic user interfaces using React.js, Next.js, HTML5, CSS3, JavaScript, and frameworks like Tailwind CSS and Bootstrap. Focused on delivering user-friendly digital experiences.",
        icon: "💻",
    },
    {
        id: 2,
        title: "Backend & Database",
        desc: "Developing robust server-side applications using Node.js, Express.js, and GraphQL. Skilled in SQL, MySQL, and designing efficient database schemas for reliable data management.",
        icon: "🛠️",
    },
    {
        id: 3,
        title: "Design, Content & Tools",
        desc: "Creating user-centric designs, engaging content, and maintaining version control with Git. Experienced with UI/UX, prototyping, documentation, and tools like GitHub and project management software.",
        icon: "🎨",
    },
];


export default function Projects() {
    const [activeService, setActiveService] = useState(1);

    return (
        <Container fluid>
            <Box
                id="projects"
            >
                <Box textAlign="center" mb={5}>
                    <Typography variant="overline" sx={{ color: "text.secondary" }}>
                        SERVICES
                    </Typography>
                    <Typography variant="h4" fontWeight="bold">
                        What <span style={{ color: "#14f1d9" }}>I do.</span>
                    </Typography>
                </Box>

                <Grid container spacing={4} justifyContent="center" alignItems="stretch" mb={10}>
                    {services.map((service) => (
                        <Grid item size={{ xs: 12, md: 4 }} key={service.id} sx={{ display: "flex" }}>
                            <Card
                                onClick={() => setActiveService(service.id)}
                                sx={{
                                    flex: 1, // make it fill the parent Grid item
                                    p: 4,
                                    borderRadius: 3,
                                    cursor: "pointer",
                                    backgroundColor:
                                        activeService === service.id ? "#14f1d9" : "#111",
                                    color: activeService === service.id ? "#000" : "#fff",
                                    border: "2px solid rgba(20,241,217,0.2)",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform: "scale(1.03)",
                                        boxShadow:
                                            "0 0 20px 3px rgba(20,241,217,0.6), 0 10px 30px rgba(0,0,0,0.5)",
                                        borderColor: "#14f1d9",
                                    },
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between", // makes content spread evenly
                                    minHeight: 250, // optional: enforce minimum height
                                }}
                            >
                                <Box>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            position: "absolute",
                                            top: 16,
                                            right: 16,
                                            opacity: 0.1,
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {service.id.toString().padStart(2, "0")}
                                    </Typography>
                                    <Typography variant="h5" fontWeight="bold" mb={2}>
                                        {service.icon} {service.title}
                                    </Typography>
                                    <Typography variant="body2" lineHeight={1.6}>
                                        {service.desc}
                                    </Typography>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>


                <Box textAlign="center" mb={5}>
                    <Typography variant="overline" sx={{ color: "text.secondary" }}>
                        PORTFOLIO
                    </Typography>
                    <Typography variant="h4" fontWeight="bold">
                        Featured <span style={{ color: "#14f1d9" }}>projects.</span>
                    </Typography>
                </Box>

                <Grid container spacing={4} justifyContent="center" alignItems="stretch" mb={10}>
                    {[
                        {
                            id: 1,
                            name: "KGN Ceiling – Nandigama",
                            link: "https://kgncellings.netlify.app/",
                            image: kgnCelling,
                            shortDesc: "Business website for a false ceiling service provider with admin panel.",
                        },
                        {
                            id: 2,
                            name: "Rizee Educational Platform",
                            link: "https://rizee.in",
                            image: rizeeLogo,
                            shortDesc: "Educational platform for students and colleges with dashboards and analytics.",
                        },
                        {
                            id: 3,
                            name: "C3CRM",
                            link: "https://user.c3crm.in",
                            image: c3crmLogo,
                            shortDesc: "CRM platform with WhatsApp automation, campaigns, and appointment booking.",
                        },
                    ].map((project) => (
                        <Grid item size={{ xs: 12, md: 4 }} key={project.id} sx={{ display: "flex" }}>
                            <Card
                                sx={{
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    borderRadius: 3,
                                    cursor: "pointer",
                                    backgroundColor: "#111",
                                    color: "#fff",
                                    border: "2px solid rgba(20,241,217,0.2)",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform: "scale(1.03)",
                                        borderColor: "#14f1d9",
                                    },
                                }}
                            >
                                {/* Image */}
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={project.image}
                                    alt={project.name}
                                    sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                                />

                                {/* Content */}
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" fontWeight="bold" mb={1}>
                                        {project.name}
                                    </Typography>
                                    <Typography variant="body2" lineHeight={1.6}>
                                        {project.shortDesc}
                                    </Typography>
                                </CardContent>

                                {/* Action */}
                                <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        color="primary"
                                        href={project.link}
                                        target="_blank"
                                        sx={{ backgroundColor: "#14f1d9", color: "#000" }}
                                    >
                                        View Project
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            </Box>
        </Container>
    );
}
