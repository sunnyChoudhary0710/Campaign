import React, { useEffect } from "react";
import "./App.css";
import Filter from "./features/components/Filter/Filter";
//import CampaignList from "./features/components/List/CampaignList";
import CustomTable from "./features/components/CustomTable/CustomTable";
import CampaignLoader from "./features/components/common/Spinner";

import { connect } from "react-redux";
import { addNewCampaign } from "./app/actions";
import { createNewCampaignList } from "./features/components/common/FunctionFactory";
import {
  InitialDataForCampaign,
  CustomTableColumn,
} from "./features/components/common/DataStore";

function App(props) {
  const [tableData, updatetableData] = React.useState(props.campaignList);

  const triggerSearchByName = (searchKey) => {
    let storeTableDate = props.campaignList;
    updatetableData(
      storeTableDate.filter((item) => {
        return item.userName === searchKey;
      })
    );
  };

  const triggerSearchByDateRange = (searchKey) => {
    let storeTableDate = props.campaignList;
    updatetableData(
      storeTableDate.filter((item) => {
        return item.userName === searchKey;
      })
    );
  };

  window.addNewCampaign = (data) => {
    if (Boolean(data)) {
      props.addNewCampaign(createNewCampaignList(data));
    } else {
      console.error("Please provide valid data");
    }
  };

  useEffect(() => {
    props.addNewCampaign(createNewCampaignList(InitialDataForCampaign));
  }, []);

  return (
    // <div className="App">
    <>
      <header className="App-header">Campaigns</header>
      <div className="appBody">
        <Filter
          triggerSearchByName={triggerSearchByName}
          triggerSearchByDateRange={triggerSearchByDateRange}
        />
        <div className="campaign-list-container">
          {/* {props.isLoading ? <CampaignLoader /> : <CampaignList />} */}
          {props.isLoading ? (
            <CampaignLoader />
          ) : (
            <CustomTable
              columns={CustomTableColumn}
              data={props.campaignList}
            />
          )}
        </div>
      </div>
    </>
    // </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  isLoading: state.campaigns.isLoading,
  campaignList: state.campaigns.campaignList,
});
const mapDispatchToProps = { addNewCampaign };
export default connect(mapStateToProps, mapDispatchToProps)(App);
