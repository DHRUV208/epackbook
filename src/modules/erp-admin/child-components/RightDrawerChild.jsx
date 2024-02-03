import { Box, Grid, Paper, Stack, Typography, Divider, IconButton, Tooltip } from '@mui/material';
import GenericLoadingButton from '../../../common-components/form-elements/genericLoadingButton';
import GenericRadio from '../../../common-components/form-elements/genericRadio';
import ProfileImage from '../../../Assets/Images/user.png';
import Bgimage from '../../../Assets/Images/grid 1.png';
import { Link, useNavigate } from 'react-router-dom';
import { CiWallet } from 'react-icons/ci';
import { FiMail } from 'react-icons/fi';
import ReferIcon from '../../../Assets/Images/referNEarn.svg';
import WhatsNew from '../../../Assets/Images/whtasNew.svg';
import { BiRocket } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { successInChangeTheme } from '../../../store/slices/ThemeSlice';
import { useAuth } from '../../../hooks/useAuth';

import { useRef, useState } from 'react';
import { MdEdit } from 'react-icons/md';

const RightDrawerChild = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signout } = useAuth();
  const {
    theme,
    company: { companyDetails }
  } = useSelector((state) => state);
  const { currentTheme } = theme;
  const varientOptions = [
    {
      label: 'Default',
      value: 'default'
    },
    {
      label: 'Primary',
      value: 'primary'
    },
    {
      label: 'Graceful',
      value: 'graceful'
    },
    {
      label: 'Secondary',
      value: 'secondary'
    }
  ];
  const navigateToMyProfile = () => {
    navigate('/erp/customer/my-profile');
  };
  const onThemeChangeHandler = (evt) => {
    const { value } = evt.target;
    dispatch(successInChangeTheme(value));
  };
  //**** Image Picker ***** */
  const [image, setImage] = useState('');
  const inputRef = useRef(null);
  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (evt) => {
    const file = evt.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  return (
    <Paper sx={{ height: '100%', background: (theme) => theme.palette.primary.light }}>
      <Grid item xs={12} md={12}>
        <Box className="upperSection" sx={{ background: (theme) => theme.palette.primary.dark }}>
          <Box className="customer-Detail">
            <Box sx={{ marginLeft: '43px' }}>
              {image ? (
                <img src={image} className="avatar-image" />
              ) : (
                <img
                  className="avatar-image"
                  src={ProfileImage}
                  srcSet={ProfileImage}
                  alt={'avatar'}
                  loading="lazy"
                />
              )}
              <input
                type="file"
                ref={inputRef}
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
              <Tooltip title={'Update Profile Photo'}>
                <IconButton>
                  <MdEdit size={20} color="#fff" onClick={handleImageClick} />
                </IconButton>
              </Tooltip>
            </Box>

            <Typography sx={{ color: '#fff', fontWeight: 600 }}>
              {companyDetails.companyName}
            </Typography>
            <Typography sx={{ color: '#fff', fontWeight: 400 }}>
              User ID. Epack{companyDetails._id}
            </Typography>
            <Typography sx={{ color: '#fff', fontWeight: 400 }}>
              Mobile No. - {companyDetails.companyMobile}
            </Typography>
            <Typography sx={{ color: '#fff', fontWeight: 400 }}>
              Email - {companyDetails.email}
            </Typography>
          </Box>

          <img className="bgImage" src={Bgimage} alt={Bgimage} />
        </Box>
      </Grid>
      <Grid item className="lowerSection" xs={12} md={12}>
        <Stack
          direction={'row'}
          spacing={6}
          sx={{ width: '100%', paddingTop: '20px', justifyContent: 'center' }}
        >
          <GenericLoadingButton sx={{ borderRadius: '50px' }} onClick={navigateToMyProfile}>
            <span>My Profile</span>
          </GenericLoadingButton>
          <GenericLoadingButton sx={{ borderRadius: '50px' }} onClick={signout}>
            <span>Log out</span>
          </GenericLoadingButton>
        </Stack>
        <Typography sx={{ m: 2, fontWeight: 500 }}>SUBSCRIPTION</Typography>
        <Grid item xs={12} sx={{ m: 2, display: 'flex', gap: 1, alignItems: 'end' }}>
          <Typography>
            Basic Plan <sup>(Beta)</sup>
          </Typography>
          <Link className="linkStyle" type="button">
            UPGRADE
          </Link>
          <Box className="walletIcon">
            <CiWallet size={18} color="black" />
            <p style={{ margin: '0px' }}>₹ 1500000.00</p>
          </Box>
        </Grid>
        <Divider component="div" role="presentation" sx={{ width: '100%', my: 3 }} />
        <Typography sx={{ m: 2, fontWeight: 500 }}>NEED HELP</Typography>
        <Box className="contentJustify">
          <Link
            className="linkStyle"
            sx={{ color: `${theme?.palette?.primary?.dark} !important` }}
            type="button"
          >
            <Box className="help">
              <FiMail />
              <span>Write to Us</span>
            </Box>
          </Link>
          <Link
            className="linkStyle"
            sx={{ color: `${theme?.palette?.primary?.dark} !important` }}
            type="button"
          >
            <Box className="help">
              <BiRocket />
              <span>Take a Tour</span>
            </Box>
          </Link>
        </Box>
        <Divider component="div" role="presentation" sx={{ width: '100%', my: 3 }} />
        <Typography sx={{ m: 2, fontWeight: 500 }}>NEWS ROOM</Typography>
        <Box className="contentJustify">
          <Link
            className="linkStyle"
            sx={{ color: `${theme?.palette?.primary?.dark} !important` }}
            type="button"
          >
            <Box className="help">
              <img src={WhatsNew} alt="" />
              <span>Whats New</span>
            </Box>
          </Link>
          <Link
            className="linkStyle"
            sx={{ color: `${theme?.palette?.primary?.dark} !important` }}
            type="button"
          >
            <Box className="help">
              <img src={ReferIcon} alt="" />
              <span>Refer & Earn</span>
            </Box>
          </Link>
        </Box>
        <Divider component="div" role="presentation" sx={{ width: '100%', my: 3 }} />
        <Grid item sx={{ paddingLeft: 2, paddingRight: 2 }}>
          <Typography variant="h6" mt={5} component="h6">
            Change Theme
          </Typography>
          <GenericRadio
            defaultSelected={currentTheme}
            options={varientOptions}
            onChange={onThemeChangeHandler}
            orientation="row"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
export default RightDrawerChild;
