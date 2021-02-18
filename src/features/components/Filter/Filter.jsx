import React from "react";
import moment from "moment";

const Filter = (props) => {
  let currentDate = new Date();
  const [formData, updateFormDate] = React.useState(
    props.formDate || { startDate: null, endDate: null, userName: "" }
  );

  const handleOnChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    updateFormDate((state) => ({ ...state, [name]: value }));
  };

  const handleSearch = (event) => {
    event.preventDefault();
    props.triggerSearchByName(formData);
  };

  return (
    <div className="element-container">
      <form className="filter-date-container" noValidate autoComplete="off">
        <div>
          <input
            id="date"
            label="Start Date"
            type="date"
            name="startDate"
            onChange={handleOnChange}
            defaultValue={
              props.startDate
                ? moment(props.startDate).format("YYYY-MM-DD")
                : null
            }
            className="basic-form-element-margin"
          />
          <input
            id="date"
            label="End Date"
            type="date"
            name="endDate"
            onChange={handleOnChange}
            defaultValue={
              props.endDate ? moment(props.endDate).format("YYYY-MM-DD") : null
            }
            className="basic-form-element-margin"
          />
        </div>
        <div>
          <input
            id="outlined-basic"
            label="Search"
            name="userName"
            placeholder="Search by user name"
            onChange={handleOnChange}
            value={props.searchKey}
          />
        </div>
        <div>
          <button
            id="outlined-basic"
            placeholder="Search by user name"
            onClick={handleSearch}
            value={props.searchKey}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
