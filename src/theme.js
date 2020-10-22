import { createMuiTheme } from "@material-ui/core/styles";

const createTheme = (darkMode) =>
  createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  });

export default createTheme;
