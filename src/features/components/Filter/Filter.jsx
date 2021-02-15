import React from "react";
import { Grid, Box } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import moment from 'moment';

const Filter = () => {

  let currentDate = new Date();

  return (
    <div className="element-container">
      <Grid container spacing={6}>
        <Grid container item xs={6} spacing={3}>
          <form className="filter-date-container" noValidate autoComplete="off">
            <TextField
              id="date"
              label="Start Date"
              type="date"
              defaultValue={moment(currentDate).format("YYYY-MM-DD")}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="date"
              label="End Date"
              type="date"
              defaultValue="2017-05-24"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </Grid>
        <Grid container item xs={4} spacing={3}>
          <form
            className="filter-search-container "
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Filter;
