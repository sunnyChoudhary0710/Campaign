import React, { useEffect } from 'react';
import './App.css';
import Filter from './features/components/Filter/Filter';
import CampaignList from './features/components/List/CampaignList';
import CampaignLoader from './features/components/common/Spinner';

import { connect } from 'react-redux';
import { getCampaigns } from './app/actions';

function App(props) {

  useEffect(() => {
    props.getCampaigns();
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
const mapDispatchToProps = { getCampaigns };
export default connect(mapStateToProps, mapDispatchToProps)(App);
