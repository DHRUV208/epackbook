import { Fragment, useEffect, useState } from 'react';
import SubHeader from '../../../../../common-components/page-elements/SubHeader';
import { Box, Divider, Grid, IconButton, Paper, Tooltip, Typography } from '@mui/material';
import { MdEdit } from 'react-icons/md';
import GenericDropdown from '../../../../../common-components/form-elements/genericDropdown';
import GenericImagePicker from '../../../../../common-components/form-elements/genericImagePicker';
import GenericLoadingButton from '../../../../../common-components/form-elements/genericLoadingButton';
import GenericInput from '../../../../../common-components/form-elements/genericInput';
import GenericSignaturePad from '../../../../../common-components/form-elements/genericSignaturePad';
import GenericTextEditor from '../../../../../common-components/form-elements/genericTextEditor';
import GenericDivider from '../../../../../common-components/form-elements/genericDivider';
import { useSelector, useDispatch } from 'react-redux';
import { requestToGetPickLocation } from '../../../../../store/slices/UtilsSlice';
import {
  requestToUpdateCompany,
  requestToGetCompanyDetails
} from '../../../../../store/slices/CompanyRegistrationSlice';

const getLicenceImage = (data) => {
  // console.log(data);
};

const PackerProfile = () => {
  const {
    company: { companyDetails },
    company: {
      companyDetails: { govRegdDetails }
    },
    utils: { pickup }
  } = useSelector((state) => state);

  console.log('first', govRegdDetails);

  console.log('companyDetails', companyDetails);
  const dispatch = useDispatch();
  const [imageWidth, setImageWidth] = useState('100%');
  const [signatureImage, setSignatureImage] = useState(
    'https://t4.ftcdn.net/jpg/00/00/42/95/240_F_429547_YJTlwk2Ld5kYDAbtCUwFgzmatgUHEg.jpg'
  );

  const [companyName, setCompanyName] = useState(companyDetails?.companyName);
  const onCompanyNameChange = (evt) => {
    setCompanyName(evt.target.value);
  };
  const [contactPersonName, setContactPersonName] = useState(companyDetails?.contactPerson);
  const onContactPersonChange = (evt) => {
    setContactPersonName(evt.target.value);
  };
  const [companyPunchline, setCompanyPunchline] = useState(companyDetails?.punchline);
  const onCompanyPunchlineChange = (evt) => {
    setCompanyPunchline(evt.target.value);
  };
  const [website, setWebsite] = useState(companyDetails?.companyWebite);
  const onWebsiteChange = (evt) => {
    setWebsite(evt.target.value);
  };
  const [mobile, setMobile] = useState(companyDetails?.companyMobile);
  const onMobileChange = (evt) => {
    setMobile(evt.target.value);
  };
  const [email, setEmail] = useState(companyDetails?.email);
  const onEmailChange = (evt) => {
    setEmail(evt.target.value);
  };
  const [landline, setLandline] = useState('');
  const onLandline = (evt) => {
    setLandline(evt.target.value);
  };
  const [tollFree, setTollfree] = useState('');
  const onTollfreeChange = (evt) => {
    setTollfree(evt.target.value);
  };
  const [altNumber, setAltNumber] = useState();
  const onAltNumberChange = (evt) => {
    setAltNumber(evt.target.value);
  };
  const [address, setAddress] = useState(companyDetails?.companyAddress);
  const onAddressChange = (evt) => {
    setAddress(evt.target.value);
  };
  const [landmark, setLandmark] = useState('');
  const onLandmarkChange = (evt) => {
    setLandmark(evt.target.value);
  };
  const [state, setState] = useState(companyDetails?.state);
  const onStateChange = (evt) => {
    setState(evt.target.value);
  };
  const [city, setCity] = useState(companyDetails?.city);
  const onCityChange = (evt) => {
    setCity(evt.target.value);
  };
  const [locality, setLocality] = useState(companyDetails?.locality);
  const onLocalityChange = (evt) => {
    setLocality(evt.target.value);
  };
  const [pincode, setPincode] = useState(companyDetails?.pincode);
  const onPincodeChange = (evt) => {
    setPincode(evt.target.value);
    if (evt?.target?.value.length === 6) {
    dispatch(requestToGetPickLocation(evt?.target?.value));
    }
  };
  const [gstNo, setGSTNo] = useState(govRegdDetails?.companyGST);
  const onGSTNoChange = (evt) => {
    setGSTNo(evt.target.value);
  };
  const [isoNo, setISONo] = useState('');
  const onISONoChange = (evt) => {
    setISONo(evt.target.value);
  };
  const [udyamNo, setUdyamNo] = useState('');
  const onUdyamNoChange = (evt) => {
    setUdyamNo(evt.target.value);
  };
  const [companyType, setCompanyType] = useState(govRegdDetails?.companyType);
  const onCompanyTypeChange = (evt) => {
    setCompanyType(evt.target.value);
  };
  const [shopActNo, setShopActNo] = useState('');
  const onShopActNoChange = (evt) => {
    setShopActNo(evt.target.value);
  };
  const [panNo, setPanNo] = useState(companyDetails?.panNo);
  const onPanNoChange = (evt) => {
    setPanNo(evt.target.value);
  };
  const [IBACode, setIbaCode] = useState(govRegdDetails?.IBAcode);
  const onIbaCodeChange = (evt) => {
    setIbaCode(evt.target.value);
  };
  const [IBAExpiry, setIbaExpiry] = useState(govRegdDetails?.IBAExpiry);
  const onIbaExpiryChange = (evt) => {
    setIbaExpiry(evt.target.value);
  };
  const [bankName, setBankName] = useState('');
  const onBankNameChange = (evt) => {
    setBankName(evt.target.value);
  };
  const [bankIfsc, setBankIfsc] = useState('');
  const onBankIFScChange = (evt) => {
    setBankIfsc(evt.target.value);
  };
  const [beneficiaryName, setBeneficiaryName] = useState('');
  const onBeneficiaryNameChange = (evt) => {
    setBeneficiaryName(evt.target.value);
  };
  const [accountNumber, setAccountNumber] = useState('');
  const onAccountNumberChange = (evt) => {
    setAccountNumber(evt.target.value);
  };
  const [paytm, setPaytm] = useState('');
  const onPaytmChange = (evt) => {
    setPaytm(evt.target.value);
  };
  const [googlePay, setGooglePay] = useState('');
  const onGooglePayChange = (evt) => {
    setGooglePay(evt.target.value);
  };

  const [signature, setSignature] = useState(companyDetails?.signature);
  const onSignatureChange = (evt) => {
    setSignature(evt.target.value);
  };

  const [editable, setEditable] = useState(true);
  const [editableAdd, setEditableAdd] = useState(true);
  const [editableRegDetail, setEditableRegDetail] = useState(true);
  const [editableAccDetail, setEditableAccDetail] = useState(true);
  const [editableUpiDetail, setEditableUpiDetail] = useState(true);
  const onClickHandlerBasicDetail = () => {
    setEditable(!editable);
  };
  const onClickHandlerAddress = () => {
    setEditableAdd(!editableAdd);
  };
  const onClickHandlerRegDetail = () => {
    setEditableRegDetail(!editableRegDetail);
  };
  const onClickHandlerAccDetail = () => {
    setEditableAccDetail(!editableAccDetail);
  };
  const onClickHandlerUpiDetail = () => {
    setEditableUpiDetail(!editableUpiDetail);
  };
  const getImage = (data) => {
    setSignatureImage(data?.imageUrl);
    setImageWidth(data?.width);
  };

  const basicDetailSubmitHandler = (e) => {
    e.preventDefault();
    const payload = {
      _id: companyDetails._id,
      companyName: companyName,
      contactPerson: contactPersonName,
      punchLine: companyPunchline,
      email: email,
      companyMobile: mobile,
      companyWebite: website
    };
    dispatch(requestToUpdateCompany(payload));
  };

  const addressSubmitHandler = (e) => {
    e.preventDefault();
    const payload = {
      _id: companyDetails._id,
      companyName: companyName,
      companyAddress: address,
      contactPerson: contactPersonName,
      email: email,
      state: state,
      city: city,
      pincode: pincode,
      locality: locality,
      landmark: landmark
    };
    dispatch(requestToUpdateCompany(payload));
  };

  return (
    <Fragment>
      <Box>
        <SubHeader title={'Packer Profile'} />
      </Box>

      <form>
        <Paper sx={{ padding: '30px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container sx={{ justifyContent: 'space-between' }}>
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
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Company Name
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={'editable-input'}
                inputProps={{
                  disabled: editable
                }}
                // onChange={onCompanyNameChange}
                value={companyName}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Contact Person Name
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={'editable-input'}
                inputProps={{
                  disabled: editable
                }}
                // onChange={onContactPersonChange}
                value={contactPersonName}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Regd. Mobile No.
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={'editable-input'}
                inputProps={{
                  disabled: editable
                }}
                // onChange={onMobileChange}
                value={mobile}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Email
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={'editable-input'}
                inputProps={{
                  disabled: editable
                }}
                // onChange={onEmailChange}
                value={email}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Company Punch Line
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editable ? 'editable-input' : ''}
                inputProps={{
                  disabled: editable
                }}
                value={companyPunchline || 'NA'}
                onChange={onCompanyPunchlineChange}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Website
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editable ? 'editable-input' : ''}
                inputProps={{
                  disabled: editable
                }}
                onChange={onWebsiteChange}
                value={website}
              />
            </Grid>

            <Grid item xs={12}>
              <GenericLoadingButton
                onClick={basicDetailSubmitHandler}
                type="submit"
                sx={{ my: 3, float: 'right' }}
              >
                <span>update</span>
              </GenericLoadingButton>
            </Grid>
          </Grid>
        </Paper>
      </form>

      <form>
        <Paper sx={{ padding: '30px', my: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h6" fontWeight={600}>
                  Address
                </Typography>

                <Tooltip title={'Update Details'}>
                  <IconButton onClick={onClickHandlerAddress}>
                    <MdEdit size={20} />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
            <GenericDivider />

            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Pincode
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editableAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editableAdd
                }}
                value={pincode}
                onChange={onPincodeChange}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                State
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                className={editableAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editableAdd
                }}
                label={state}
                data={pickup?.state}
                onChange={onStateChange}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                City
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                className={editableAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editableAdd
                }}
                label={city}
                data={pickup?.city}
                onChange={onCityChange}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Locality
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                className={editableAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editableAdd
                }}
                label={locality}
                data={pickup?.locality}
                onChange={onLocalityChange}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Address
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editableAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editableAdd
                }}
                value={address}
                onChange={onAddressChange}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Landmark
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editableAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editableAdd
                }}
                value={landmark}
                onChange={onLandmarkChange}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Country
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editableAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editableAdd
                }}
                value={'INDIA'}
              />
            </Grid>
            {/* <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                State
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                className={editableAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editableAdd
                }}
                label={state}
                data={pickup?.state}
                onChange={onStateChange}
              />
            </Grid> */}
            {/* <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                City
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                className={editableAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editableAdd
                }}
                label={city}
                data={pickup?.city}
                onChange={onCityChange}
              />
            </Grid> */}
            {/* <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Locality
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericDropdown
                className={editableAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editableAdd
                }}
                label={locality}
                data={pickup?.locality}
                onChange={onLocalityChange}
              />
            </Grid> */}
            {/* <Grid item xs={12} md={2}>
              <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
                Pincode
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editableAdd ? 'editable-input' : ''}
                inputProps={{
                  disabled: editableAdd
                }}
                value={pincode}
                onChange={onPincodeChange}
              />
            </Grid> */}

            <Grid item xs={12}>
              <GenericLoadingButton
                onClick={addressSubmitHandler}
                type="submit"
                sx={{ my: 3, float: 'right' }}
              >
                <span>update</span>
              </GenericLoadingButton>
            </Grid>
          </Grid>
        </Paper>
      </form>

      <Paper sx={{ padding: '30px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container sx={{ justifyContent: 'space-between' }}>
              <Typography variant="h6" fontWeight={600}>
                Registration Details
              </Typography>
              <Tooltip title={'Update Details'}>
                {/* <IconButton >
                  <MdEdit size={20} />
                </IconButton> */}
              </Tooltip>
            </Grid>
          </Grid>
          <GenericDivider />

          <Grid item xs={12} md={2}>
            <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
              Company Type
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <GenericInput
              className={editableRegDetail ? 'editable-input' : ''}
              inputProps={{
                disabled: editableRegDetail
              }}
              value={companyType || 'NA'}
              onChange={onCompanyTypeChange}
            />
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
              PAN / CIN No.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <GenericInput
              className={editableRegDetail ? 'editable-input' : ''}
              inputProps={{
                disabled: editableRegDetail
              }}
              value={panNo || 'NA'}
              onChange={onPanNoChange}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
              GST No.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <GenericInput
              className={editableRegDetail ? 'editable-input' : ''}
              inputProps={{
                disabled: editableRegDetail
              }}
              value={gstNo || 'NA'}
              onChange={onGSTNoChange}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
              ISO No.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <GenericInput
              className={editableRegDetail ? 'editable-input' : ''}
              inputProps={{
                disabled: editableRegDetail
              }}
              value={isoNo || 'NA'}
              onChange={onISONoChange}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
              Udyam Regd. No.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <GenericInput
              className={editableRegDetail ? 'editable-input' : ''}
              inputProps={{
                disabled: editableRegDetail
              }}
              value={udyamNo || 'NA'}
              onChange={onUdyamNoChange}
            />
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
              Shop Act No.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <GenericInput
              className={editableRegDetail ? 'editable-input' : ''}
              inputProps={{
                disabled: editableRegDetail
              }}
              onChange={onShopActNoChange}
              value={shopActNo || 'NA'}
            />
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
              IBA Code
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <GenericInput
              className={editableRegDetail ? 'editable-input' : ''}
              inputProps={{
                disabled: editableRegDetail
              }}
              value={IBACode || 'NA'}
              onChange={onIbaCodeChange}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
              IBA Expiry
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <GenericInput
              className={editableRegDetail ? 'editable-input' : ''}
              inputProps={{
                disabled: editableRegDetail
              }}
              value={IBAExpiry || 'NA'}
              onChange={onIbaExpiryChange}
            />
          </Grid>
          {/* <Grid item xs={12}>
            <GenericLoadingButton sx={{ my: 3, float: 'right' }}>
              <span>update</span>
            </GenericLoadingButton>
          </Grid> */}
        </Grid>
      </Paper>
      {/* <Paper sx={{ padding: '30px', my: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container sx={{ justifyContent: 'space-between' }}>
              <Typography variant="h6" fontWeight={600}>
                Account Details
              </Typography>
              <Tooltip title={'Update Details'}>
                <IconButton onClick={onClickHandlerAccDetail}>
                  <MdEdit size={20} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
          <GenericDivider />
          <Grid item xs={12} md={2}>
            <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
              Bank Name
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <GenericInput
              className={editableAccDetail ? 'editable-input' : ''}
              inputProps={{
                disabled: editableAccDetail
              }}
              value={bankName}
              onChange={onBankNameChange}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
              Bank IFSC
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <GenericInput
              className={editableAccDetail ? 'editable-input' : ''}
              inputProps={{
                disabled: editableAccDetail
              }}
              value={bankIfsc}
              onChange={onBankIFScChange}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
              Beneficiary Name
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <GenericInput
              className={editableAccDetail ? 'editable-input' : ''}
              inputProps={{
                disabled: editableAccDetail
              }}
              value={beneficiaryName}
              onChange={onBeneficiaryNameChange}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
              Account Number
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <GenericInput
              className={editableAccDetail ? 'editable-input' : ''}
              inputProps={{
                disabled: editableAccDetail
              }}
              value={accountNumber}
              onChange={onAccountNumberChange}
            />
          </Grid>
          <Grid item xs={12}>
            <GenericLoadingButton sx={{ my: 3, float: 'right' }}>
              <span>update</span>
            </GenericLoadingButton>
          </Grid>
        </Grid>
      </Paper> */}
      {/* <Paper sx={{ padding: '30px', my: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container sx={{ justifyContent: 'space-between' }}>
              <Typography variant="h6" fontWeight={600}>
                UPI Details
              </Typography>
              <Tooltip title={'Update Details'}>
                <IconButton onClick={onClickHandlerUpiDetail}>
                  <MdEdit size={20} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
          <GenericDivider />
          <Grid item xs={12} md={3}>
            <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
              Paytm
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <GenericInput
              className={editableUpiDetail ? 'editable-input' : ''}
              inputProps={{
                disabled: editableUpiDetail
              }}
              value={paytm}
              onChange={onPaytmChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="body1" fontWeight={600} sx={{ mt: 0.7 }}>
              Google Pay
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <GenericInput
              className={editableUpiDetail ? 'editable-input' : ''}
              inputProps={{
                disabled: editableUpiDetail
              }}
              value={googlePay}
              onChange={onGooglePayChange}
            />
          </Grid>
          <Grid item xs={12}>
            <GenericLoadingButton sx={{ my: 3, float: 'right' }}>
              <span>update</span>
            </GenericLoadingButton>
          </Grid>
        </Grid>
      </Paper> */}
      <Paper sx={{ padding: '30px', my: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container sx={{ justifyContent: 'space-between' }}>
              <Typography variant="h6" fontWeight={600}>
                Packer's Signature
              </Typography>
              <Tooltip title={'Update Details'}>
                {/* <IconButton>
                  <MdEdit size={20} />
                </IconButton> */}
              </Tooltip>
            </Grid>
          </Grid>
          <GenericDivider />
          {/* <Grid item xs={12} md={6}>
            <GenericSignaturePad getImage={getImage} />
          </Grid> */}
          <Grid item md={4} xs={12}>
            <img src={signatureImage} height={165} width={imageWidth} alt="" loading="lazy" />
          </Grid>
          <Grid item xs={12}>
            {/* <GenericLoadingButton sx={{ my: 3, float: 'right' }}>
              <span>update</span>
            </GenericLoadingButton> */}
          </Grid>
        </Grid>
      </Paper>
      {/* <Paper sx={{ padding: '30px', my: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container sx={{ my: 1, justifyContent: 'space-between' }}>
              <Typography variant="h6" fontWeight={600}>
                Company Terms & Conditions
              </Typography>
              <Tooltip title={'Update Details'}>
                <IconButton>
                  <MdEdit size={20} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
          <GenericDivider />
          <Grid item xs={12} md={12}>
            <GenericTextEditor />
          </Grid>
          <Grid item xs={12}>
            <GenericLoadingButton sx={{ my: 3, float: 'right' }}>
              <span>update</span>
            </GenericLoadingButton>
          </Grid>
        </Grid>
      </Paper> */}
    </Fragment>
  );
};
export default PackerProfile;
