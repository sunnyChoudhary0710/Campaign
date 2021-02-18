import React, { useEffect } from "react";
import "./App.css";
import Filter from "./features/components/Filter/Filter";
//import CampaignList from "./features/components/List/CampaignList";
import CustomTable from "./features/components/CustomTable/CustomTable";
import CampaignLoader from "./features/components/common/Spinner";
import { connect } from "react-redux";
import { addNewCampaign } from "./app/actions";
import {
  createNewCampaignList,
  ConvertDateToUTCFormat,
} from "./features/components/common/FunctionFactory";
import { CustomTableColumn } from "./features/components/common/DataStore";
import moment from "moment";

function App(props) {
  const [tableData, updatetableData] = React.useState([]);

  const triggerSearch = (searchForm) => {
    if (searchForm && searchForm.userName) {
      searchByName(searchForm.userName);
    } else if (searchForm && (searchForm.startDate || searchForm.endDate)) {
      searchByDateRange(searchForm.startDate, searchForm.endDate);
    } else {
      updatetableData(props.campaignList);
    }
  };

  const searchByName = (searchKey) => {
    let storeTableDate = props.campaignList;
    let filteredData = storeTableDate.filter((item) => {
      let userName = item.userName.toLowerCase();
      return userName.includes(searchKey);
    });
    updatetableData(filteredData);
  };

  const searchByDateRange = (start, end) => {
    let storeTableDate = props.campaignList;
    let filteredCamoaigns = storeTableDate.filter((item) => {
      let itemStartDate = ConvertDateToUTCFormat(item.startDate);
      let itemEndDate = ConvertDateToUTCFormat(item.endDate);
      let isStartDateWithinRange = moment(itemStartDate).isBetween(start, end);
      let isEndDateWithinRange = moment(itemEndDate).isBetween(start, end);
      return isStartDateWithinRange || isEndDateWithinRange;
    });
    updatetableData(filteredCamoaigns);
  };

  window.addNewCampaign = (data) => {
    if (Boolean(data)) {
      props.addNewCampaign(createNewCampaignList(data));
    } else {
      console.error("Please provide valid data");
    }
  };

  useEffect(() => {
    updatetableData(props.campaignList);
  }, [props.campaignList]);

  return (
    <>
      <header className="App-header">Campaigns</header>
      <div className="appBody">
        <Filter triggerSearch={triggerSearch} />
        <div className="campaign-list-container">
          {/* {props.isLoading ? <CampaignLoader /> : <CampaignList />} */}
          {props.isLoading ? (
            <CampaignLoader />
          ) : (
            <CustomTable columns={CustomTableColumn} data={tableData} />
          )}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state, ownProps) => ({
  isLoading: state.campaigns.isLoading,
  campaignList: state.campaigns.campaignList,
});
const mapDispatchToProps = { addNewCampaign };
export default connect(mapStateToProps, mapDispatchToProps)(App);
