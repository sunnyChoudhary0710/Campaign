export const updateCampaigns = (campaignList) => ({
  type: "UPDATE_CAMPAIGNS",
  payload: campaignList,
});

export const setLoading = (loadingState) => ({
  type: "SET_LOADING",
  payload: loadingState,
})

export const handleError = () => ({ type: "HANDLE_ERROR" });

export const getCampaigns = () => async (dispatch) => {
  console.log('Fetching campaigns');
  dispatch(setLoading(true));
  try {
    // const url = `https://jsonplaceholder.typicode.com/users`;
    // const response = await fetch(url);
    // const responseBody = response.json();
    // dispatch(updateCampaigns(responseBody));

    MockAPI(dispatch);

  } catch (error) {
    dispatch(handleError());
    dispatch(setLoading(false));
  }
};

const MockAPI = (dispatch) => {
  setTimeout(() => {
    let data = [
      createData(
        "Campaign 1",
        "Unknown user",
        "21/06/2021",
        "21/06/2021",
        "Active",
        "3M USD"
      ),
      createData(
        "Campaign 1",
        "Unknown user",
        "21/06/2021",
        "21/06/2021",
        "Active",
        "3M USD"
      ),
      createData(
        "Campaign 1",
        "Unknown user",
        "21/06/2021",
        "21/06/2021",
        "Active",
        "3M USD"
      ),
      createData(
        "Campaign 1",
        "Unknown user",
        "21/06/2021",
        "21/06/2021",
        "Active",
        "3M USD"
      ),
      createData(
        "Campaign 1",
        "Unknown user",
        "21/06/2021",
        "21/06/2021",
        "Active",
        "3M USD"
      ),
      createData(
        "Campaign 1",
        "Unknown user",
        "21/06/2021",
        "21/06/2021",
        "Active",
        "3M USD"
      ),
      createData(
        "Campaign 1",
        "Unknown user",
        "21/06/2021",
        "21/06/2021",
        "Active",
        "3M USD"
      ),
      createData(
        "Campaign 1",
        "Unknown user",
        "21/06/2021",
        "21/06/2021",
        "Active",
        "3M USD"
      ),
      createData(
        "Campaign 1",
        "Unknown user",
        "21/06/2021",
        "21/06/2021",
        "Active",
        "3M USD"
      ),
      createData(
        "Campaign 1",
        "Unknown user",
        "21/06/2021",
        "21/06/2021",
        "Active",
        "3M USD"
      ),
      createData(
        "Campaign 1",
        "Unknown user",
        "21/06/2021",
        "21/06/2021",
        "Active",
        "3M USD"
      ),
      createData(
        "Campaign 1",
        "Unknown user",
        "21/06/2021",
        "21/06/2021",
        "Active",
        "3M USD"
      ),
      createData(
        "Campaign 1",
        "Unknown user",
        "21/06/2021",
        "21/06/2021",
        "Active",
        "3M USD"
      ),
      createData(
        "Campaign 1",
        "Unknown user",
        "21/06/2021",
        "21/06/2021",
        "Active",
        "3M USD"
      ),
      createData(
        "Campaign 1",
        "Unknown user",
        "21/06/2021",
        "21/06/2021",
        "Active",
        "3M USD"
      ),
      createData(
        "Campaign 1",
        "Unknown user",
        "21/06/2021",
        "21/06/2021",
        "Active",
        "3M USD"
      ),
      createData(
        "Campaign 1",
        "Unknown user",
        "21/06/2021",
        "21/06/2021",
        "Active",
        "3M USD"
      ),
      createData(
        "Campaign 1",
        "Unknown user",
        "21/06/2021",
        "21/06/2021",
        "Active",
        "3M USD"
      ),
      createData(
        "Campaign 1",
        "Unknown user",
        "21/06/2021",
        "21/06/2021",
        "Active",
        "3M USD"
      ),
      createData(
        "Campaign 1",
        "Unknown user",
        "21/06/2021",
        "21/06/2021",
        "Active",
        "3M USD"
      ),
    ];
    dispatch(updateCampaigns(data));
    dispatch(setLoading(false));
  }, 3000);
};

const createData = (name, userName, startDate, endDate, active, budget) => {
  return { name, userName, startDate, endDate, active, budget };
};
