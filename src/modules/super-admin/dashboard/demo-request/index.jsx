import { Paper } from '@mui/material';
import { Fragment } from 'react';
import SubHeader from '../../../../common-components/page-elements/SubHeader';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';

const columns = [
  { field: 'id', headerName: 'S.No.', width: 90 },
  {
    field: 'customerId',
    headerName: 'Customer Id ',
    width: 150,
    editable: false
  },
  {
    field: 'contactPerson',
    headerName: 'Contact Person',
    width: 150,
    editable: false
  },
  {
    field: 'companyName',
    headerName: 'Company Name',
    type: 'number',
    width: 110,
    editable: false
  },
  {
    field: 'mobile',
    headerName: 'Mobile',
    type: 'number',
    width: 110,
    editable: false
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'number',
    width: 110,
    editable: false
  },
  {
    field: 'roleType',
    headerName: 'Role Type',
    type: 'number',
    width: 110,
    editable: false
  },
  {
    field: 'registeredDate',
    headerName: 'Registered Date',
    type: 'number',
    width: 150,
    editable: false
  }
];

const rows = [
  { id: 1, customerId: 'Snow', contactPerson: 'Jon', age: 35 },
  { id: 2, customerId: 'Lannister', contactPerson: 'Cersei', age: 42 },
  { id: 3, customerId: 'Lannister', contactPerson: 'Jaime', age: 45 },
  { id: 4, customerId: 'Stark', contactPerson: 'Arya', age: 16 },
  { id: 5, customerId: 'Targaryen', contactPerson: 'Daenerys', age: null },
  { id: 6, customerId: 'Melisandre', contactPerson: null, age: 150 },
  { id: 7, customerId: 'Clifford', contactPerson: 'Ferrara', age: 44 },
  { id: 8, customerId: 'Frances', contactPerson: 'Rossini', age: 36 },
  { id: 9, customerId: 'Roxie', contactPerson: 'Harvey', age: 65 }
];
const DemoRequest = () => {
  return (
    <Fragment>
      <SubHeader title={'Demo Request List'} />
      <Paper sx={{ p: 3 }}>
        <GenericDataGrid rows={rows} columns={columns} />
      </Paper>
    </Fragment>
  );
};
export default DemoRequest;
