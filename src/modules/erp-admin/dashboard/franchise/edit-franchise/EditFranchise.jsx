import { Grid, IconButton, Paper, Tooltip, Typography } from '@mui/material';
import { Fragment, useState } from 'react';
import { MdEdit } from 'react-icons/md';
import SubHeader from '../../../../../common-components/page-elements/SubHeader';
import GenericDivider from '../../../../../common-components/form-elements/genericDivider';
import GenericInput from '../../../../../common-components/form-elements/genericInput';
import GenericTextEditor from '../../../../../common-components/form-elements/genericTextEditor';
import GenericLoadingButton from '../../../../../common-components/form-elements/genericLoadingButton';
import GenericDropdown from '../../../../../common-components/form-elements/genericDropdown';
import { useParams } from 'react-router-dom';
import {
  requestToGetByIdFranchise,
  requestToUpdate
} from '../../../../../store/slices/FranchiseSlice';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import {
  updateBasicDetailValidationSchema,
  updateFranchiseAddressValidationSchema,
  updateFranchiseInitialValues
} from '../../../../../common-components/validator/franchise-validation/index';
import { requestToGetPickLocation } from '../../../../../store/slices/UtilsSlice';
import Toasty from '../../../../../common-components/form-elements/toasty';
import { MOBILE_REGEX } from '../../../../../utils/regular-expressions';

const FranchiseEdit = () => {
  const [franchiseName, setFranchiseName] = useState('');
  const [franchiseOwnerName, setFranchiseOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [GST, setGST] = useState('');
  const [address, setaddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [locality, setLocality] = useState('');
  const [pincode, setPincode] = useState('');

  const params = useParams();
  const dispatch = useDispatch();

  const addressFormik = useFormik({
    initialValues: {
      address,
      landmark,
      state,
      city,
      locality,
      pincode
    },
    validationSchema: updateFranchiseAddressValidationSchema
  });

  // const tncFormik = useFormik({
  //   initialValues: {
  //     // Add the appropriate initial values for the third section
  //   },
  //   validationSchema: // Add the appropriate validation schema for the third section,
  //   onSubmit: // Add the appropriate submit handler for the third section
  // });

  // const formik = useFormik({
  //   initialValues: {
  //     franchiseName,
  //     franchiseOwnerName,
  //     phone,
  //     email,
  //     website,
  //     GST,
  //     address,
  //     landmark,
  //     state,
  //     city,
  //     locality,
  //     pincode
  //   },

  //   validationSchema: updateFranchiseValidationSchema

  // })

  const {
    franchise: { franchiseById, isGetById },
    utils: { pickup }
  } = useSelector((res) => res);

  useEffect(() => {
    dispatch(requestToGetByIdFranchise(params.id));
  }, []);

  useEffect(() => {
    setFranchiseName(franchiseById?.franchiseName);
    setFranchiseOwnerName(franchiseById?.franchiseOwnerName);
    setPhone(franchiseById?.registeredMobile);
    setEmail(franchiseById?.email);
    setWebsite(franchiseById?.website);
    setGST(franchiseById?.gstNo);
    setaddress(franchiseById?.address);
    setLandmark(franchiseById?.landmark);
    setState(franchiseById?.state);
    setCity(franchiseById?.city);
    setLocality(franchiseById?.locality);
    setPincode(franchiseById?.pincode);
    dispatch(requestToGetPickLocation(franchiseById?.pincode));
    addressFormik.setFieldValue('pincode', pincode);
  }, [isGetById]);

  const onFranchiseNameChange = (evt) => {
    basicDetailFormik.setFieldValue('franchiseName', evt?.target?.value);
    setFranchiseName(evt.target.value);
  };
  const onFranchiseOwnerNameChange = (evt) => {
    setFranchiseOwnerName(evt.target.value);
  };
  const onPhoneChange = (evt) => {
    setPhone(evt.target.value);
  };
  const onEmailChange = (evt) => {
    setEmail(evt.target.value);
  };
  const onWebsiteChange = (evt) => {
    setWebsite(evt.target.value);
  };
  const onGstNoChange = (evt) => {
    setGST(evt.target.value);
  };

  const onAddressNameChange = (evt) => {
    setaddress(evt.target.value);
  };
  const onLandmarkChange = (evt) => {
    setLandmark(evt.target.value);
  };
  const onStateChange = (evt) => {
    setState(evt.target.value);
  };
  const onCityChange = (evt) => {
    setCity(evt.target.value);
  };
  const onLocalityChange = (evt) => {
    setLocality(evt.target.value);
  };
  const onPincodeChange = (evt) => {
    setPincode(evt.target.value);
    dispatch(requestToGetPickLocation(pincode));
    addressFormik.setFieldValue('pincode', pincode);
  };

  const basicDetailSubmitHandler = (e) => {
    console.log(basicDetailFormik, 'formik');
    // e.preventDefault();
    let payload = {
      franchiseName: franchiseName,
      franchiseOwnerName: franchiseOwnerName,
      registeredMobile: phone,
      email: email,
      address: address,
      landmark: landmark,
      state: state,
      city: city,
      locality: locality,
      landmark: landmark,
      pincode: pincode,
      gstNo: GST,
      website: website,
      franchiseId: params.id
    };
    dispatch(requestToUpdate(payload));
  };

  // *******form edit functionality*******
  const [editBasicDetail, setEditBasicDetail] = useState(true);
  const [editBranchAdd, setEditBranchAdd] = useState(true);
  const [editTnc, setEditTnc] = useState(true);
  const onClickHandlerBasicDetail = () => {
    setEditBasicDetail(!editBasicDetail);
  };
  const onClickHandlerBranchAdd = () => {
    setEditBranchAdd(!editBranchAdd);
  };
  const onClickHandlerTnc = () => {
    setEditTnc(!editTnc);
  };

  const basicDetailFormik = useFormik({
    initialValues: {
      franchiseName,
      franchiseOwnerName,
      phone,
      email,
      website,
      GST
    },
    validationSchema: updateBasicDetailValidationSchema
  });
  return (
    <Fragment>
      <SubHeader title={'Edit Franchise'} />
      <form onSubmit={basicDetailFormik.handleSubmit}>
        <Paper sx={{ p: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container sx={{ my: 1, justifyContent: 'space-between' }}>
                <Typography variant="h6" fontWeight={600}>
                  Basic Details
                </Typography>
                <Tooltip title={'Update Details'}>
                  <IconButton onClick={onClickHandlerBasicDetail}>
                    <MdEdit size={20} />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
            <GenericDivider />
            <Grid item xs={12} md={2}>
              <Typography variant="body1" sx={{ mt: 0.7 }} fontWeight={500}>
                Franchise Name
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBasicDetail ? 'editable-input' : ''}
                error={
                  basicDetailFormik?.errors?.franchiseName &&
                  basicDetailFormik?.touched?.franchiseName
                }
                helperText={
                  basicDetailFormik?.errors?.franchiseName &&
                  basicDetailFormik?.touched?.franchiseName &&
                  basicDetailFormik?.errors?.franchiseName
                }
                onBlur={basicDetailFormik?.handleBlur}
                onFocus={basicDetailFormik?.handleChange}
                onKeyUp={basicDetailFormik?.handleChange}
                inputProps={{
                  disabled: editBasicDetail
                }}
                onChange={onFranchiseNameChange}
                value={franchiseName}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" sx={{ mt: 0.7 }} fontWeight={500}>
                Franchise Owner Name
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBasicDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBasicDetail
                }}
                onChange={onFranchiseOwnerNameChange}
                value={franchiseOwnerName}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <Typography variant="body1" sx={{ mt: 0.7 }} fontWeight={500}>
                Mobile
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBasicDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBasicDetail
                }}
                onChange={onPhoneChange}
                value={phone}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" sx={{ mt: 0.7 }} fontWeight={500}>
                Website
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBasicDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBasicDetail
                }}
                onChange={onWebsiteChange}
                value={website}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" sx={{ mt: 0.7 }} fontWeight={500}>
                GST No
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBasicDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBasicDetail
                }}
                onChange={onGstNoChange}
                value={GST}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" sx={{ mt: 0.7 }} fontWeight={500}>
                Email
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBasicDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBasicDetail
                }}
                onChange={onEmailChange}
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <GenericLoadingButton
                onClick={basicDetailSubmitHandler}
                type="submit"
                sx={{ float: 'right', mt: 1 }}
              >
                <span>Update</span>
              </GenericLoadingButton>
            </Grid>
            {/* {isMessageDisplay && (<Toasty show={isMessageDisplay} message={message} type={messageType}/>)} */}
          </Grid>
        </Paper>
      </form>

      {/************* Address Sec **************/}
      <form onSubmit={addressFormik.handleSubmit}>
        <Paper sx={{ p: 4, my: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container sx={{ my: 1, justifyContent: 'space-between' }}>
                <Typography variant="h6" fontWeight={600}>
                  Franchise Address
                </Typography>
                <Tooltip title={'Update Details'}>
                  <IconButton onClick={onClickHandlerBranchAdd}>
                    <MdEdit size={20} />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
            <GenericDivider />
            <Grid item xs={12} md={2}>
              <Typography variant="body1" sx={{ mt: 0.7 }} fontWeight={500}>
                Address
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBranchAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBranchAdd
                }}
                onChange={onAddressNameChange}
                value={address}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" sx={{ mt: 0.7 }} fontWeight={500}>
                Landmark
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBranchAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBranchAdd
                }}
                onChange={onLandmarkChange}
                value={landmark}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" sx={{ mt: 0.7 }} fontWeight={500}>
                State
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                className={editBranchAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBranchAdd
                }}
                label={state}
                data={pickup?.state}
                onChange={onStateChange}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" sx={{ mt: 0.7 }} fontWeight={500}>
                City
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                className={editBranchAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBranchAdd
                }}
                label={city}
                data={pickup?.city}
                onChange={onCityChange}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" sx={{ mt: 0.7 }} fontWeight={500}>
                Locality
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                className={editBranchAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBranchAdd
                }}
                label={locality}
                data={pickup?.locality}
                onChange={onLocalityChange}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" sx={{ mt: 0.7 }} fontWeight={500}>
                Country
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBranchAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBranchAdd
                }}
                value={'INDIA'}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" sx={{ mt: 0.7 }} fontWeight={500}>
                Pincode
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBranchAdd ? 'editable-input' : ''}
                error={addressFormik?.errors?.pincode && addressFormik?.touched?.pincode}
                helperText={
                  addressFormik?.errors?.pincode &&
                  addressFormik?.touched?.pincode &&
                  addressFormik?.errors?.pincode
                }
                onBlur={addressFormik?.handleBlur}
                onFocus={addressFormik?.handleChange}
                onKeyUp={addressFormik?.handleChange}
                inputProps={{
                  disabled: editBranchAdd
                }}
                onChange={onPincodeChange}
                value={pincode}
              />
            </Grid>
            <Grid item xs={12}>
              <GenericLoadingButton
                type="submit"
                onClick={basicDetailSubmitHandler}
                sx={{ float: 'right', mt: 1 }}
              >
                <span>Update</span>
              </GenericLoadingButton>
            </Grid>
          </Grid>
        </Paper>
      </form>

      <form>
        <Paper sx={{ my: 2, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container sx={{ my: 1, justifyContent: 'space-between' }}>
                <Typography variant="h6" fontWeight={600}>
                  Company terms and conditions
                </Typography>
                <Tooltip title={'Update Details'}>
                  <IconButton onClick={onClickHandlerTnc}>
                    <MdEdit size={20} />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <GenericTextEditor
                className={editTnc ? 'editable-input' : ''}
                inputProps={{
                  disabled: editTnc
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <GenericLoadingButton type="submit" sx={{ float: 'right', mt: 1 }}>
                <span>Update</span>
              </GenericLoadingButton>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </Fragment>
  );
};

export default FranchiseEdit;
