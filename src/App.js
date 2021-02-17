import React, { useEffect } from 'react';
import './App.css';
import Filter from './features/components/Filter/Filter';
import CampaignList from './features/components/List/CampaignList';
import CampaignLoader from './features/components/common/Spinner';

import { connect } from 'react-redux';
import { addNewCampaign } from './app/actions';
import { createNewCampaignList } from './features/components/common/FunctionFactory';
import { InitialDataForCampaign } from './features/components/common/DataStore';

function App(props) {

  window.addNewCampaign = ( data ) => {
    if ( Boolean(data) ) {
      props.addNewCampaign(createNewCampaignList(data));
    } else {
      console.error('Please provide valid data');
    }
  };

  useEffect(() => {
    props.addNewCampaign(createNewCampaignList(InitialDataForCampaign));
  }, []);

  return (
    // <div className="App">
    <>
      <header className="App-header">
          Campaigns
      </header>
      <body className="appBody">
        <Filter />
        <div className="campaign-list-container">
        { props.isLoading ? (
          <CampaignLoader />
        ) : (
          <CampaignList />
        ) }
        </div>
      </body>
      </>
    // </div>
  );
}

const mapStateToProps = (state, ownProps) => ({ isLoading: state.campaigns.isLoading });
const mapDispatchToProps = { addNewCampaign };
export default connect(mapStateToProps, mapDispatchToProps)(App);
