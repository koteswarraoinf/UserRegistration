
import React from 'react';
import MaterialTable from 'material-table';

export default function SimpleTable(props) {
console.log("props", props)
  const [state, setState] = React.useState({
    columns: [
      { title: 'First Name', field: 'firstName' },
      { title: 'Last Name', field: 'lastName' },
      { title: 'email', field: 'email' },
      { title: 'User Name', field: 'userName' },
      { title: 'password', field: 'password' },
    ],
    data: [
      props.rowData
     ]
  });

  return (
    <MaterialTable
      title="React-Material-DataTable"
      columns={state.columns}
      data={props.rowData}
      editable={{
      }}
    />
  );
}