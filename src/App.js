import React, { useState, useEffect } from "react";
import "./App.css";
import Filter from "./features/components/Filter/Filter";
import CustomTable from "./features/components/CustomTable/CustomTable";
import CampaignLoader from "./features/components/common/Spinner";
import { connect } from "react-redux";
import { addNewCampaign } from "./redux/actions";
import {
  createNewCampaignList,
  ConvertDateToUTCFormat,
} from "./features/components/common/FunctionFactory";
import { CustomTableColumn } from "./features/components/common/DataStore";
import moment from "moment";
import { CAMPAIGN_ENUMS } from "./features/components/common/Enums";

const App = (props) => {
  const [tableData, updatetableData] = useState([]);
  const { isLoading, campaignList } = props;

  useEffect(() => {
    updatetableData(campaignList);
  }, [campaignList]);

  window.addNewCampaign = (data) => {
    if (Boolean(data)) {
      props.addNewCampaign(createNewCampaignList(data));
    } else {
      console.error("Please provide valid data");
    }
  };

  const triggerSearch = (searchForm, searchBy) => {
    if (searchForm && searchForm.userName && searchBy === CAMPAIGN_ENUMS.NAME) {
      searchByName(searchForm.userName);
    } else if (
      searchForm &&
      (searchForm.startDate || searchForm.endDate) &&
      searchBy === CAMPAIGN_ENUMS.DATE
    ) {
      searchByDateRange(searchForm.startDate, searchForm.endDate);
    } else {
      updatetableData(campaignList);
    }
  };

  const searchByName = (searchKey) => {
    let storeTableDate = tableData.length ? tableData : campaignList;
    let filteredData = storeTableDate.filter((item) => {
      let userName = item.userName.toLowerCase();
      return userName.includes(searchKey);
    });
    updatetableData(filteredData);
  };

  const searchByDateRange = (start, end) => {
    let storeTableDate = tableData.length ? tableData : campaignList;
    let filteredCamoaigns = storeTableDate.filter((item) => {
      let itemStartDate = ConvertDateToUTCFormat(item.startDate);
      let itemEndDate = ConvertDateToUTCFormat(item.endDate);
      let isStartDateWithinRange;
      let isEndDateWithinRange;
      if (Boolean(start) && Boolean(end)) {
        isStartDateWithinRange = moment(itemStartDate).isBetween(start, end);
        isEndDateWithinRange = moment(itemEndDate).isBetween(start, end);
      } else if (Boolean(start)) {
        isStartDateWithinRange = moment(start).isBetween(
          itemStartDate,
          itemEndDate
        );
      } else if (Boolean(end)) {
        isEndDateWithinRange = moment(end).isBetween(
          itemStartDate,
          itemEndDate
        );
      }
      return isStartDateWithinRange || isEndDateWithinRange;
    });
    updatetableData(filteredCamoaigns);
  };

  return (
    <>
      <header className="App-header">Campaigns</header>
      <div className="appBody">
        <Filter triggerSearch={triggerSearch} />
        <div className="campaign-list-container">
          {isLoading ? (
            <CampaignLoader />
          ) : (
            <CustomTable columns={CustomTableColumn} data={tableData} />
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.campaigns.isLoading,
  campaignList: state.campaigns.campaignList,
});
const mapDispatchToProps = { addNewCampaign };
export default connect(mapStateToProps, mapDispatchToProps)(App);
