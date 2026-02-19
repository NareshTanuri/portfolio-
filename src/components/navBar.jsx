import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Featured projects", id: "projects" },
  { label: "About me", id: "about" },
  { label: "Contact me", id: "contact" },
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [active, setActive] = useState("home");
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
    handleCloseMenu();
  };

  const handleChange = (id) => {
    setActive(id);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    handleCloseMenu();
  };


  return (
    <AppBar position="fixed" sx={{ background: "black" }}>
      <Toolbar sx={{ position: "relative" }}>

        {/* Left - Logo */}
        <Typography variant="h6" fontWeight="bold">
          Naresh<span style={{ color: "#14f1d9" }}>.</span>
        </Typography>

        {/* Center - Desktop Nav */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: { xs: "none", md: "flex" },
            gap: 3,
          }}
        >
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <Typography
                key={item.id}
                onClick={() => handleScroll(item.id)}
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "0.95rem",
                  transition: "all 0.3s ease",
                  backgroundColor: isActive
                    ? "rgba(20,241,217,0.15)"
                    : "transparent",
                  color: isActive ? "#14f1d9" : "text.secondary",
                  "&:hover": {
                    backgroundColor: "rgba(20,241,217,0.15)",
                    color: "#14f1d9",
                  },
                }}
              >
                {item.label}
              </Typography>
            )
          })}
        </Box>

        {/* Right - Desktop Button */}
        <Box sx={{ ml: "auto", display: { xs: "none", md: "block" } }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#14f1d9",
              color: "#000",
              fontWeight: 600,
              "&:hover": { backgroundColor: "#12d7c0" },
            }}
          >
            View Resume
          </Button>
        </Box>

        {/* Mobile - 3 Dots */}
        <IconButton
          sx={{ ml: "auto", display: { xs: "block", md: "none" }, color: "#14f1d9" }}
          onClick={handleOpenMenu}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          {navItems.map((item) => (
            <MenuItem key={item.id} onClick={() => { handleChange(item.id); handleScroll(item.id) }}>
              {item.label}
            </MenuItem>
          ))}
          <MenuItem>
            <Button fullWidth variant="contained">
              View Resume
            </Button>
          </MenuItem>
        </Menu>

      </Toolbar>
    </AppBar>
  );
}