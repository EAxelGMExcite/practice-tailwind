import Nav from "../nav-footer/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import tailwindConfig from "../../../tailwind.config";
//import "../../globals.css";
const theme = createTheme({
  palette: {
    primary: {
      main: tailwindConfig.theme.extend.colors.primary,
      contrastText: "#fff",
    },
    secondary: {
      main: tailwindConfig.theme.extend.colors.secondary,
      contrastText: "#fff",
    },
  },
  /* typography: {
    fontFamily: "Montserrat, sans-serif",
    button: {
      textTransform: "none",
    },
  }, */
});

const Index = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <Nav />
      </header>

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 p-3">
          {children}
        </div>
      </main>
    </ThemeProvider>
  );
};

export default Index;
