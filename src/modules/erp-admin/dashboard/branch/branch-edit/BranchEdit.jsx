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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  requestToGetBranchById,
  requestToUpdateBranch
} from '../../../../../store/slices/BranchSlice';
import { requestToGetPickLocation } from '../../../../../store/slices/UtilsSlice';

const BranchEdit = () => {
  const [branchName, setBranchName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [GST, setGST] = useState('');
  const [franchiseOwnerName, setFranchiseOwnerName] = useState('');
  const [address, setaddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [locality, setLocality] = useState('');
  const [pincode, setPincode] = useState('');

  const params = useParams();
  const dispatch = useDispatch();
  const {
    branch: { branchById, isGetById },
    utils: { pickup }
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(requestToGetBranchById(params?.id));
  }, []);

  useEffect(() => {
    setBranchName(branchById?.branchName);
    setFranchiseOwnerName(branchById?.franchiseOwnerName);
    setPhone(branchById?.registeredMobile);
    setEmail(branchById?.email);
    setWebsite(branchById?.website);
    setGST(branchById?.gstNo);
    setaddress(branchById?.address);
    setLandmark(branchById?.landmark);
    setState(branchById?.state);
    setCity(branchById?.city);
    setLocality(branchById?.locality);
    setPincode(branchById?.pincode);
  }, [isGetById]);

  const onBranchNameChange = (evt) => {
    setBranchName(evt.target.value);
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

  const basicDetailSubmitHandler = (e) => {
    e.preventDefault();
    let payload = {
      branchName: branchName,

      registeredMobile: phone,
      email: email,
      gstNo: GST,
      website: website,
      branchId: params.id
    };

    dispatch(requestToUpdateBranch(payload));
  };

  const onAddressChange = (evt) => {
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
    if (evt?.target?.value.length === 6) {
    dispatch(requestToGetPickLocation(evt?.target?.value));
    }
    setPincode(evt.target.value);
  };

  const adressSubmitHandler = (e) => {
    e.preventDefault();
    let payload = {
      address: address,
      landmark: landmark,
      state: state,
      city: city,
      locality: locality,
      landmark: landmark,
      pincode: pincode,
      gstNo: GST,
      website: website,
      branchId: params.id
    };

    dispatch(requestToUpdateBranch(payload));
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
  return (
    <Fragment>
      <SubHeader title={'Edit Branch'} />

      <form>
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
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
                Branch Name
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBasicDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBasicDetail
                }}
                value={branchName}
                onChange={onBranchNameChange}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
                Manager Name
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
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
                Phone
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBasicDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBasicDetail
                }}
                value={phone}
                onChange={onPhoneChange}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
                Website
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBasicDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBasicDetail
                }}
                value={website}
                onChange={onWebsiteChange}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
                GST No
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBasicDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBasicDetail
                }}
                value={GST}
                onChange={onGstNoChange}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
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

      {/************* Address Sec **************/}

      <form>
        <Paper sx={{ p: 4, my: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container sx={{ my: 1, justifyContent: 'space-between' }}>
                <Typography variant="h6" fontWeight={600}>
                  Branch Address
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
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
                Address
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBranchAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBranchAdd
                }}
                value={address}
                onChange={onAddressChange}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
                Landmark
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBranchAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBranchAdd
                }}
                value={landmark}
                onChange={onLandmarkChange}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
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
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
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
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
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
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
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
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
                Pincode
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBranchAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBranchAdd
                }}
                value={pincode}
                onChange={onPincodeChange}
              />
            </Grid>
            <Grid item xs={12}>
              <GenericLoadingButton
                type="submit"
                sx={{ float: 'right', mt: 1 }}
                onClick={adressSubmitHandler}
              >
                <span>Update</span>
              </GenericLoadingButton>
            </Grid>
          </Grid>
        </Paper>
      </form>

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
            <GenericLoadingButton sx={{ float: 'right', mt: 1 }}>
              <span>Update</span>
            </GenericLoadingButton>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};

export default BranchEdit;
