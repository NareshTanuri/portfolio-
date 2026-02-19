import {
  Box,
  Container,
  Typography,
  Grid,
  Button
} from "@mui/material";

import HtmlIcon from "@mui/icons-material/Html";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CssIcon from "@mui/icons-material/Css";
import ReactSvgIcon from "./ReactSvgIcon";
import myImage from "../../assets/Naresh.jpeg"
import myResume from "../../assets/_NareshExprienceReusme.pdf";

export default function About() {

  const skills = [
    { label: "HTML5", shape: "circle" },
    { label: "JS", shape: "rect" },
    { label: "CSS3", shape: "circle" },
    { label: "REACT", shape: "pill" },
    { label: "MATERIAL UI", shape: "rect" },
    { label: "UI DESIGN", shape: "pill" },
    { label: "NODE JS", shape: "rect" },
    { label: "GRAPHQL", shape: "pill" },
    { label: "SQL", shape: "circle" },
  ];

  const careerStartYear = 2023; // change this once
  const currentYear = new Date().getFullYear();
  const totalExperience = currentYear - careerStartYear;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = myResume;
    link.download = "Naresh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container maxWidth="lg">
      <Box
        id="about"
      >
        <Box textAlign="center" mb={5}>
          <Typography variant="overline" sx={{ color: "text.secondary" }}>
            MY BIO
          </Typography>
          <Typography variant="h4" fontWeight="bold">
            About <span style={{ color: "#14f1d9" }}>Me.</span>
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="center">
          {/* LEFT – Image with floating icons */}
          <Grid item size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: "relative",
                width: { xs: 240, sm: 280, md: 320 },
                height: { xs: 240, sm: 280, md: 320 },
                mx: "auto",
                borderRadius: "50%",
                border: "2px solid #14f1d9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {/* Portrait */}
              <Box
                component="img"
                src={myImage}
                alt="Profile"
                sx={{
                  width: "85%",
                  height: "85%",
                  borderRadius: "50%",
                  objectFit: "cover"
                }}
              />

              {/* Floating Icons */}
              <FloatingIcon top="10%" left="50%">
                <JavascriptIcon />
              </FloatingIcon>

              <FloatingIcon top="50%" right="-10%">
                <CssIcon />
              </FloatingIcon>

              <FloatingIcon bottom="10%" left="50%">
                <ReactSvgIcon />
              </FloatingIcon>

              <FloatingIcon top="50%" left="-10%">
                <HtmlIcon />
              </FloatingIcon>
            </Box>
          </Grid>

          {/* RIGHT – Text */}
          <Grid item size={{ xs: 12, md: 7 }}>
            <Typography color="text.secondary" lineHeight={1.8} mb={3}>
              Highly motivated and skilled Front-End Developer with {`${totalExperience}`} years of experience in
              building robust, user-friendly web applications. Currently working at
              <strong> Mylearning Plus Pvt Ltd </strong> as a Front-End Developer in Hyderabad
              (May 2023 – Present).

              <br /><br />

              I specialize in developing scalable, high-performance applications using
              React.js and Next.js, with a strong focus on responsiveness, performance
              optimization, and clean UI/UX. I have hands-on experience designing reusable UI
              components, collaborating with backend teams to integrate RESTful APIs, and
              implementing secure authentication and authorization using JWT.

              <br /><br />

              I have contributed to building dynamic admin dashboards that allow clients to
              manage services and resources efficiently. My work includes improving
              application performance through lazy loading, memoization, and code-splitting,
              as well as debugging and resolving critical performance issues to ensure smooth
              and reliable user experiences across platforms.
            </Typography>


            <Button
              variant="contained"
              sx={{
                backgroundColor: "#14f1d9",
                color: "#000",
                textTransform: "none"
              }}
              onClick={handleDownload}
            >
              View Resume
            </Button>
          </Grid>
        </Grid>


        <Box sx={{ py: 8 }}>
          <Grid container spacing={6} alignItems="center">

            {/* LEFT CONTENT */}
            <Grid item size={{ xs: 12, md: 7 }}>
              <Typography
                variant="overline"
                sx={{ color: "text.secondary", letterSpacing: 1 }}
              >
                SKILLS
              </Typography>

              <Typography variant="h5" fontWeight="bold" mb={2}>
                Technical <span style={{ color: "#14f1d9" }}>skills.</span>
              </Typography>

              <Typography color="text.secondary" lineHeight={1.8}>
                Experienced in building responsive and high-performance web
                applications using modern front-end technologies. Focused on clean
                UI design, scalability, and optimal user experience.
              </Typography>
            </Grid>

            {/* RIGHT SKILLS */}
            <Grid item size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 3,
                  justifyItems: "center"
                }}
              >
                {skills.map((skill, index) => (
                  <SkillPill key={index} skill={skill} />
                ))}
              </Box>
            </Grid>

          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

/* Floating icon component */
function FloatingIcon({ children, ...pos }) {
  return (
    <Box
      sx={{
        position: "absolute",
        ...pos,
        width: 44,
        height: 44,
        borderRadius: "50%",
        backgroundColor: "#0f1f1c",
        border: "2px solid #14f1d9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#14f1d9",
        transform: "translate(-50%, -50%)",
        boxShadow: "0 0 12px rgba(20,241,217,0.6)"
      }}
    >
      {children}
    </Box>
  );
}


function SkillPill({ skill }) {
  const baseStyle = {
    color: "#fff",
    border: "1.5px solid #14f1d9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: { xs: 11, sm: 12, md: 14 }, // ✅ Responsive font
    letterSpacing: 0.5,
    textAlign: "center",
    transition: "all 0.3s ease",
    cursor: "default",
    "&:hover": {
      backgroundColor: "rgba(20,241,217,0.1)",
      transform: "translateY(-3px)"
    }
  };

  const shapes = {
    circle: {
      width: { xs: 60, md: 70 },
      height: { xs: 60, md: 70 },
      borderRadius: "50%"
    },
    rect: {
      width: { xs: 60, md: 70 },
      height: { xs: 60, md: 70 },
      borderRadius: "12px"
    },
    pill: {
      width: { xs: 60, md: 70 },
      height: { xs: 60, md: 70 },
      borderRadius: "30px"
    }
  };

  return (
    <Box sx={{ ...baseStyle, ...shapes[skill.shape] }}>
      {skill.label}
    </Box>
  );
}