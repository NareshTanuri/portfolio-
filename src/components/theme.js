import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#14f1d9", // teal accent
    },
    background: {
      default: "#0b0b0b",
      paper: "#111",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bdbdbd",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});
