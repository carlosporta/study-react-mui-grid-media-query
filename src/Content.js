import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import CoffeCard from "./CoffeCard";

import coffeMakerList from "./constants";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px 5px",
    [theme.breakpoints.up("md")]: {
      padding: "10px 20px"
    },
    [theme.breakpoints.up("lg")]: {
      padding: "10px 40px"
    },
    [theme.breakpoints.up("xl")]: {
      padding: "10px 60px"
    }
  }
}));

const Content = () => {
  const classes = useStyles();

  const getCoffeMakerCard = (coffeMakerObject) => {
    return (
      <Grid
        item
        xs={12}
        sm={4}
        className={classes.root}
        key={coffeMakerObject.title}
      >
        <CoffeCard {...coffeMakerObject} />
      </Grid>
    );
  };

  return <>{coffeMakerList.map(getCoffeMakerCard)}</>;
};

export default Content;
