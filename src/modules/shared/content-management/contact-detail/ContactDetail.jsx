import { Grid, FormHelperText } from '@mui/material';
import React, { Fragment, useState, useMemo, useCallback, useEffect } from 'react';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import {
  contactDetailInitialValues,
  contactDetailsValidationSchema
} from '../../../../common-components/validator/settings-validator/content-management';
import {
  updateContactType,
  updateOtherNumber,
  updateNumber,
  updateContactCheckbox,
  requestToSaveContactDetails,
  requestToGetAllContactDetails,
  resetContactDetails,
  resetContactDetailsApiStatus,
  requestToGetAllSubModule,
  requestDeleteContactDetail,
  resetContactDetailDeleteStatus
} from '../../../../store/slices/ContentManagementSlice';
import { requestToGetAllModule } from '../../../../store/slices/ContentManagementSlice';
import Toasty from '../../../../common-components/form-elements/toasty';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericDropdown from '../../../../common-components/form-elements/genericDropdown';
import GenericCheckbox from '../../../../common-components/form-elements/genericCheckbox';
import GenericAction from '../../../../common-components/form-elements/genericAction';

const style = {
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'center'
};
const ContactTypeData = [
  {
    value: 'Toll Free Number',
    label: 'Toll Free Number'
  },
  {
    value: 'Landline Number',
    label: 'Landline Number'
  },
  {
    value: 'Mobile Number',
    label: 'Mobile Number'
  },
  {
    value: 'Email',
    label: 'Email'
  },
  {
    value: 'Other',
    label: 'Other'
  }
];

const ducumentType = [
  {
    value: 'Quotation',
    label: 'Quotation'
  },
  {
    value: 'Invoice',
    label: 'Invoice'
  },
  {
    value: 'Bilty',
    label: 'Bilty'
  },
  {
    value: 'Car Condition',
    label: 'Car Condition'
  },
  {
    value: 'Money Reciept',
    label: 'Money Reciept'
  }
];

const ContactDetail = () => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const { contentManagement, company, auth } = useSelector((state) => state);
  const { contactDetails, modules, subModules } = contentManagement || {};
  const { listContactDetails, add, apiStatus } = contactDetails || {};
  const { listSubModules } = subModules || {};
  const { companyDetails } = company || {};
  const { loginSuccess } = auth || {};

  const [contactTypeValue, setContactTypeValue] = useState();
  const [gridValue, setGridValue] = useState();

  const formik = useFormik({
    initialValues: contactDetailInitialValues,
    validationSchema: contactDetailsValidationSchema
  });

  const dispatch = useDispatch();

  const onupdateContactTypeChange = (evt) => {
    const { value } = evt?.target;

    if (value === 'email') {
      setContactTypeValue('Enter Email');
      setGridValue(12);
    } else if (value === 'Other') {
      setContactTypeValue('Enter Number');
      setGridValue(6);
    } else {
      setContactTypeValue('Enter Number');
      setGridValue(12);
    }
    formik.setFieldValue('contactType', evt?.target?.value);
    dispatch(updateContactType(value));
  };

  const onOtherContactNumberChange = (evt) => {
    formik.setFieldValue('otherContact', evt?.target?.value);
    dispatch(updateOtherNumber(evt?.target?.value));
  };
  const onContactDetailsNumberChange = (evt) => {
    formik.setFieldValue('contactValue', evt?.target?.value);
    dispatch(updateNumber(evt?.target?.value));
  };

  const onContactCheckboxChange = (evt) => {
    const { value, checked } = evt?.target;
    let role = [...add?.chooseModule];
    if (checked) {
      role.push(value);
    } else {
      role = role?.filter((item) => item !== value);
    }
    formik.setFieldValue('chooseModule', role);
    dispatch(updateContactCheckbox(role));
  };
  const onSaveContactDetailHandler = () => {
    // console.log(listContactDetails, "anurag");
    let payload = {
      companyId: companyDetails?._id,
      contactType: add?.contactType === 'Other' ? add?.otherContact : add?.contactType,
      contactValue: add?.contactValue,
      modulesView: add?.chooseModule,
      createdBy: loginSuccess?.id
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveContactDetails(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Details');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 3000);
    }
  };

  useEffect(() => {
    setFirstRenderDone(true);
    dispatch(resetContactDetails());
    dispatch(requestToGetAllModule());
    dispatch(requestToGetAllSubModule());
  }, []);

  const onDeleteHandler = (data) => {
    dispatch(requestDeleteContactDetail(data?._id));
  };

  useEffect(() => {
    if (firstRenderDone) {
      if (apiStatus?.isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Contact Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetContactDetails());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (apiStatus?.isRequestFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetContactDetailsApiStatus());
        }, 2000);
      }
    }
  }, [apiStatus?.isSaved, apiStatus?.isRequestFailed]);

  useEffect(() => {
    if (apiStatus?.isDeleted) {
      dispatch(requestToGetAllContactDetails(companyDetails?._id));
      setIsMessageDisplay(true);
      setMessageType('success');
      setMessage('Contact Detail  Deleted');
      setTimeout(() => {
        dispatch(resetContactDetailDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    } else if (apiStatus?.isDeleteResponseToFailed) {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Cannot delete Entry');
      setTimeout(() => {
        dispatch(resetContactDetailDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    }
  }, [apiStatus?.isDeleted, apiStatus?.isDeleteResponseToFailed]);

  useEffect(() => {
    dispatch(requestToGetAllContactDetails(companyDetails?._id));
    // setList(listContactDetails)
  }, [apiStatus?.isSaved]);

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'contactType',
        headerName: 'Contact Type',
        width: 150,
        editable: false
      },
      {
        field: 'contactValue',
        headerName: 'Contact Value',
        width: 150,
        editable: false
      },
      {
        field: 'createdAt',
        headerName: 'Created At',
        width: 200,
        renderCell: (data) => {
          return new Date(data?.row?.createdAt).toDateString();
        }
      },
      {
        field: 'modulesView',
        headerName: 'Modules',
        width: 400,
        editable: false
      },
      {
        field: '',
        headerName: 'Action',
        width: 150,
        editable: false,
        renderCell: (data) => {
          return (
            <GenericAction data={data?.row} onDeleteHandler={(data) => onDeleteHandler(data)} />
          );
        }
      }
    ];
  });

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={gridValue}>
                <GenericDropdown
                  label={'Choose Contact Type'}
                  data={ContactTypeData}
                  onChange={onupdateContactTypeChange}
                  error={formik.errors?.contactType && formik.touched?.contactType}
                  onBlur={formik.handleBlur}
                  onKeyUp={formik.handleChange}
                  onFocus={formik.handleChange}
                  value={formik?.values?.contactType}
                  selected={null}
                />
                <FormHelperText error>
                  {formik.errors?.contactType &&
                    formik.touched?.contactType &&
                    formik.errors?.contactType}
                </FormHelperText>
              </Grid>

              {add?.contactType === 'Other' && (
                <Grid item xs={12} md={gridValue}>
                  <GenericInput
                    onChange={onOtherContactNumberChange}
                    label={'Enter Title'}
                    error={formik.errors?.otherContact && formik.touched?.otherContact}
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleChange}
                    onFocus={formik.handleChange}
                    value={formik?.values?.otherContact}
                  />
                  <FormHelperText error>
                    {formik.errors?.otherContact &&
                      formik.touched?.otherContact &&
                      formik.errors?.otherContact}
                  </FormHelperText>
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} sx={style}>
            <GenericInput
              label={contactTypeValue}
              onChange={onContactDetailsNumberChange}
              error={formik.errors?.contactValue && formik.touched?.contactValue}
              onBlur={formik.handleBlur}
              onKeyUp={formik.handleChange}
              onFocus={formik.handleChange}
              value={formik?.values?.contactValue}
            />
            <FormHelperText error>
              {formik.errors?.contactValue &&
                formik.touched?.contactValue &&
                formik.errors?.contactValue}
            </FormHelperText>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              alignItems: 'center',
              border: '1px solid #CACACA',
              ml: 2,
              mt: 2,
              borderRadius: '5px',
              p: '0px 0px 0px 16px !important',
              color: formik?.errors?.chooseModule && formik?.touched?.chooseModule && '#d32f2f'
            }}
          >
            <GenericCheckbox
              onChange={onContactCheckboxChange}
              list={listSubModules
                ?.filter((obj) => obj?.availableOnDocument === true)
                ?.map((item) => {
                  return {
                    value: item?.subModuleName,
                    label: item?.subModuleName
                  };
                })}
              value={formik?.values?.chooseModule}
              style={{ display: 'block' }}
              onBlur={formik.handleBlur}
              onKeyUp={formik.handleChange}
              onFocus={formik.handleChange}
              error={
                formik?.errors?.chooseModule &&
                formik?.touched?.chooseModule &&
                formik?.errors?.chooseModule
              }
            />
            <FormHelperText error>
              {formik?.errors?.chooseModule &&
                formik?.touched?.chooseModule &&
                formik?.errors?.chooseModule}
            </FormHelperText>
          </Grid>
          <Grid item xs={12}>
            <GenericLoadingButton
              onClick={onSaveContactDetailHandler}
              type="submit"
              style={{ float: 'right', marginRight: '20px' }}
            >
              <span>Submit</span>
            </GenericLoadingButton>
          </Grid>
          <Grid item xs={12}>
            {Array.isArray(listContactDetails) && (
              <>
                <GenericDataGrid
                  rows={listContactDetails
                    .filter((item) => !item.isDeleted)
                    ?.map((item, index) => ({
                      ...item,
                      id: index + 1
                    }))}
                  columns={columns}
                />
              </>
            )}
          </Grid>
        </Grid>
      </form>
      {isMessageDisplay && <Toasty show={isMessageDisplay} message={message} type={messageType} />}
    </Fragment>
  );
};

export default ContactDetail;
