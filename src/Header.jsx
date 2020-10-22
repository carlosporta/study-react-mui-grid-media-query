import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Switch from "@material-ui/core/Switch";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <AppBar color="secondary" position="static">
      <Toolbar>
        <Typography style={{ flexGrow: 1 }}>Carlos Porta</Typography>
        Dark Mode
        <Switch checked={darkMode} onChange={setDarkMode} color="primary" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
