import {
    Box,
    Typography,
    Grid,
    Divider,
    IconButton,
    Stack,
} from "@mui/material";
import {
    GitHub,
    LinkedIn,
    Facebook,
    YouTube,
} from "@mui/icons-material";


const Footer = () => {
    const navItems = [
        { label: "Home", id: "home" },
        { label: "My projects", id: "projects" },
        { label: "About me", id: "about" },
        { label: "Contact me", id: "contact" },
    ];

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <Box component="footer">
            {/* Main Footer */}
            <Box
                sx={{
                    background: "#000",
                    color: "#fff",
                    px: { xs: 3, md: 10 },
                    py: 6,
                    cursor: "pointer"
                }}
            >
                <Grid container spacing={4} alignItems="center">
                    {/* Left */}
                    <Grid item size={{ xs: 12, md: 4 }}>
                        <Typography variant="h6" fontWeight={600}>
                            Naresh Tanuri.
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.7, mt: 1 }}>
                            Web Developer <br />
                            Frontend Developer
                        </Typography>
                    </Grid>

                    {/* Divider */}
                    <Grid item md={1} sx={{ display: { xs: "none", md: "block" } }}>
                        <Divider
                            orientation="vertical"
                            sx={{ backgroundColor: "#444", height: 80, mx: "auto" }}
                        />
                    </Grid>

                    {/* Middle */}
                    <Grid item size={{ xs: 12, md: 3 }}>
                        <Stack spacing={1}>
                            {
                                navItems.map((item) => (
                                    <Typography variant="body2" key={item.id}
                                        onClick={() => handleScroll(item.id)}>{item.label}</Typography>
                                ))
                            }
                        </Stack>
                    </Grid>

                    {/* Divider */}
                    <Grid item md={1} sx={{ display: { xs: "none", md: "block" } }}>
                        <Divider
                            orientation="vertical"
                            sx={{ backgroundColor: "#444", height: 80, mx: "auto" }}
                        />
                    </Grid>

                    {/* Right */}
                    <Grid item size={{ xs: 12, md: 3 }}>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            Social Media Handles
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            {
                                [
                                    { value: 1, label: "GitHub", icon: GitHub, url: "https://github.com/NareshTanuri" },
                                    { value: 2, label: "YouTube", icon: YouTube, url: "https://www.youtube.com/channel/UC1GkOlrcnsICGbgNk6AabnA" },
                                    { value: 3, label: "LinkedIn", icon: LinkedIn, url: "https://www.linkedin.com/in/naresh-tanuri-320295257/" },
                                    { value: 4, label: "Facebook", icon: Facebook, url: "https://www.facebook.com/naresh.tanuri?mibextid=ZbWKwL" },
                                ].map((item, i) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <IconButton sx={{ color: "#fff" }} component="a"
                                            href={item.url}
                                            target="_blank" rel="noopener noreferrer">
                                            <IconComponent />
                                        </IconButton>
                                    );
                                })
                            }
                        </Stack>
                    </Grid>
                </Grid>
            </Box>

            {/* Bottom Bar */}
            <Box
                sx={{
                     background: "#000",
                    py: 1.5,
                    textAlign: "center",
                    borderTop: "1px solid #222",
                }}
            >
                <Typography variant="caption" sx={{ color: "#aaa" }}>
                    Developed by me. Designed by{" "}
                    <span style={{ color: "#00e0c6" }}> Naresh Tanuri</span>
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
