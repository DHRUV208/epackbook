import { Box, Grid, Typography } from '@mui/material';
import { Fragment } from 'react';
import GenericInput from '../../../../../common-components/form-elements/genericInput';
import GenericDropdown from '../../../../../common-components/form-elements/genericDropdown';
import GenericRadio from '../../../../../common-components/form-elements/genericRadio';
import GenericLoadingButton from '../../../../../common-components/form-elements/genericLoadingButton';
import { useDispatch } from 'react-redux';
import {
  updateAddress,
  updateApprovalAuthority,
  updateAuthorityMobileNo,
  updateAuthorityName,
  updateAuthorityPersonEmail,
  updateCity,
  updateCompanyEmail,
  updateCompanyGst,
  updateCompanyName,
  updateLocality,
  updateOtherContactNo,
  updatePincode,
  updateState,
  updateEntity,
  updateBranchName,
  updatePrefix,
  updateSuffix
} from '../../../../../store/slices/ToBeBilledSlice';

const TobeBilledCustomer = () => {
  const branchType = [
    { value: '1', label: 'Branch 1' },
    { value: '2', label: 'Branch 2' }
  ];
  const dispatch = useDispatch();
  const onChangeCompanyName = (evt) => {
    const { value } = evt.target;
    dispatch(updateCompanyName(value));
  };
  const onChangeApprovalAuthority = (evt) => {
    const { value } = evt.target;
    dispatch(updateApprovalAuthority(value));
  };
  const onChangeAuthorityName = (evt) => {
    const { value } = evt.target;
    dispatch(updateAuthorityName(value));
  };
  const onChangeAuthorityMobile = (evt) => {
    const { value } = evt.target;
    dispatch(updateAuthorityMobileNo(value));
  };
  const onChangePincode = (evt) => {
    const { value } = evt.target;
    dispatch(updatePincode(value));
  };
  const onChangeState = (evt) => {
    const { value } = evt.target;
    dispatch(updateState(value));
  };
  const onChangeCity = (evt) => {
    const { value } = evt.target;
    dispatch(updateCity(value));
  };
  const onChangeLocality = (evt) => {
    const { value } = evt.target;
    dispatch(updateLocality(value));
  };
  const onChangeAddress = (evt) => {
    const { value } = evt.target;
    dispatch(updateAddress(value));
  };
  const onChangeGst = (evt) => {
    const { value } = evt.target;
    dispatch(updateCompanyGst(value));
  };
  const onChanhgeCompanyEmail = (evt) => {
    const { value } = evt.target;
    dispatch(updateCompanyEmail(value));
  };
  const onChangeOtherContactNo = (evt) => {
    const { value } = evt.target;
    dispatch(updateOtherContactNo(value));
  };
  const onChangeAuthorityEmail = (evt) => {
    const { value } = evt.target;
    dispatch(updateAuthorityPersonEmail(value));
  };
  const onChangeEntity = (evt) => {
    const { value } = evt.target;
    dispatch(updateEntity(value));
  };
  const onChangeBranch = (evt) => {
    const { value } = evt.target;
    dispatch(updateBranchName(value));
  };
  const onChangePrefix = (evt) => {
    const { value } = evt.target;
    dispatch(updatePrefix(value));
  };
  const onChangeSuffix = (evt) => {
    const { value } = evt.target;
    dispatch(updateSuffix(value));
  };
  return (
    <Fragment>
      <Box sx={{ p: 3.5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <GenericInput onChange={onChangeCompanyName} label={'Company Name'} />
          </Grid>
          <Grid item xs={12} md={3}>
            <GenericDropdown
              onChange={onChangeApprovalAuthority}
              label={'Approval Authority'}
              data={branchType}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <GenericInput onChange={onChangeAuthorityName} label={'Authority Name'} />
          </Grid>
          <Grid item xs={12} md={3}>
            <GenericInput onChange={onChangeAuthorityMobile} label={'Authority Mobile Number'} />
          </Grid>
          <Grid item xs={12} md={3}>
            <GenericInput onChange={onChangePincode} label={'Pincode'} />
          </Grid>
          <Grid item xs={12} md={3}>
            <GenericDropdown onChange={onChangeState} label={'State'} />
          </Grid>
          <Grid item xs={12} md={3}>
            <GenericDropdown onChange={onChangeCity} label={'City'} />
          </Grid>
          <Grid item xs={12} md={3}>
            <GenericDropdown onChange={onChangeLocality} label={'Locality'} />
          </Grid>
          <Grid item xs={12} md={6}>
            <GenericInput onChange={onChangeAddress} label={'Address'} multiline rows={3.5} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <GenericInput onChange={onChangeGst} label={'Company GST'} />
              </Grid>
              <Grid item xs={12} md={6}>
                <GenericInput onChange={onChanhgeCompanyEmail} label={'Company Email'} />
              </Grid>
              <Grid item xs={12} md={6}>
                <GenericInput onChange={onChangeOtherContactNo} label={'Other Contact Number'} />
              </Grid>
              <Grid item xs={12} md={6}>
                <GenericInput onChange={onChangeAuthorityEmail} label={'Authority Person Email'} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography variant="h6">Want To Create Separate Bilty Series</Typography>
          </Grid>
          <Grid item xs={12}>
            <GenericRadio
              orientation="row"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' }
              ]}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <GenericDropdown onChange={onChangeEntity} label={'Choose Entity'} data={branchType} />
          </Grid>
          <Grid item xs={12} md={3}>
            <GenericDropdown onChange={onChangeBranch} label={'Branch Name'} />
          </Grid>
          <Grid item xs={12} md={3}>
            <GenericInput onChange={onChangePrefix} label={'Prefix'} />
          </Grid>
          <Grid item xs={12} md={3}>
            <GenericInput onChange={onChangeSuffix} label={'Suffix (initial Value)'} />
          </Grid>
          <Grid item xs={12}>
            <GenericLoadingButton sx={{ my: 2, float: 'right' }}>
              <span>save</span>
            </GenericLoadingButton>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};
export default TobeBilledCustomer;
