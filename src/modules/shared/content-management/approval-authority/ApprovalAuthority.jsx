import { Grid } from '@mui/material';
import React, { Fragment, useMemo, useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import { useFormik } from 'formik';
import Toasty from '../../../../common-components/form-elements/toasty';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import {
  updateAddApprovalAuthorityValue,
  requestToSaveApprovalAuthority,
  requestToGetAllApprovalAuthority,
  resetApprovalAuthority,
  resetApprovalAuthorityApiStatus
} from '../../../../store/slices/ContentManagementSlice';
import {
  approvalAuthorityInitialValues,
  approvalAuthorityValidationSchema
} from '../../../../common-components/validator/settings-validator/content-management';
const ApprovalAuthority = () => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const formik = useFormik({
    initialValues: approvalAuthorityInitialValues,
    validationSchema: approvalAuthorityValidationSchema
  });
  const dispatch = useDispatch();
  const {
    contentManagement: {
      approvalAuthority: { add, apiStatus, listApprovalAuthority }
    },
    company: { companyDetails }
  } = useSelector((state) => state);

  const onApprovalAuthorityChange = (evt) => {
    formik.setFieldValue('value', evt?.target?.value);
    
    dispatch(updateAddApprovalAuthorityValue(evt?.target?.value));
  };
  
  const onSaveApprovalAuthorityHandler = () => {
    let payload = {
      approvalAuthority: add?.value,
      companyId: companyDetails._id
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveApprovalAuthority(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Approval Authority');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 2500);
    }
  };

  useEffect(() => {
    setFirstRenderDone(true);
    dispatch(resetApprovalAuthority());
  }, []);

  useEffect(() => {
    dispatch(requestToGetAllApprovalAuthority());
  }, [apiStatus?.isSaved]);

  useEffect(() => {
    if (firstRenderDone) {
      if (apiStatus?.isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Approval Authority Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetApprovalAuthority());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (apiStatus?.isResponseFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetApprovalAuthorityApiStatus());
        }, 2000);
      }
    }
  }, [apiStatus?.isSaved, apiStatus?.isResponseFailed]);

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'approvalAuthority',
        headerName: 'Approval Authority',
        width: 150,
        editable: false
      },
      {
        field: 'createdDate',
        headerName: 'Created Date',
        width: 150,
        renderCell: (data) => {
          return new Date(data?.row?.createdDate).toDateString();
        }
      }
    ];
  });
  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <GenericInput
              onChange={onApprovalAuthorityChange}
              error={formik?.errors?.value && formik?.touched?.value}
              value={formik?.values?.value}
              onBlur={formik.handleBlur}
              onkeyUp={formik.handleChange}
              onFocus={formik.handleChange}
              helperText={formik?.errors?.value && formik?.touched?.value && formik?.errors?.value}
              label={'Enter Approval Authority'}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericLoadingButton onClick={onSaveApprovalAuthorityHandler} type="submit">
              <span>Submit</span>
            </GenericLoadingButton>
          </Grid>
          {Array.isArray(listApprovalAuthority) && (
            <Grid item xs={12}>
              <GenericDataGrid
                rows={listApprovalAuthority.map((item, index) => ({
                  ...item,
                  id: index + 1
                }))}
                columns={columns}
              />
            </Grid>
          )}
        </Grid>
      </form>
      {isMessageDisplay && <Toasty show={isMessageDisplay} message={message} type={messageType} />}
    </Fragment>
  );
};
export default ApprovalAuthority;
