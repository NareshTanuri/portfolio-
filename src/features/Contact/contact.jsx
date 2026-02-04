import {
    Box,
    Typography,
    Grid,
    TextField,
    Button,
    Container,
    Divider
} from "@mui/material";

export default function ContactInfo() {
    return (
        <Container maxWidth="lg">
            <Box
                id="contact"
                sx={{
                    minHeight: "100vh",
                    py: 10,
                    color: "#fff"
                }}
            >
                {/* Header */}
                <Box textAlign="center" mb={6}>
                    <Typography variant="overline" color="text.secondary">
                        GET IN TOUCH
                    </Typography>
                    <Typography variant="h4" fontWeight="bold">
                        Contact <span style={{ color: "#14f1d9" }}>me.</span>
                    </Typography>
                    <Typography
                        color="text.secondary"
                        maxWidth={500}
                        mx="auto"
                        mt={2}
                    >
                        I am currently open to full-time, contract or part-time
                        opportunities in Front End Development.
                    </Typography>
                </Box>

                {/* Card */}
                <Box
                    sx={{
                        backgroundColor: "#141414",
                        borderRadius: "16px",
                        p: { xs: 3, md: 5 }
                    }}
                >
                    <Grid container spacing={5}>
                        {/* Left Info */}
                        <Grid item size={{ xs: 12, md: 5 }}>
                            <Typography variant="h6" fontWeight="bold" mb={1}>
                                Have an awesome project idea?
                            </Typography>
                            <Typography
                                sx={{ color: "#14f1d9", fontWeight: 600, mb: 4 }}
                            >
                                Let’s Discuss.
                            </Typography>

                            <Typography color="text.secondary" mb={2}>
                                📞 +91 93470 81115
                            </Typography>
                            <Typography color="text.secondary" mb={2}>
                                📧 nareshtanuri1418@gmail.com
                            </Typography>
                            <Typography color="text.secondary">
                                📍 Hyderabad, India
                            </Typography>
                        </Grid>

                        {/* Divider */}
                        <Grid item xs={12} md={1}>
                            <Divider
                                orientation="vertical"
                                sx={{
                                    display: { xs: "none", md: "block" },
                                    height: "100%",
                                    borderColor: "#222"
                                }}
                            />
                        </Grid>

                        {/* Right Form */}
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Box component="form" noValidate>
                                <TextField
                                    fullWidth
                                    label="Full Name"
                                    placeholder="Enter name"
                                    margin="normal"
                                    InputLabelProps={{ style: { color: "#aaa" } }}
                                    sx={inputStyle}
                                />

                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    placeholder="Enter email"
                                    margin="normal"
                                    InputLabelProps={{ style: { color: "#aaa" } }}
                                    sx={inputStyle}
                                />

                                <TextField
                                    fullWidth
                                    label="Message"
                                    placeholder="Enter message"
                                    multiline
                                    rows={4}
                                    margin="normal"
                                    InputLabelProps={{ style: { color: "#aaa" } }}
                                    sx={inputStyle}
                                />

                                <Button
                                    variant="contained"
                                    sx={{
                                        mt: 3,
                                        px: 4,
                                        py: 1.2,
                                        backgroundColor: "#14f1d9",
                                        color: "#000",
                                        fontWeight: 600,
                                        textTransform: "none",
                                        "&:hover": {
                                            backgroundColor: "#11cbb6"
                                        }
                                    }}
                                >
                                    Send Message
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

/* Input Styles */
const inputStyle = {
    "& .MuiOutlinedInput-root": {
        backgroundColor: "#1b1b1b",
        borderRadius: "10px",
        color: "#fff",
        "& fieldset": {
            borderColor: "#333"
        },
        "&:hover fieldset": {
            borderColor: "#14f1d9"
        },
        "&.Mui-focused fieldset": {
            borderColor: "#14f1d9"
        }
    }
};
