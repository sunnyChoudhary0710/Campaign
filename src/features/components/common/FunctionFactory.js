import moment from 'moment';
import store from '../../../app/store';

export const createNewCampaignList = (campaign) => {
    const currentState = store.getState();
    let finalCampaignList = ( currentState && currentState.campaigns && currentState.campaigns.campaignList ) ? [...currentState.campaigns.campaignList] : [];
    if ( Array.isArray( campaign ) ) {
        campaign.forEach((item)=>{
            validateInputCampaignData( item ) && addNewCampaignToList( item, finalCampaignList );
        })
    } else if ( isObject( campaign ) && validateInputCampaignData( campaign ) ) {
        addNewCampaignToList( campaign, finalCampaignList );
    } else {
        console.error('Please pass a campaign object or array of campaign objects');
        return;
    }
    return formatCampaign(finalCampaignList);
}

export const addNewCampaignToList = (newCampaign, finalCampaignList) => {
    finalCampaignList.push(newCampaign);
}

const formatCampaign = (cList) => {
    cList.forEach((c, i)=>{
        c.name = `Campaign ${i+1}`;
        c.budget = `${formatCash(c.Budget)} USD`;
        c.status = calculateStatus(c.endDate);
    })
    return cList;
}

export const getReleventUserFromList = ( campaignToAdd, userListFromApi ) => {
    let users = userListFromApi.filter(( userItem )=>{
        return userItem.id === campaignToAdd.userId;
    })
    if (users.length) {
        campaignToAdd.userName = users[0].name;
    } else {
        campaignToAdd.userName = "Unknown User";
    }
    return campaignToAdd;
}

export const checkIfUserExistForGivenCampaign = ( campaignToAdd, userList ) => {
    let finalCampaignListArray = [];
    if ( Array.isArray( campaignToAdd ) ) {
        campaignToAdd.forEach((campaign)=>{
            finalCampaignListArray.push(getReleventUserFromList(campaign, userList));
        })
    } else if ( isObject( campaignToAdd ) && Boolean(campaignToAdd) ) {
        finalCampaignListArray.push(getReleventUserFromList(campaignToAdd, userList));
    }
    return finalCampaignListArray;
}

export const validateInputCampaignData = ( campaign ) => {
    if ( !checkMissingItem(campaign) ) {
        console.error( 'Mandatory fields are missing. Please ensure all values are present and valid.' );
        return false;
    } else if ( isDateRangeInValid(campaign) ) {
        console.error('Start date cannot be more than end date. Please provide valid data.');
        return false;
    } else {
        return true;
    }
}

export const filterCampaignListBySearchKey = ( key, searchKeyWord, currentCampaignList ) => {
    return currentCampaignList.filter((campaign)=>{
        return campaign[key] === searchKeyWord;
    })
}

export const filterCampaignListByDateRange = ( fromDate, toDate, currentCampaignList ) => {
    return currentCampaignList.filter((campaign)=>{
        return campaign.startDate >= fromDate && campaign.startDate <= toDate;
    })
}

const isObject = (val) => {
    if (val === null) { return false;}
    return ( (typeof val !== 'function') || (typeof val === 'object') );
}

const calculateStatus = ( endDate ) => {
    let date = moment(new Date());
    let actualEndDate = moment(endDate, "MM/DD/YYYY");
    return moment(date).isBefore(actualEndDate) ? 'Active' : 'Inactive';
}

const checkMissingItem = (obj) => {
    let result = false;
    for( let key in obj ) {
        if ( obj.hasOwnProperty(key) && Boolean(obj[key]) ) {
            result = true;
        }
    }
    return result;
}

const isDateRangeInValid = (obj) => {
    let result = true;
    let startDate = moment(obj.startDate, "MM/DD/YYYY");
    let endDate = moment(obj.endDate, "MM/DD/YYYY");
    if ( obj.startDate && obj.endDate && moment(startDate).isBefore(endDate) ) {
        result = false;
    }
    return result;
}

export const formatCash = n => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};
