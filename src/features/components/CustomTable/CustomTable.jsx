import React from "react";
import store from "../../../app/store";
import { connect } from "react-redux";

const CustomTable = (props) => {
  const [rowsDate, updateRowsDate] = React.useState(props.data || []);

  const columns = props.columns || [];

  const handleSearch = (key) => {
    let storeTableDate = store.getState();
    updateRowsDate(
      storeTableDate.filter((item) => {
        return item.userName === key;
      })
    );
  };

  return (
    <table id="custom-table">
     <thead>
      <tr>
        {columns.map((row) => {
          return <th key={row.id}>{row.label}</th>;
        })}
      </tr>
      </thead>
      <tbody>
      {rowsDate.map((item) => {
        return (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.userName}</td>
            <td>{item.startDate}</td>
            <td>{item.endDate}</td>
            <td>{item.status}</td>
            <td>{item.budget}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state, ownProps) => ({
  data: ownProps.data,
  triggerSearch: ownProps.triggerSearch
});

export default connect(mapStateToProps)(CustomTable);
