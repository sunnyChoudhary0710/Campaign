import { checkIfUserExistForGivenCampaign } from "../features/components/common/FunctionFactory";

export const updateCampaigns = (campaignList) => ({
  type: "UPDATE_CAMPAIGNS",
  payload: campaignList,
});

export const setLoading = (loadingState) => ({
  type: "SET_LOADING",
  payload: loadingState,
});

export const handleError = () => ({ type: "HANDLE_ERROR" });

export const addNewCampaign = (campaignToAdd) => async (dispatch) => {
  if (Boolean(campaignToAdd)) {
    console.info("Attempting to add new campaign(s)");
    dispatch(setLoading(true));
    try {
      let userList = await getUsers();
      let finalCampaignList = checkIfUserExistForGivenCampaign(
        campaignToAdd,
        userList
      );
      dispatch(updateCampaigns(finalCampaignList));
      dispatch(setLoading(false));
    } catch (error) {
      console.error(
        "Some error occured while adding a new campaign. Please reload and try again."
      );
      dispatch(handleError());
      dispatch(setLoading(false));
    }
  }
};

export const getUsers = async () => {
  console.info("Fetching users");
  try {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const response = await fetch(url);
    const responseBody = response.json();
    return responseBody;
  } catch (error) {
    console.error(
      "Some error occured while fetching user list. Please reload and try again."
    );
    return error;
  }
};

export const handleSearchByUserName = (dispatch, value) => {
  try {
    dispatch({
      type: "UPDATE_SEARCH_BY",
      payload: value,
    });
  } catch (error) {
    dispatch(handleError());
    dispatch(setLoading(false));
  }
};
