import { Fragment, useEffect, useMemo, useState } from 'react';
import { Grid, Paper } from '@mui/material';
import GenericSignaturePad from '../../../../../common-components/form-elements/genericSignaturePad';
import GenericTextEditor from '../../../../../common-components/form-elements/genericTextEditor';
import SubHeader from '../../../../../common-components/page-elements/SubHeader';
import GenericDataGrid from '../../../../../common-components/form-elements/genericDataGrid';
import {
  requestToGetAllBranch,
  resetBranchByIdList
} from '../../../../../store/slices/BranchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GenericAction from '../../../../../common-components/form-elements/genericAction';

const BranchList = () => {
  const {
    company: { companyDetails },
    branch: { branchList }
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(requestToGetAllBranch(companyDetails?._id));
    dispatch(resetBranchByIdList());
  }, []);

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'branchName',
        headerName: 'Branch Name',
        width: 150,
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
        width: 110,
        editable: false
      },
      {
        field: 'city',
        headerName: 'City',
        type: 'number',
        width: 110,
        editable: false
      },
      {
        field: 'state',
        headerName: 'State',
        type: 'number',
        width: 110,
        editable: false
      },
      {
        field: 'createdDate',
        headerName: 'Registered Date',
        type: 'number',
        width: 150,
        renderCell: (data) => {
          return new Date(data?.row?.createdDate).toDateString();
        }
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
  });

  const getRowData = (data) => {
    dispatch(resetBranchByIdList());
    const { _id } = data?.row;
    navigate(`../edit/${_id}`);
  };

  const [imageWidth, setImageWidth] = useState('100%');
  const [signatureImage, setSignatureImage] = useState(
    'https://t4.ftcdn.net/jpg/00/00/42/95/240_F_429547_YJTlwk2Ld5kYDAbtCUwFgzmatgUHEg.jpg'
  );
  const getImage = (data) => {
    setSignatureImage(data?.imageUrl);
    setImageWidth(data?.width - 120);
  };

  return (
    <Fragment>
      <SubHeader title={'Branch List'} />
      <Paper sx={{ padding: '30px' }}>
        {Array.isArray(branchList) && (
          <>
            <GenericDataGrid
              rows={branchList.map((item, index) => ({
                ...item,
                id: index + 1
              }))}
              columns={columns}
              onRowClick={getRowData}
            />
          </>
        )}
      </Paper>
    </Fragment>
  );
};
export default BranchList;
