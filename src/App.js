import React, { useEffect } from 'react';
import './App.css';
import Filter from './features/components/Filter/Filter';
import CampaignList from './features/components/List/CampaignList';

function App(props) {

  useEffect(()=>{
    props.getCampaigns();
  },[])

  return (
    <div className="App">
      <header className="App-header">
          Campaigns
      </header>
      <body className="appBody">
        <Filter />
        <CampaignList />
      </body>
    </div>
  );
}

export default App;
