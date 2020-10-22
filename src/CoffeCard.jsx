import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import {
  Avatar,
  Button,
  IconButton,
  makeStyles,
  Typography
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "10px",
    [theme.breakpoints.up("sm")]: {
      minHeight: 70
    },
    [theme.breakpoints.up("md")]: {
      minHeight: 50
    }
  }
}));

export default function CoffeCard({
  avatarUrl,
  title,
  price,
  description,
  imageUrl
}) {
  const classes = useStyles();
  return (
    <Card style={{}}>
      <CardHeader
        style={{ alignItems: "end", height: "100px" }}
        title={title}
        subheader={price}
        avatar={<Avatar src={avatarUrl} />}
        action={
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        }
      />
      <CardContent style={{}}>
        <CardMedia
          style={{ height: 0, paddingTop: "56.25%" }}
          image={imageUrl}
        />
        <Typography variant="body2" component="p" className={classes.root}>
          {description}
        </Typography>
      </CardContent>
      <CardActions style={{}}>
        <Button color="secondary" size="small" style={{}}>
          BUY
        </Button>
        <Button color="secondary" size="small">
          OFFER
        </Button>
      </CardActions>
    </Card>
  );
}
