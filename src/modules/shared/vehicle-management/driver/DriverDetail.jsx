import React from 'react';
import { Grid, IconButton, Paper, Tooltip, Typography } from '@mui/material';
import { Fragment, useState } from 'react';
import { MdEdit } from 'react-icons/md';
// import SubHeader from '../../../../../common-components/page-elements/SubHeader';
import GenericDivider from '../../../../common-components/form-elements/genericDivider';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericTextEditor from '../../../../common-components/form-elements/genericTextEditor';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericDropdown from '../../../../common-components/form-elements/genericDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { responseToGetVehicleDriverById, requestToGetVehicleDriverById } from '../../../../store/slices/VehicleManagementSlice';

const DriverDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch()
    const {
        vehicleManagement: {
          vehicleDriver: { vehicleDriverDetailById }
        },
      } = useSelector((state) => state);
    
    useEffect(() => {
        dispatch(requestToGetVehicleDriverById(id))
    }, []);

    return (
        <Fragment>
        <Paper sx={{ p: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container sx={{ my: 1, justifyContent: 'space-between' }}>
                <Typography variant="h6" fontWeight={600}>
                  Driver Details
                </Typography>
                {/* <Tooltip title={'Update Details'}>
                  <IconButton 
                //   onClick={onClickHandlerBasicDetail}p
                  >
                    <MdEdit size={20} />
                  </IconButton>
                </Tooltip> */}
              </Grid>
            </Grid>
            <GenericDivider />
            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
                Entity
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={550}
              >
                {vehicleDriverDetailById?.entityType.toUpperCase()}
              </Typography>
              
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
                Driver Name
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
            <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={550}
              >
                {vehicleDriverDetailById?.driverName}
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
                Driver Mobile Number
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={550}
              >
                {vehicleDriverDetailById?.mobile}
              </Typography>
              
            </Grid>

            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
                Driver License Number
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
            <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={550}
              >
                {vehicleDriverDetailById?.licenceNo}
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
                Driver Aadhar Number
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={550}
              >
                {vehicleDriverDetailById?.aadharNo}
              </Typography>
              
            </Grid>
            
            {/* <Grid item xs={12}>
              <GenericLoadingButton
                type="submit"
                // onClick={basicDetailSubmitHandler}
                sx={{ float: 'right', mt: 1 }}
              >
                <span>Update</span>
              </GenericLoadingButton>
            </Grid> */}
          </Grid>
        </Paper>
        <Paper sx={{ p: 4, my: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container sx={{ my: 1, justifyContent: 'space-between' }}>
                <Typography variant="h6" fontWeight={600}>
                  Permanent Address
                </Typography>
                {/* <Tooltip title={'Update Details'}>
                  <IconButton 
                //   onClick={onClickHandlerBranchAdd}
                  >
                    <MdEdit size={20} />
                  </IconButton>
                </Tooltip> */}
              </Grid>
            </Grid>
            <GenericDivider />
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
            <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={550}
              >
                {vehicleDriverDetailById?.permanentAddress?.pincode}
              </Typography>
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
            <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={550}
              >
                {vehicleDriverDetailById?.permanentAddress?.state}
              </Typography>
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
            <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={550}
              >
                {vehicleDriverDetailById?.permanentAddress?.city}
              </Typography>
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
            <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={550}
              >
                {vehicleDriverDetailById?.permanentAddress?.locality}
              </Typography>
            </Grid>
           
            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
                Address
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
            <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={550}
              >
                {vehicleDriverDetailById?.permanentAddress?.address}
              </Typography>
            </Grid>
            
          </Grid>
        </Paper>
        <Paper sx={{ p: 4, my: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container sx={{ my: 1, justifyContent: 'space-between' }}>
                <Typography variant="h6" fontWeight={600}>
                  Current Address
                </Typography>
                {/* <Tooltip title={'Update Details'}>
                  <IconButton 
                //   onClick={onClickHandlerBranchAdd}
                  >
                    <MdEdit size={20} />
                  </IconButton>
                </Tooltip> */}
              </Grid>
            </Grid>
            <GenericDivider />
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
            <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={550}
              >
                {vehicleDriverDetailById?.currentAddress?.pincode}
              </Typography>
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
            <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={550}
              >
                {vehicleDriverDetailById?.currentAddress?.state}
              </Typography>
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
            <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={550}
              >
                {vehicleDriverDetailById?.currentAddress?.city}
              </Typography>
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
            <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={550}
              >
                {vehicleDriverDetailById?.currentAddress?.locality}
              </Typography>
            </Grid>
           
            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
                Address
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
            <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={550}
              >
                {vehicleDriverDetailById?.currentAddress?.address}
              </Typography>
            </Grid>
            
          </Grid>
        </Paper>
        
        </Fragment>
    );
}

export default DriverDetail;
