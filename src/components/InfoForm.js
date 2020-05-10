import React from 'react';
import {
  Grid,
  Box,
} from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  box: {
    height: "100%",
    width: "100%"
  },
  container: {
    height: "400px"
  },
  innerContainer: {
    height: "100%"
  },
  item: {
    flex: 1
  }
});


const InfoForm = () => {
  const classes = useStyles();
  return (
      <Grid spacing={4} className={classes.container} container>
        <Grid xs={4} item>
          <Grid
              spacing={4}
              direction="column"
              className={classes.container}
              container
          >
            <Grid className={classes.item} item>
             Most of the carbon footprint emissions for the average U.S. household come from "indirect" sources, for example, fuel burned to produce goods far away from the final consume.
              <Box className={classes.box}/>
            </Grid>
            <Grid className={classes.item} item>
              <a target="_blank" href="https://en.wikipedia.org/wiki/Carbon_footprint">Wiki</a><br/>
              <a target="_blank" href="https://www.footprintnetwork.org/our-work/climate-change/">Climate change</a><br/>
              <a target="_blank" href="https://compensate.com/start-test">Test</a><br/>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={8} item>
          A carbon footprint is historically defined as the total greenhouse gas (GHG) emissions caused by an individual, event, organization, or product, expressed as carbon dioxide equivalent. Greenhouse gases, including the carbon-containing gases carbon dioxide and methane, can be emitted through the burning of fossil fuels, land clearance and the production and consumption of food, manufactured goods, materials, wood, roads, buildings, transportation and other services.
          <Box className={classes.box}/>
        </Grid>
      </Grid>
  );
};
export default InfoForm;