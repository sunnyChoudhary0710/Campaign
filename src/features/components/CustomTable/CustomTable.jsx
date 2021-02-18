import React from "react";

const CustomTable = (props) => {
  const columns = props.columns || [];

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
        {props.data && props.data.length ? (
          props.data.map((item) => {
            return (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.userName}</td>
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>
                <td>
                  {item.status === "Active" ? (
                    <span className="dot green"></span>
                  ) : (
                    <span className="dot red"></span>
                  )}
                  {item.status}
                </td>
                <td>{item.budget}</td>
              </tr>
            );
          })
        ) : (
          <>
            <tr>
              <td colSpan="6" className="no-data-column">
                There are no existing Campaigns at the moment.
              </td>
            </tr>
          </>
        )}
      </tbody>
    </table>
  );
};

export default CustomTable;
