import { Fragment, useState, useEffect, useCallback, useMemo } from 'react';
import { Grid, FormHelperText } from '@mui/material';
import GenericDropdown from '../../../../common-components/form-elements/genericDropdown';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericCheckbox from '../../../../common-components/form-elements/genericCheckbox';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import Toasty from '../../../../common-components/form-elements/toasty';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import {
  updatechooseDocumentType,
  updateISOCertificateType,
  updateDocumentNumber,
  updateOtherRegistrationTitle,
  requestToSaveRegistrationDetail,
  requestToGetAllRegistrationDetail,
  updateRegChooseModuleDocumentNumber,
  resetRegistrationDetail,
  resetRegistrationDetailApiStatus,
  requestToGetAllSubModule,
  updateRegibaApprovaldate,
  requestDeleteRegistrationDetail,
  resetRegistrationDetailDeleteStatus
} from '../../../../store/slices/ContentManagementSlice';
import {
  govtRegistrationInitialValues,
  registrationDetailsValidationSchema
} from '../../../../common-components/validator/settings-validator/content-management';
import { addListener } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import GenericDatePicker from '../../../../common-components/form-elements/genericDatePicker';
import GenericAction from '../../../../common-components/form-elements/genericAction';
const style = {
  display: 'flex',
  alignItem: 'center'
};
const DocumentType = [
  {
    value: 'GST',
    label: 'GST Number'
  },
  {
    value: 'ISO Certificate Number',
    label: 'ISO Certificate'
  },
  {
    value: 'Shop Act Number',
    label: 'Shop Act Number'
  },
  {
    value: 'MSME Regd. Number',
    label: 'MSME Regd. Number'
  },
  {
    value: 'IBA Approval',
    label: 'IBA Approval'
  },
  {
    value: 'Other',
    label: 'Other'
  }
];

const documentTemplateType = [
  {
    value: 'quotation',
    label: 'Quotation'
  },
  {
    value: 'invoice',
    label: 'Invoice'
  },
  {
    value: 'bilty',
    label: 'Bilty'
  },
  {
    value: 'carCondition',
    label: 'Car Condition'
  },

  {
    value: 'moneyReciept',
    label: 'Money Reciept'
  }
];

const RegistrationDetail = () => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const formik = useFormik({
    initialValues: govtRegistrationInitialValues,
    validationSchema: registrationDetailsValidationSchema
  });

  const onDeleteHandler = (data) => {
    dispatch(requestDeleteRegistrationDetail(data?._id));
  };

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'documentTypeTitle',
        headerName: 'Document Type',
        width: 150,
        editable: false
      },
      {
        field: 'documentTypeValue',
        headerName: 'Document Number',
        width: 150,
        editable: false
      },
      {
        field: 'createdAt',
        headerName: 'Created At',
        width: 150,
        renderCell: (data) => {
          return new Date(data?.row?.createdAt).toDateString();
        }
      },
      {
        field: 'moduleId',
        headerName: 'Modules',
        width: 400,
        editable: false
      },
      // {
      //   field: 'modulesView',
      //   headerName: 'Modules',
      //   width: 150,
      //   editable: false
      // }

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
  }, []);

  const {
    contentManagement: {
      govtRegistration: { listGovtRegistration, add, apiStatus },
      subModules: { listSubModules = [] }
    },
    auth: { loginSuccess },
    company: { companyDetails }
  } = useSelector((state) => state);

  const [labelName, setLabelName] = useState('');
  const dispatch = useDispatch();

  const onChooseDocumentTypeChange = (evt) => {
    formik.setFieldValue('chooseDocumentType', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updatechooseDocumentType(value));
    switch (value) {
      case 'GST':
        return setLabelName('Enter GST Number');
      case 'ISO Certificate Number':
        return setLabelName('ISO Certificate Number');
      case 'Shop Act Number':
        return setLabelName('Shop Act Number');
      case 'MSME Regd. Number':
        return setLabelName('MSME Regd. Number');
      case 'IBA Approval':
        return setLabelName('IBA Approval Code');
      case 'other':
        return setLabelName(`Enter Number`);
      default:
        return setLabelName('Enter Number');
    }
  };
  const onOtherRegistrationTitleChange = (evt) => {
    formik.setFieldValue('otherTitle', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateOtherRegistrationTitle(value));
  };
  const onDocumentNumberChange = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('documentValue', value.toUpperCase());
    dispatch(updateDocumentNumber(value.toUpperCase()));
  };
  const onRegibaApprovaldateChange = (evt) => {
    const { $D, $y, $M } = evt;
    const Date = `${$y}-${$M}-${$D}`;
    // formik.setFieldValue('ibaApprovaldate', value.toUpperCase());
    dispatch(updateRegibaApprovaldate(Date));
  };

  const onContactCheckboxChange = (evt) => {
    const { value, checked } = evt.target;
    let role = [...add?.chooseModule];
    if (checked) {
      role.push(value);
    } else {
      role = role.filter((item) => item !== value);
    }
    formik.setFieldValue('chooseModule', role);
    dispatch(updateRegChooseModuleDocumentNumber(role));
  };
  const gridDistributionValue = add?.chooseDocumentType === 'Other' ? 6 : 12;
  const gridDivideValue = add?.chooseDocumentType === 'IBA Approval' ? 6 : 12;
  const gridXsValue = add?.chooseDocumentType === 'IBA Approval' ? 6 : 12;

  const onSaveRegistrationDetailHandler = () => {
    let payload = {
      companyId: companyDetails._id,
      moduleId: add?.chooseModule,
      documentType: add?.chooseDocumentType,
      documentTypeValue: add?.documentValue,
      documentTypeTitle:
        add?.chooseDocumentType === 'Other' ? add?.otherTitle : add?.chooseDocumentType,
      createdBy: loginSuccess?.id
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveRegistrationDetail(payload));
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
    dispatch(resetRegistrationDetail());
    dispatch(requestToGetAllSubModule());
  }, []);

  useEffect(() => {
    dispatch(requestToGetAllRegistrationDetail(companyDetails._id));
  }, [apiStatus?.isSaved]);

  useEffect(() => {
    if (firstRenderDone) {
      if (apiStatus?.isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Contact Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetRegistrationDetail());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (apiStatus?.isRequestFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetRegistrationDetailApiStatus());
        }, 2000);
      }
    }
  }, [apiStatus?.isSaved, apiStatus?.isRequestFailed]);

  useEffect(() => {
    if (apiStatus?.isDeleted) {
      dispatch(requestToGetAllRegistrationDetail(companyDetails?._id));
      setIsMessageDisplay(true);
      setMessageType('success');
      setMessage('Registration Details  Deleted');
      setTimeout(() => {
        dispatch(resetRegistrationDetailDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    } else if (apiStatus?.isDeleteResponseToFailed) {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Cannot delete Entry');
      setTimeout(() => {
        dispatch(resetRegistrationDetailDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    }
  }, [apiStatus?.isDeleted, apiStatus?.isDeleteResponseToFailed]);

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={gridDistributionValue}>
                <GenericDropdown
                  label={'Choose Document Type'}
                  data={DocumentType}
                  onChange={onChooseDocumentTypeChange}
                  error={formik.errors?.chooseDocumentType && formik.touched?.chooseDocumentType}
                  onBlur={formik.handleBlur}
                  onKeyUp={formik.handleChange}
                  onFocus={formik.handleChange}
                  value={formik?.values?.chooseDocumentType}
                  selected={null}
                />
                <FormHelperText error>
                  {formik.errors?.chooseDocumentType &&
                    formik.touched?.chooseDocumentType &&
                    formik.errors?.chooseDocumentType}
                </FormHelperText>
              </Grid>
              {add?.chooseDocumentType === 'Other' ? (
                <Grid item md={gridDistributionValue}>
                  <GenericInput
                    onChange={onOtherRegistrationTitleChange}
                    error={formik.errors?.otherTitle && formik.touched?.otherTitle}
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleChange}
                    onFocus={formik.handleChange}
                    value={formik?.values?.otherTitle}
                    label={'Enter Title'}
                  />
                  <FormHelperText error>
                    {formik.errors?.otherTitle &&
                      formik.touched?.otherTitle &&
                      formik.errors?.otherTitle}
                  </FormHelperText>
                </Grid>
              ) : null}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} sx={style}>
            {/* {add?.chooseDocumentType === 'gstNumber' ? ( */}
            <Grid container spacing={2}>
              <Grid item xs={gridXsValue} md={gridDivideValue}>
                <GenericInput
                  label={labelName}
                  error={formik.errors?.documentValue && formik.touched?.documentValue}
                  onBlur={formik.handleBlur}
                  onKeyUp={formik.handleChange}
                  onFocus={formik.handleChange}
                  value={formik?.values?.documentValue}
                  onChange={onDocumentNumberChange}
                />
              </Grid>
              {add?.chooseDocumentType === 'IBA Approval' && (
                <Grid item xs={gridXsValue} md={gridDivideValue}>
                  <GenericDatePicker
                    label={'IBA Code valid Till'}
                    defaultValue={dayjs(new Date())}
                    onAccept={onRegibaApprovaldateChange}
                    disablePast
                    closeOnSelect={true}
                    // error={
                    //   formik?.errors?.addCompanyDetail?.ibaCodeValidTill &&
                    //   formik?.touched?.addCompanyDetail?.ibaCodeValidTill
                    // }
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleChange}
                    // className={
                    //   formik?.errors?.add?.ibaCodeValidTill &&
                    //   formik?.touched?.addCompanyDetail?.ibaCodeValidTill &&
                    //   'error-valid-till'
                    // }
                    //  sx={{border:'red 1px solid', borderRadius:'4px'}}
                  />

                  {/* <FormHelperText error>
                      {formik?.errors?.addCompanyDetail?.ibaCodeValidTill &&
                        formik?.touched?.addCompanyDetail?.ibaCodeValidTill &&
                        formik?.errors?.addCompanyDetail?.ibaCodeValidTill}
                      </FormHelperText> */}
                </Grid>
              )}
            </Grid>
            {/* // ) : add?.chooseDocumentType === 'proprietorship' ||
          //   add?.chooseDocumentType === 'partnershipFirm' ? ( */}
            {/* <Grid container spacing={2}>
              <Grid item xs={12} md={gridDivideValue}>
                <GenericInput
                  label={'Enter PAN Number'}
                  // data={IsoType}
                  onChange={onDocumentNumberChange}
                />
              </Grid>
            </Grid> */}
            {/* ) : add?.chooseDocumentType === 'llp' || add?.chooseDocumentType === 'pvtLtdCompany' ? ( */}
            {/* <Grid container spacing={2}>
              <Grid item xs={12} md={gridDivideValue}>
                <GenericInput
                  label={'Enter Incorporation Number'}
                  // data={IsoType}
                  onChange={onDocumentNumberChange}
                />
              </Grid>
            </Grid> */}
            {/* ) : addListener?.chooseDocumentType === 'isoCertificate' ? ( */}
            {/* <Grid container spacing={2}>
              <Grid item xs={12} md={gridDivideValue}>
                <GenericDropdown
                  label={'Choose ISO Type'}
                  data={IsoType}
                  onChange={onISOCertificateTypeChange}
                />
              </Grid>
              {add?.isoCertificateType === 'other' && (
                <Grid item xs={12} md={gridDivideValue}>
                  <GenericInput onChange={onDocumentNumberChange} label={'Enter Number'} />
                </Grid>
              )}
            </Grid>
          ) : ( */}
            {/* <Grid container spacing={2}>
              <Grid item xs={12} md={gridDivideValue}>
                <GenericInput
                  label={'Enter Number'}
                  data={IsoType}
                  onChange={onDocumentNumberChange}
                />
              </Grid>
            </Grid> */}
            {/* )} */}
            {/* {showDocumentTypeView()}  */}
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
              p: '0px 0px 0px 16px !important'
            }}
          >
            <GenericCheckbox
              list={listSubModules
                ?.filter((obj) => obj.availableOnDocument === true)
                .map((item) => {
                  return {
                    value: item?.subModuleName,
                    label: item?.subModuleName
                  };
                })}
              onChange={onContactCheckboxChange}
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
              style={{ float: 'right', marginLeft: '15px' }}
              onClick={onSaveRegistrationDetailHandler}
              type="submit"
            >
              <span>Submit</span>
            </GenericLoadingButton>
          </Grid>
          <Grid item xs={12}>
            {Array.isArray(listGovtRegistration) && (
              <>
                <GenericDataGrid
                  rows={listGovtRegistration
                    ?.filter((item) => !item.isDeleted)
                    ?.map((item, index) => ({ ...item, id: index + 1 }))}
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
export default RegistrationDetail;
