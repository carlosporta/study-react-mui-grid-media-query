import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import { makeStyles } from "@material-ui/core";

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
    <Card>
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
      <CardContent>
        <CardMedia
          style={{ height: 0, paddingTop: "56.25%" }}
          image={imageUrl}
        />
        <Typography variant="body2" component="p" className={classes.root}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="secondary" size="small">
          BUY
        </Button>
        <Button color="secondary" size="small">
          OFFER
        </Button>
      </CardActions>
    </Card>
  );
}
