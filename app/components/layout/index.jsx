import Nav from "../nav-footer/Nav";
import Footer from "../nav-footer/Footer";
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

const navigation = [
  /* { name: "Inicio", href: "/", id: "1" }, */
  { name: "Playas", href: "/playas", id: "2" },
  { name: "Pueblos Mágicos", href: "/pueblos-magicos", id: "3" },
  { name: "Ecoturismo", href: "/ecoturismo", id: "4" },
  { name: "USA", href: "/usa", id: "4" },
  { name: "Mundo", href: "/mundo", id: "4" },
  { name: "Servicios", href: "/servicios", id: "4" },
  { name: "Estados", href: "/estados", id: "4" },
  { name: "Videos", href: "/video", id: "4" },
  /* { name: "En Vivo", href: "/en-vivo", id: "4" }, */
];

const Index = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <Nav navigation={navigation} />
      </header>

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 p-3">{children}</div>
      </main>

      <footer>
        <Footer navigation={navigation} />
      </footer>
    </ThemeProvider>
  );
};

export default Index;
