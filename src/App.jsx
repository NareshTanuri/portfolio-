import Navbar from "./components/navBar";
import HomePage from "./features/Home/HomePage";
import About from "./features/About/about";
import Projects from "./features/Projects/projects"
import ContactInfo from "./features/Contact/contact";
import { Box } from "@mui/material";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Navbar />

      <Box sx={{ backgroundColor: "black", color: "white", pt: 10 }}>
        <HomePage />
      </Box>

      <Box sx={{ backgroundColor: "#131313", color: "white", pt: 5, pb: 5 }}>
        <Projects />
      </Box>

      <Box sx={{ backgroundColor: "black", color: "white", pt: 3, pb: 3 }}>
        <About />
      </Box>

      <Box sx={{ backgroundColor: "#131313", color: "white", pt: 10 }}>
        <ContactInfo />
      </Box>

      <Footer />
      <ScrollToTop />
    </>
  );
}
