import React, { Fragment, useEffect, useState } from 'react';
import { Box, Card, Grid, Paper, Typography } from '@mui/material';
import image from '../../../../src/Assets/Images/loginImg.svg';
import Logoimg from '../../../Assets/Logos/epackbookLogoBlue.svg';
import GenericInput from '../../../common-components/form-elements/genericInput';
import GenericDropdown from '../../../common-components/form-elements/genericDropdown';
import GenericLoadingButton from '../../../common-components/form-elements/genericLoadingButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateMobileNumber,
  updateOTP,
  requestToLogin,
  requestToVerifyOTP,
  updateEmailId,
  updatePassword
} from '../../../store/slices/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { EMAIL_REGEX } from '../../../utils/regular-expressions';
import {
  requestToGetCompanyDetails,
  resetGetCompanyDetail
} from '../../../store/slices/CompanyRegistrationSlice';
import { useAuth } from '../../../hooks/useAuth';
import Toasty from '../../../common-components/form-elements/toasty';
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signin } = useAuth();
  const [messageType, setMessageType] = useState('');
  const [message, setMessage] = useState('');
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);

  const {
    auth: {
      mobile,
      email,
      password,
      otp,
      loginOTPResponse,
      loginSuccess: { token }
    },
    company: { companyList }
  } = useSelector((state) => state);
  const [clickButtonValue, setClickButtonValue] = useState('Submit');
  const [type, setType] = useState('email');
  const [otpResponse, setOTPResponse] = useState({});
  const onInputChangeHandler = (evt) => {
    const regex = new RegExp(EMAIL_REGEX);
    if (regex.test(evt?.target?.value)) {
      setType('email');
      dispatch(updateMobileNumber(''));
      setClickButtonValue('Submit');
      dispatch(updateEmailId(evt?.target?.value));
    } else {
      setType('mobile');
      setClickButtonValue('Send OTP');
      dispatch(updateEmailId(''));
      dispatch(updateMobileNumber(evt?.target?.value));
    }
  };
  const onPasswordChangeHandler = (evt) => {
    dispatch(updatePassword(evt?.target?.value));
  };

  const onOTPChangeHandler = (evt) => {
    if (evt?.target?.value?.length <= 6) {
      dispatch(updateOTP(evt?.target?.value));
    }
  };
  const onClickButtonHandler = () => {
    if (clickButtonValue === 'Send OTP' || clickButtonValue === 'Submit') {
      if (type === 'email') {
        dispatch(requestToLogin({ email, password }));
        setIsMessageDisplay(true);
        setMessage('Login request sent!');
        setMessageType('success');
      } else {
        dispatch(requestToLogin({ mobile }));
        setClickButtonValue('Verify OTP');
        setIsMessageDisplay(true);
        setMessage('Login request sent!');
        setMessageType('success');
      }
    } else {
      dispatch(resetGetCompanyDetail());
      dispatch(requestToVerifyOTP({ id: otpResponse?.id, otp: otp }));
      setIsMessageDisplay(true);
      setMessage('OTP is verified!');
      setMessageType('success');
    }
    signin();
  };
  const [companyDataList, setCompanDataList] = useState([]);
  useEffect(() => {
    setOTPResponse(loginOTPResponse);
  }, [loginOTPResponse]);
  useEffect(() => {
    let list = Array.isArray(companyList)
      ? companyList?.map((item) => {
          return { label: item?.companyName, value: item?._id };
        })
      : [];
    list.push({
      label: 'Create New Company',
      value: 'create-new-company'
    });

    setCompanDataList(list);
  }, [companyList]);

  const onCompanySelected = (evt) => {
    const { value } = evt?.target;
    if (value === 'create-new-company') {
      dispatch(resetGetCompanyDetail());
      navigate('/auth/company-registration');
    } else {
      dispatch(requestToGetCompanyDetails(value));
      setIsMessageDisplay(true);
      setMessage('Company details fetched!');
      setMessageType('success');
      signin();
    }
  };

  return (
    <Fragment>
      <Box>
        <Paper sx={{ p: 2 }}>
          <img src={Logoimg} alt="Logo" style={{ width: '200px', marginLeft: '35px' }} />
          <Grid container spacing={4} sx={{ my: 5 }}>
            <Grid item xs={0} md={1}></Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ padding: '20px', gap: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h4" fontWeight={400} sx={{ my: 3 }}>
                      Login
                    </Typography>
                  </Grid>

                  {(!companyDataList?.length || !token) && (
                    <Fragment>
                      <Grid item xs={12}>
                        <GenericInput
                          label={'Mobile Number / Email Id'}
                          type={'text'}
                          onChange={onInputChangeHandler}
                        />
                      </Grid>

                      {type === 'mobile' &&
                        clickButtonValue === 'Verify OTP' &&
                        otpResponse?.otp && (
                          <Grid item xs={12}>
                            <GenericInput
                              label={'Enter OTP'}
                              type={'text'}
                              onChange={onOTPChangeHandler}
                            />
                          </Grid>
                        )}
                      {type === 'email' && (
                        <Grid item xs={12}>
                          <GenericInput
                            label={'Enter Your Password'}
                            type={'password'}
                            onChange={onPasswordChangeHandler}
                          />
                        </Grid>
                      )}

                      <Grid item xs={12}>
                        <GenericLoadingButton
                          fullWidth
                          disabled={otp?.length < 6 && clickButtonValue === 'Verify OTP'}
                          onClick={onClickButtonHandler}
                          sx={{ my: 3 }}
                        >
                          {clickButtonValue}
                        </GenericLoadingButton>
                      </Grid>
                    </Fragment>
                  )}
                  {companyDataList?.length > 0 && token?.length > 0 && (
                    <Grid item xs={12}>
                      <GenericDropdown
                        data={companyDataList}
                        onChange={onCompanySelected}
                        label="Select Company"
                      />
                    </Grid>
                  )}
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={0} md={1}></Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <img src={image} alt="img" style={{ width: '90%' }} />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      {isMessageDisplay && <Toasty show={isMessageDisplay} type={messageType} message={message} />}
    </Fragment>
  );
};

export default Login;
