import React from 'react';
import { connect } from 'react-redux';
import { addNewCampaign } from './app/actions';
import App from './App';

const mapStateToProps = (state, ownProps) => ({ repos: state.campaignList || [] });
const mapDispatchToProps = { addNewCampaign };
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;