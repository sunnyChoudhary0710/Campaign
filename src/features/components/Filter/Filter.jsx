import React from "react";
import { TextField } from "@material-ui/core";
import moment from "moment";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { handleSearchBy } from "../../../app/actions";
import { connect } from "react-redux";

const Filter = (props) => {
  let currentDate = new Date();

  const handleSearchBy = (value) => {
    props.handleSearchBy(value);
  };

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
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.searchBy}
            onChange={handleSearchBy}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <TextField
            id="outlined-basic"
            label="Search"
            value={props.searchKey}
          />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  searchBy: state.filterForm,
});
const mapDispatchToProps = { handleSearchBy };
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
