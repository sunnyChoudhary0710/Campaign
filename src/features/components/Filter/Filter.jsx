import React from "react";
import { Grid, Box } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import moment from "moment";

const Filter = () => {
  let currentDate = new Date();

  return (
    <div className="element-container">
      <form className="filter-date-container" noValidate autoComplete="off">
        <div>
        <TextField
          id="date"
          label="Start Date"
          type="date"
          defaultValue={moment(currentDate).format("YYYY-MM-DD")}
          InputLabelProps={{
            shrink: true,
          }}
          className="basic-form-element-margin"
        />
        <TextField
          id="date"
          label="End Date"
          type="date"
          defaultValue={moment(currentDate).format("YYYY-MM-DD")}
          InputLabelProps={{
            shrink: true,
          }}
          className="basic-form-element-margin"
        />
        </div>
        <div>
        <TextField id="outlined-basic" label="Search" />
        </div>
      </form>
    </div>
  );
};

export default Filter;
