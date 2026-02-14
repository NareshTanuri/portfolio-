import {
  Box,
  Typography,
  IconButton,
  Stack,
  Container,
} from "@mui/material";

import {
  GitHub,
  LinkedIn,
  Facebook,
  YouTube,
} from "@mui/icons-material";

import { useEffect, useState } from "react";

export default function MyHomePage() {

  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Database Developer",
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 1000); // 1 second

    return () => clearInterval(interval);
  }, []);

  const careerStartYear = 2023; // change this once
  const currentYear = new Date().getFullYear();
  const totalExperience = currentYear - careerStartYear;

  return (
    <Container fluid>
      <Box
        id="home"
        sx={{
          minHeight: "100vh",
          background:
            "radial-gradient(circle at top, rgba(20,241,217,0.15), transparent 40%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Box>
          <Typography variant="h4" color="text.secondary">
            Hi, I am
          </Typography>

          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ color: "primary.main", mt: 1 }}
          >
            Naresh Tanuri
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto", mt: 2 }}
          >
            I have over{" "}
            <span style={{ color: "#14f1d9" }}>{`${totalExperience}`} years</span>{" "}
            of experience as a{" "}
            <span style={{ color: "#14f1d9" }}>{roles[currentRole]}</span>,{" "}
            with a strong focus on building modern, scalable, and user-friendly web
            applications using React and MUI.
          </Typography>

          {/* Social Icons */}
          <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
            {[
              { value: 1, label: "GitHub", icon: GitHub, url: "https://github.com/NareshTanuri" },
              { value: 2, label: "YouTube", icon: YouTube, url: "https://www.youtube.com/channel/UC1GkOlrcnsICGbgNk6AabnA" },
              { value: 3, label: "LinkedIn", icon: LinkedIn, url: "https://www.linkedin.com/in/naresh-tanuri-320295257/" },
              { value: 4, label: "Facebook", icon: Facebook, url: "https://www.facebook.com/naresh.tanuri?mibextid=ZbWKwL" },
            ].map((item, i) => {
              const IconComponent = item.icon;

              return (
                <IconButton
                  key={item.value}
                  component="a"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "white",
                    "&:hover": {
                      background: "primary.main",
                      color: "#000",
                    },
                  }}
                >
                  <IconComponent />
                </IconButton>
              );
            })}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
