import { Paper } from '@mui/material';
import SubHeader from '../../../../../common-components/page-elements/SubHeader';
import { Fragment, useEffect, useMemo } from 'react';
import GenericDataGrid from '../../../../../common-components/form-elements/genericDataGrid';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  requestToGetAllFranchise,
  resetFranchisebyId
} from '../../../../../store/slices/FranchiseSlice';
import GenericAction from '../../../../../common-components/form-elements/genericAction';

const FranchiseList = () => {
  const dispatch = useDispatch();
  const {
    franchise: { franchiseList },
    company: { companyDetails }
  } = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(requestToGetAllFranchise(companyDetails?._id));
    dispatch(resetFranchisebyId());
  }, []);

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'franchiseName',
        headerName: 'Franchise Person',
        width: 150,
        editable: false
      },
      {
        field: 'franchiseOwnerName',
        headerName: 'Franchise Owner Name',
        width: 110,
        editable: false
      },
      {
        field: 'registeredMobile',
        headerName: 'Mobile',
        type: 'number',
        width: 110,
        editable: false
      },
      {
        field: 'email',
        headerName: 'Email',
        type: 'number',
        width: 150,
        editable: false
      },
      {
        field: 'pincode',
        headerName: 'Pin Code',
        type: 'number',
        width: 110,
        editable: false
      },
      {
        field: 'state',
        headerName: 'State',
        width: 110,
        editable: false
      },
      {
        field: 'city',
        headerName: 'City',
        width: 150,
        editable: false
      },
      {
        field: 'locality',
        headerName: 'Locality',
        width: 150,
        editable: false
      },
      {
        field: 'landmark',
        headerName: 'Landmark',
        width: 150,
        editable: false
      },
      {
        field: 'address',
        headerName: 'Address',
        width: 150,
        editable: false
      },
      {
        field: '_id',
        headerName: 'Action',
        width: 150,
        editable: false,
        renderCell: (data) => {
          return (
            <GenericAction
              data={data?.row}
              // onEditHandler={onEditHandler}
              // onDeleteHandler={onDeleteHandler}
            />
          );
        }
      }
    ];
  }, []);

  const getRowData = (data) => {
    const { _id } = data?.row;
    navigate(`../edit/${_id}`);
  };

  return (
    <Fragment>
      <SubHeader title={'Franchise List'} />
      <Paper>
        {/* {Array.isArray(franchiseList) && (
                <> */}
        <GenericDataGrid
          rows={franchiseList?.map((item, index) => ({
            ...item,
            id: index + 1
          }))}
          columns={columns}
          onRowClick={getRowData}
        />
        {/* </>
              )} */}
      </Paper>
    </Fragment>
  );
};

export default FranchiseList;
