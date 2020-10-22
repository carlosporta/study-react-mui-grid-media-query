import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header";
import Content from "./Content";
import createTheme from "./theme";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {
      padding: "10px 40px"
    },
    [theme.breakpoints.up("lg")]: {
      padding: "10px 120px"
    },
    [theme.breakpoints.up("xl")]: {
      padding: "10px 200px"
    }
  }
}));

export default function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme(darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Grid container direction="column">
        <Grid item xs={12}>
          <Header
            darkMode={darkMode}
            setDarkMode={() => setDarkMode(!darkMode)}
          />
        </Grid>
        <Grid container item xs={12} className={classes.root}>
          <Content />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
