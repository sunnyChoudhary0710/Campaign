export const addRepos = (repos) => ({
  type: "ADD_REPOS",
  repos,
});

export const updateCampaigns = (repos) => ({
  type: "UPDATE_REPOS",
  repos,
});

export const clearRepos = () => ({ type: "CLEAR_REPOS" });

export const getCampaigns = () => async (dispatch) => {
  try {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const response = await fetch(url);
    const responseBody = MockAPI();//response.json();
    dispatch(updateCampaigns(responseBody));
  } catch (error) {
    console.error(error);
    dispatch(clearRepos());
  }
};

const MockAPI = () => {
  setTimeout(() => {
    return [
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
  }, 2000);
};

const createData = (name, userName, startDate, endDate, active, budget) => {
  return { name, userName, startDate, endDate, active, budget };
};
