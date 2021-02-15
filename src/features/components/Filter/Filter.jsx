import React from "react";
import {Grid, Box} from "@material-ui/core";
import { TextField } from "@material-ui/core";

const Filter = () => {
  return (

    <div className="element-container">
    <Grid container spacing={6}>
      <Grid container item xs={8} spacing={3}>
        <form className="filter-date-container" noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
      </Grid>
      <Grid container item xs={4} spacing={3}>
        <form className="filter-search-container " noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
      </Grid>
    </Grid>
    </div>
  );
};

export default Filter;
