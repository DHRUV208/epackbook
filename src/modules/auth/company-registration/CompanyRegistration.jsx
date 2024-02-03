import { Fragment, useEffect, useState } from 'react';
import SubHeader from '../../../common-components/page-elements/SubHeader';
import { Grid, Paper, Typography, FormHelperText } from '@mui/material';
import GenericInput from '../.././../common-components/form-elements/genericInput';
import GenericDropdown from '../../../common-components/form-elements/genericDropdown';
import GenericAutocomplete from '../../../common-components/form-elements/genericAutocomplete';
import GenericRadio from '../../../common-components/form-elements/genericRadio';
import GenericLoadingButton from '../../../common-components/form-elements/genericLoadingButton';
import GenericDatePicker from '../../../common-components/form-elements/genericDatePicker';
import { useDispatch, useSelector } from 'react-redux';
import LogoImage from '../../../Assets/Logos/epackbookLogoBlue.svg';
import { useFormik } from 'formik';
import dayjs from 'dayjs';
import Toasty from '../../../common-components/form-elements/toasty';
import {
  updateCompanyName,
  updateContactPerson,
  updateCompanyEmail,
  updatePincode,
  updateState,
  updateCity,
  updateLocality,
  updateAddress,
  updateCompanyType,
  updateGST,
  updateCompanyWebsite,
  updateIBA,
  updateIBACodeValidTill,
  requestToAddNewCompany,
  updateCompanyMobile,
  updatePanNo,
  updateFirmPanNo,
  updateCINNo,
  updateIncNo,
  updateIBAApprovalCode,
  resetAddCompanyDetails
} from '../../../store/slices/CompanyRegistrationSlice';
import {
  companyRegistrationInitialValues,
  companyRegistrationValidationSchema
} from '../../../common-components/validator/companyRegistration-validation';
import {
  requestToGetDropLocation,
  requestToGetPickLocation
} from '../../../store/slices/UtilsSlice';
import { Link, useNavigate } from 'react-router-dom';
const companyType = [
  {
    value: 'proprietorship',
    label: 'Proprietorship'
  },
  {
    value: 'partnershipFirm',
    label: 'Partnership Firm'
  },
  {
    value: 'pvtLtdCompany',
    label: 'Pvt. Ltd. Company'
  },
  {
    value: 'llp',
    label: 'LLP'
  }
];

const CompanyRegistration = () => {
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    auth: { loginSuccess, mobile },
    company: { addCompanyDetail, isResponseToNewCompany, companyDetails },
    utils: { pickup, drop }
  } = useSelector((state) => state);
  const formik = useFormik({
    initialValues: companyRegistrationInitialValues,
    validationSchema: companyRegistrationValidationSchema
  });

  const onNextHandler = () => {
    let payload = {
      authId: loginSuccess?.id,
      companyName: addCompanyDetail?.companyName,
      contactPerson: addCompanyDetail?.contactPerson,
      email: addCompanyDetail?.companyEmail,
      companyAddress: addCompanyDetail?.address,
      state: addCompanyDetail?.state,
      city: addCompanyDetail?.city,
      locality: addCompanyDetail?.locality,
      pincode: addCompanyDetail?.pincode,

      companyMobile: mobile,
      ibaApprovalCode: addCompanyDetail?.ibaApprovalCode,
      ibaValidDate: addCompanyDetail?.ibaCodeValidTill,
      companyWebite: addCompanyDetail?.companyWebsite,
      govRegdDetails: {
        companyType: addCompanyDetail?.companyType,
        companyGST: addCompanyDetail?.gst,
        IBAStatus: addCompanyDetail?.iba,
        IBAcode: addCompanyDetail?.ibaApprovalCode,
        IBAExpiry: addCompanyDetail?.ibaCodeValidTill,
        companyPAN: addCompanyDetail?.panNo,
        CINNumber: addCompanyDetail?.cinNo
      }
    };

    if (formik.isValid && formik.dirty) {
      dispatch(requestToAddNewCompany(payload));
      setIsMessageDisplay(true);
      setMessageType('success');
      setMessage('Company Registered Successfully');
      setTimeout(() => {
        setIsMessageDisplay(false);
        navigate('/auth/subscription-plan');
      }, 2000);
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Please fill form Correctly');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (isResponseToNewCompany && Object.keys(companyDetails)?.length) {
      navigate('/auth/subscription-plan');
      dispatch(resetAddCompanyDetails());
    }
  }, [companyDetails, dispatch, isResponseToNewCompany, navigate]);

  const onCompanyNameChange = (evt) => {
    formik.setFieldValue('addCompanyDetail.companyName', evt?.target?.value);
    dispatch(updateCompanyName(evt?.target?.value));
  };
  const onContactPersonChange = (evt) => {
    formik.setFieldValue('addCompanyDetail.contactPerson', evt?.target?.value);
    dispatch(updateContactPerson(evt?.target?.value));
  };
  const onCompanyEmailChange = (evt) => {
    formik.setFieldValue('addCompanyDetail.companyEmail', evt?.target?.value);
    dispatch(updateCompanyEmail(evt?.target?.value));
  };
  const onCompanyMobileChange = (evt) => {
    formik.setFieldValue('addCompanyDetail.companyMobile', evt?.target?.value);
    dispatch(updateCompanyMobile(evt.target.value));
  };
  const onPincodeChange = (evt) => {
    formik.setFieldValue('addCompanyDetail.pincode', evt?.target?.value);
    dispatch(requestToGetPickLocation(evt?.target?.value));
    if (evt?.target?.value.length === 6) {
    dispatch(updatePincode(evt?.target?.value));
  }
  };
  const onStateChange = (evt) => {
    dispatch(updateState(evt?.target?.value));
  };
  const onCityChange = (evt) => {
    dispatch(updateCity(evt?.target?.value));
  };
  const onLocalityChange = (evt) => {
    dispatch(updateLocality(evt?.target?.value));
  };
  const onAddressChange = (evt) => {
    formik.setFieldValue('addCompanyDetail.address', evt?.target?.value);
    dispatch(updateAddress(evt?.target?.value));
  };
  const onCompanyTypeChange = (evt) => {
    formik.setFieldValue('addCompanyDetail.companyType', evt?.target?.value);
    dispatch(updateCompanyType(evt?.target?.value));
  };
  const onPanNoChange = (evt) => {
    formik.setFieldValue('addCompanyDetail.panNo', evt.target.value.toUpperCase());
    dispatch(updatePanNo(evt.target.value.toUpperCase()));
  };
  const onFirmPanNoChange = (evt) => {
    formik.setFieldValue('addCompanyDetail.firmPanNo', evt.target.value.toUpperCase());
    dispatch(updateFirmPanNo(evt.target.value.toUpperCase()));
  };
  const onIncNoChange = (evt) => {
    formik.setFieldValue('addCompanyDetail.incNo', evt.target.value.toUpperCase());
    dispatch(updateIncNo(evt.target.value.toUpperCase()));
  };
  const onCinNoChange = (evt) => {
    formik.setFieldValue('addCompanyDetail.cinNo', evt.target.value.toUpperCase());
    dispatch(updateCINNo(evt.target.value.toUpperCase()));
  };
  const onGSTChange = (evt) => {
    formik.setFieldValue('addCompanyDetail.gstNo', evt.target.value.toUpperCase());
    dispatch(updateGST(evt.target.value.toUpperCase()));
  };
  const onCompanyWebsiteChange = (evt) => {
    formik.setFieldValue('addCompanyDetail.companyWebsite', evt?.target?.value);
    dispatch(updateCompanyWebsite(evt?.target?.value));
  };
  const onIBAChange = (evt) => {
    formik.setFieldValue('addCompanyDetail.iba', evt?.target?.value);
    dispatch(updateIBA(evt?.target?.value));
  };
  const onIBAAprovalChange = (evt) => {
    formik.setFieldValue('addCompanyDetail.ibaApprovalCode', evt.target.value.toUpperCase());
    dispatch(updateIBAApprovalCode(evt.target.value.toUpperCase()));
  };
  const onIBACodeChange = (evt) => {
    const { $D, $y, $M } = evt;
    const Date = `${$y}-${$M}-${$D}`;
    formik.setFieldValue('addCompanyDetail.ibaCodeValidTill', Date);
    dispatch(updateIBACodeValidTill(Date));
  };

  return (
    <Fragment>
      <SubHeader title={'Company Registration'} />
      <Paper sx={{ p: 4 }}>
        <Link>
          <img src={LogoImage} alt="logo" style={{ width: '180px' }} />
        </Link>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ my: 2 }}>
              <Typography variant="h6" fontWeight={600}>
                Enter Your Company Details
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericInput
                onChange={onCompanyNameChange}
                label={'Company Name'}
                error={
                  formik?.errors?.addCompanyDetail?.companyName &&
                  formik?.touched?.addCompanyDetail?.companyName
                }
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
              />
              <FormHelperText error>
                {formik?.errors?.addCompanyDetail?.companyName &&
                  formik?.touched?.addCompanyDetail?.companyName &&
                  formik?.errors?.addCompanyDetail?.companyName}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericInput
                onChange={onContactPersonChange}
                label={'Contact Person'}
                error={
                  formik?.errors?.addCompanyDetail?.contactPerson &&
                  formik?.touched?.addCompanyDetail?.contactPerson
                }
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
              />
              <FormHelperText error>
                {formik?.errors?.addCompanyDetail?.contactPerson &&
                  formik?.touched?.addCompanyDetail?.contactPerson &&
                  formik?.errors?.addCompanyDetail?.contactPerson}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericInput
                onChange={onCompanyEmailChange}
                label={'Company Email'}
                error={
                  formik?.errors?.addCompanyDetail?.companyEmail &&
                  formik?.touched?.addCompanyDetail?.companyEmail
                }
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
              />
              <FormHelperText error>
                {formik?.errors?.addCompanyDetail?.companyEmail &&
                  formik?.touched?.addCompanyDetail?.companyEmail &&
                  formik?.errors?.addCompanyDetail?.companyEmail}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericInput
                value={mobile}
                onChange={onCompanyMobileChange}
                label={'Company Mobile'}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <GenericInput
                    onChange={onPincodeChange}
                    label={'Pincode'}
                    error={
                      formik?.errors?.addCompanyDetail?.pincode &&
                      formik?.touched?.addCompanyDetail?.pincode
                    }
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleChange}
                  />
                  <FormHelperText error>
                    {formik?.errors?.addCompanyDetail?.pincode &&
                      formik?.touched?.addCompanyDetail?.pincode &&
                      formik?.errors?.addCompanyDetail?.pincode}
                  </FormHelperText>
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericDropdown data={pickup?.state} onChange={onStateChange} label={'State'} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericDropdown data={pickup?.city} onChange={onCityChange} label={'City'} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericAutocomplete
                    options={pickup?.locality}
                    onSelect={onLocalityChange}
                    label={'Locality'}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericInput
                label={'Address'}
                onChange={onAddressChange}
                multiline
                rows={3}
                error={
                  formik?.errors?.addCompanyDetail?.address &&
                  formik?.touched?.addCompanyDetail?.address
                }
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
              />
              <FormHelperText error>
                {formik?.errors?.addCompanyDetail?.address &&
                  formik?.touched?.addCompanyDetail?.address &&
                  formik?.errors?.addCompanyDetail?.address}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                label={'Company Type'}
                data={companyType}
                onChange={onCompanyTypeChange}
                error={
                  formik?.errors?.addCompanyDetail?.companyType &&
                  formik?.touched?.addCompanyDetail?.companyType
                }
                value={formik?.values?.addCompanyDetail?.companyType}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
              />
              <FormHelperText error>
                {formik?.errors?.addCompanyDetail?.companyType &&
                  formik?.touched?.addCompanyDetail?.companyType &&
                  formik?.errors?.addCompanyDetail?.companyType}
              </FormHelperText>
            </Grid>
            {addCompanyDetail?.companyType === 'proprietorship' ? (
              <Grid item xs={12} md={3}>
                <GenericInput
                  label="Enter PAN No"
                  onChange={onPanNoChange}
                  error={
                    formik?.errors?.addCompanyDetail?.panNo &&
                    formik?.touched?.addCompanyDetail?.panNo
                  }
                  onBlur={formik.handleBlur}
                  onKeyUp={formik.handleChange}
                  value={formik?.values.addCompanyDetail?.panNo}
                />
                <FormHelperText error>
                  {formik?.errors?.addCompanyDetail?.panNo &&
                    formik?.touched?.addCompanyDetail?.panNo &&
                    formik?.errors?.addCompanyDetail?.panNo}
                </FormHelperText>
              </Grid>
            ) : addCompanyDetail?.companyType === 'partnershipFirm' ? (
              <Grid item xs={12} md={3}>
                <GenericInput
                  label="Enter Firm PAN No"
                  onChange={onFirmPanNoChange}
                  value={formik?.values?.addCompanyDetail?.firmPanNo}
                  error={
                    formik?.errors?.addCompanyDetail?.firmPanNo &&
                    formik?.touched?.addCompanyDetail?.firmPanNo
                  }
                  onBlur={formik.handleBlur}
                  onKeyUp={formik.handleChange}
                />
                <FormHelperText error>
                  {formik?.errors?.addCompanyDetail?.firmPanNo &&
                    formik?.touched?.addCompanyDetail?.firmPanNo &&
                    formik?.errors?.addCompanyDetail?.firmPanNo}
                </FormHelperText>
              </Grid>
            ) : addCompanyDetail?.companyType === 'pvtLtdCompany' ? (
              <Grid item xs={12} md={3}>
                <GenericInput
                  label="Enter CIN No. or Incorporation No."
                  onChange={onIncNoChange}
                  error={
                    formik?.errors?.addCompanyDetail?.incNo &&
                    formik?.touched?.addCompanyDetail?.incNo
                  }
                  onBlur={formik.handleBlur}
                  onKeyUp={formik.handleChange}
                  value={formik?.values?.addCompanyDetail?.incNo}
                />
                <FormHelperText error>
                  {formik?.errors?.addCompanyDetail?.incNo &&
                    formik?.touched?.addCompanyDetail?.incNo &&
                    formik?.errors?.addCompanyDetail?.incNo}
                </FormHelperText>
              </Grid>
            ) : (
              <Grid item xs={12} md={3}>
                <GenericInput
                  label="Enter Incorporation No."
                  onChange={onCinNoChange}
                  error={
                    formik?.errors?.addCompanyDetail?.cinNo &&
                    formik?.touched?.addCompanyDetail?.cinNo
                  }
                  onBlur={formik.handleBlur}
                  onKeyUp={formik.handleChange}
                  value={formik?.values?.addCompanyDetail?.cinNo}
                />
                <FormHelperText error>
                  {formik?.errors?.addCompanyDetail?.cinNo &&
                    formik?.touched?.addCompanyDetail?.cinNo &&
                    formik?.errors?.addCompanyDetail?.cinNo}
                </FormHelperText>
              </Grid>
            )}

            <Grid item xs={12} md={3}>
              <GenericInput
                onChange={onGSTChange}
                label={'GST No'}
                error={
                  formik?.errors?.addCompanyDetail?.gstNo &&
                  formik?.touched?.addCompanyDetail?.gstNo
                }
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                value={formik?.values?.addCompanyDetail?.gstNo}
              />
              <FormHelperText error>
                {formik?.errors?.addCompanyDetail?.gstNo &&
                  formik?.touched?.addCompanyDetail?.gstNo &&
                  formik?.errors?.addCompanyDetail?.gstNo}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericInput
                label={'Company Website'}
                onChange={onCompanyWebsiteChange}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                error={
                  formik?.errors?.addCompanyDetail?.companyWebsite &&
                  formik?.touched?.addCompanyDetail?.companyWebsite
                }
              />
              <FormHelperText error>
                {formik?.errors?.addCompanyDetail?.companyWebsite &&
                  formik?.touched?.addCompanyDetail?.companyWebsite &&
                  formik?.errors?.addCompanyDetail?.companyWebsite}
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <Typography variant={'h6'} fontWeight={600} sx={{ my: 1 }}>
                IBA Approval
              </Typography>
              <GenericRadio
                orientation="row"
                onChange={onIBAChange}
                name="iba-approval"
                options={[
                  { value: 'approved', label: 'Approved' },
                  { value: 'not-approved', label: 'Not Approved' }
                ]}
                defaultValue="not-approved"
              />
            </Grid>
            {addCompanyDetail?.iba === 'approved' && (
              <Grid item xs={12} md={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <GenericInput
                      label={'IBA Approval Code'}
                      onChange={onIBAAprovalChange}
                      error={
                        formik?.errors?.addCompanyDetail?.ibaApprovalCode &&
                        formik?.touched?.addCompanyDetail?.ibaApprovalCode
                      }
                      onBlur={formik.handleBlur}
                      onKeyUp={formik.handleChange}
                      value={formik?.values?.addCompanyDetail?.ibaApprovalCode}
                    />
                    <FormHelperText error>
                      {formik?.errors?.addCompanyDetail?.ibaApprovalCode &&
                        formik?.touched?.addCompanyDetail?.ibaApprovalCode &&
                        formik?.errors?.addCompanyDetail?.ibaApprovalCode}
                    </FormHelperText>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <GenericDatePicker
                      label={'IBA Code valid Till'}
                      defaultValue={dayjs(new Date())}
                      onAccept={onIBACodeChange}
                      disablePast
                      closeOnSelect={true}
                      error={
                        formik?.errors?.addCompanyDetail?.ibaCodeValidTill &&
                        formik?.touched?.addCompanyDetail?.ibaCodeValidTill
                      }
                      onBlur={formik.handleBlur}
                      onKeyUp={formik.handleChange}
                      className={
                        formik?.errors?.addCompanyDetail?.ibaCodeValidTill &&
                        formik?.touched?.addCompanyDetail?.ibaCodeValidTill &&
                        'error-valid-till'
                      }
                      //  sx={{border:'red 1px solid', borderRadius:'4px'}}
                    />

                    <FormHelperText error>
                      {formik?.errors?.addCompanyDetail?.ibaCodeValidTill &&
                        formik?.touched?.addCompanyDetail?.ibaCodeValidTill &&
                        formik?.errors?.addCompanyDetail?.ibaCodeValidTill}
                    </FormHelperText>
                  </Grid>
                </Grid>
              </Grid>
            )}

            <Grid item md={12} xs={12}>
              <GenericLoadingButton
                onClick={onNextHandler}
                sx={{ my: 2, float: 'right' }}
                type="submit"
              >
                Next
              </GenericLoadingButton>
            </Grid>
            {isMessageDisplay && (
              <Toasty show={isMessageDisplay} message={message} type={messageType} />
            )}
          </Grid>
        </form>
      </Paper>
    </Fragment>
  );
};
export default CompanyRegistration;
