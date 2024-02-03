import LinearProgress from '@mui/material/LinearProgress';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector
} from '@mui/x-data-grid';
import React from 'react';
import { Paper } from '@mui/material';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const GenericDataGrid = (props) => {
  const { rows, columns, checkboxSelection = false } = props;
  return (
    <Paper>
      <DataGrid
        rows={rows}
        columns={columns}
        rowHeight={50}
        slots={{
          toolbar: CustomToolbar,
          loadingOverlay: LinearProgress
        }}
        loading={rows?.length === 0}
        initialState={{
          pagination: { paginationModel: { pageSize: 25, page: 1 } }
        }}
        rowSelection={true}
        pageSizeOptions={[25, 50, 100]}
        checkboxSelection={checkboxSelection}
        // disableRowSelectionOnClick
        onCellClick={props.onCellClick}
        {...props}
      />
    </Paper>
  );
};
export default GenericDataGrid;
