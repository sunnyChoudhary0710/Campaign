import React from 'react';

import { connect } from 'react-redux';
import { getCampaigns } from './app/actions';

import App from './App';

const mapStateToProps = (state, ownProps) => ({ repos: state.campaignList || [] });
const mapDispatchToProps = { getCampaigns };
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;