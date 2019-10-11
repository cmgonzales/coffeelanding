import React from "react";
import Api from "../api/api";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "../Card/cards";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(11),
        margin: 'auto',
        maxWidth: 600,
      },
     
    }));
    
const Process = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {Api.map(({ pic, name, desc }) => (
          <>
            <Grid item md>
              <Paper className={classes.paper}>
                <Card imge={pic} name={name} desc={desc} />
              </Paper>
            </Grid>
          </>
        ))}
      </Grid>
    </div>
  );
};

export default Process;
