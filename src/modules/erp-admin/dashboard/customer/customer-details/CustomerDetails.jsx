import { Grid, IconButton, Paper, Tooltip, Typography, Box } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import { MdEdit } from 'react-icons/md';
import SubHeader from '../../../../../common-components/page-elements/SubHeader';
import GenericDivider from '../../../../../common-components/form-elements/genericDivider';
import GenericInput from '../../../../../common-components/form-elements/genericInput';
import GenericTextEditor from '../../../../../common-components/form-elements/genericTextEditor';
import GenericLoadingButton from '../../../../../common-components/form-elements/genericLoadingButton';
import { useParams } from 'react-router-dom';
import { requestToGetEnquiry } from '../../../../../store/slices/EnquirySlice';
import { useDispatch, useSelector } from 'react-redux';

const CustomerDetails = () => {
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

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestToGetEnquiry(id));
  }, []);

  const {
    enquiry: { enquiryById }
  } = useSelector((res) => res);

  return (
    <Fragment>
      <SubHeader title={'Customer Details'} />
      <Paper sx={{ p: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container sx={{ my: 1, justifyContent: 'space-between' }}>
              <Typography variant="h6" fontWeight={600}>
                Basic Details
              </Typography>
            </Grid>
          </Grid>
          <GenericDivider />
        </Grid>

        {enquiryById?.[0]?.billingBy == 'by Company' ? (
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
                Billing By
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBasicDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBasicDetail
                }}
                value={enquiryById?.[0]?.billingBy}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
                Company Name
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBasicDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBasicDetail
                }}
                value={enquiryById?.[0]?.billingDetails?.companyName}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
                Company Address
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBasicDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBasicDetail
                }}
                value={enquiryById?.[0]?.billingDetails?.companyAddress}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
                Employee Name
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBasicDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBasicDetail
                }}
                value={enquiryById?.[0]?.billingDetails?.employeeName}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
                Employee Mobile
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBasicDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBasicDetail
                }}
                value={enquiryById?.[0]?.billingDetails?.employeeMobile}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
                Employee Designation
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBasicDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBasicDetail
                }}
                value={enquiryById?.[0]?.billingDetails?.employeeDesignation}
              />
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
                Billing By
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBasicDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBasicDetail
                }}
                value={enquiryById?.[0]?.billingBy}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
                Party Name
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBasicDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBasicDetail
                }}
                value={enquiryById?.[0]?.partyName}
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
                value={enquiryById?.[0]?.email}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
                Mobile Number
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                className={editBasicDetail ? 'editable-input' : ''}
                inputProps={{
                  disabled: editBasicDetail
                }}
                value={enquiryById?.[0]?.mobile}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{ mt: 0.7, color: 'rgba(51, 51, 51, 0.87)' }}
                fontWeight={500}
              >
                Alternate Number
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography sx={{ pt: 1 }}>
                {enquiryById?.[0]?.alternateNumbers.map((res, i) =>
                  !res ? (
                    'N/A'
                  ) : (
                    <span key={i} className="special">
                      {res}
                    </span>
                  )
                )}
              </Typography>
            </Grid>
          </Grid>
        )}
      </Paper>

      {/************* Address Sec **************/}

      <Paper sx={{ p: 4, my: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container sx={{ my: 1, justifyContent: 'space-between' }}>
              <Typography variant="h6" fontWeight={600}>
                Address Details
              </Typography>
              <Tooltip title={'Address Details'}>
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
              State
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <GenericInput
              className={editBranchAdd ? 'editable-input' : ''}
              inputProps={{
                disabled: editBranchAdd
              }}
              value={enquiryById?.[0]?.pickupAddress?.state}
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
            <GenericInput
              className={editBranchAdd ? 'editable-input' : ''}
              inputProps={{
                disabled: editBranchAdd
              }}
              value={enquiryById?.[0]?.pickupAddress?.city}
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
              value={enquiryById?.[0]?.pickupAddress?.pincode}
            />
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
          <Grid item xs={12} md={2}>
            <GenericInput
              className={editBranchAdd ? 'editable-input' : ''}
              inputProps={{
                disabled: editBranchAdd
              }}
              value={enquiryById?.[0]?.pickupAddress?.address}
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
              value={enquiryById?.[0]?.pickupAddress?.landmark}
            />
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};

export default CustomerDetails;
