export const InitialDataForCampaign = [
  {
    id: 1,
    name: "Divavu",
    startDate: "9/19/2017",
    endDate: "3/9/2018",
    Budget: 88377,
    userId: 3,
  },
];

export const CustomTableColumn = [
  { id: "name", label: "Name", minWidth: 100 },
  { id: "userName", label: "User Name", minWidth: 100 },
  {
    id: "startDate",
    label: "Start Date",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "endDate",
    label: "End Date",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Active",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "budget",
    label: "Budget",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];
