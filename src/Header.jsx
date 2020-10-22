import React, { useState } from "react";

import { AppBar, Switch, Toolbar, Typography } from "@material-ui/core";

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
