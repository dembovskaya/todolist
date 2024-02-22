import { createTheme, keyframes } from "@mui/material";
export const theme = createTheme({
  palette: {
    // @ts-ignore
    type: "dark",
    primary: {
      main: "#F5F5F5",
      contrastText: `linear-gradient(90deg, rgba(230,63,9,1) 0%, rgba(255,108,16,1) 35%, rgba(255,168,33,1) 65%, rgba(205,174,126,1) 100%);`,
    },
    secondary: {
      main: "#D89F46",
    },
    background: {
      default: "#F5F5F5",
      paper: "#F5F5F5",
    },
    text: {
      primary: "#F5F5F5",
      secondary: "#A6A6A6",
    },
    divider: "#A6A6A6",
  },
});

theme.typography.h1 = {
  fontSize: "80px",
  fontWeight: "400",
  lineHeight: "84px",
  cursor: "pointer",
  fontFamily: "Raleway",
  transition: "color 0.3s ease, transform 0.3s ease",
  width: "max-content",
  "&:hover": {
    backgroundClip: "text",
    backgroundImage: theme.palette.primary.contrastText,
    "-webkit-text-fill-color": "transparent",
    "-webkit-background-clip": "text",
    transform: "translateX(5px)",
  },
};

const animation = keyframes`
from {
  background-position: 100%;
}
to {
  background-position: -100%;
}`;

theme.typography.h2 = {
  fontSize: "30px",
  lineHeight: "56px",
  fontFamily: "Raleway",
  "-webkit-background-clip": "text",
  backgroundClip: "text",
  backgroundImage:
    "linear-gradient(90deg, rgba(230,63,9,1) 10%, rgba(255,108,16,1) 25%, rgba(255,168,33,1) 40%, rgba(255,168,33,1) 60%, rgba(255,108,16,1) 75%, rgba(230,63,9,1) 90%);",
  backgroundSize: "200%",
  backgroundPosition: "0%",
  animation: `${animation} 2s infinite ease`,
  color: "transparent",
};

theme.typography.h3 = {
  fontSize: "40px",
  lineHeight: "48px",
  fontFamily: "Raleway",
};

theme.typography.h4 = {
  fontSize: "32px",
  lineHeight: "40px",
  fontFamily: "Raleway",
};

theme.typography.h5 = {
  fontSize: "20px",
  lineHeight: "27px",
  fontFamily: "Raleway",
};

theme.typography.h6 = {
  fontSize: "20px",
  lineHeight: "32px",
  fontFamily: "Raleway",
};

theme.typography.subtitle1 = {
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "30px",
  fontFamily: "Montserrat",
};

theme.typography.subtitle2 = {
  fontSize: "16px",
  lineHeight: "26px",
  fontFamily: "Raleway",
};
