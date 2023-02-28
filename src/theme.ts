import { Roboto } from "@next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#00683f",
      light: "#00683f",
      dark: "#00683f",
    },
    secondary: {
      main: "#00683f",
      light: "#00683f",
      dark: "#00683f",
    },
    background: {
      default: "#f1ecec",
      paper: "#00683f",
    },
    text: {
      primary: "#121212",
      secondary: "rgba(94,86,86,0.7)",
      disabled: "rgba(103,95,95,0.5)",
    },
    success: {
      main: "#00683f",
      light: "#00683f",
      dark: "#00683f",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default responsiveFontSizes(theme);
