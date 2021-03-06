import React, { useEffect, useState } from "react";
import moment from "moment";
import { CAMPAIGN_ENUMS } from "../common/Enums";

const Filter = (props) => {
  const [formData, updateFormDate] = useState(
    props.formDate || { startDate: null, endDate: null, userName: "" }
  );
  const [validDateRange, updateValidDateRange] = useState({
    startDate: {
      min: null,
      max: null,
    },
    endDate: {
      min: null,
      max: null,
    },
  });

  useEffect(() => {
    props.triggerSearch(formData, CAMPAIGN_ENUMS.DATE);
  }, [formData.startDate, formData.endDate]);

  const handleOnChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let type = event.target.type;
    if (type === CAMPAIGN_ENUMS.DATE) {
      validateDataEntered(event);
    }
    updateFormDate((state) => ({ ...state, [name]: value }));
  };

  const validateDataEntered = (event) => {
    let type = event.target.type;
    let name = event.target.name;
    let value = event.target.value;
    if (Boolean(value)) {
      if (type === CAMPAIGN_ENUMS.DATE) {
        setMinMaxValue(name, value);
      }
    }
  };

  const setMinMaxValue = (name, value) => {
    if (name === CAMPAIGN_ENUMS.START_DATE) {
      updateValidDateRange((state) => ({
        ...state,
        endDate: {
          min: value,
          max: null,
        },
      }));
    } else {
      updateValidDateRange((state) => ({
        ...state,
        startDate: {
          min: null,
          max: value,
        },
      }));
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    props.triggerSearch(formData, CAMPAIGN_ENUMS.NAME);
  };

  return (
    <div className="element-container">
      <form className="filter-date-container" noValidate autoComplete="off">
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input
            id="date"
            type="date"
            name="startDate"
            placeholder="Select a start date"
            onChange={handleOnChange}
            max={validDateRange.startDate.max}
            min={validDateRange.startDate.min}
            defaultValue={
              formData.startDate
                ? moment(formData.startDate).format("YYYY-MM-DD")
                : null
            }
            className="basic-form-element-margin"
          />
          <label htmlFor="endDate">End Date</label>
          <input
            id="date"
            label="End Date"
            type="date"
            name="endDate"
            placeholder="Select an end date"
            max={validDateRange.endDate.max}
            min={validDateRange.endDate.min}
            onChange={handleOnChange}
            defaultValue={
              formData.endDate
                ? moment(formData.endDate).format("YYYY-MM-DD")
                : null
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
          <button
            id="outlined-basic"
            placeholder="Search by user name"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
