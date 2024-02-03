import { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import GenericLoadingButton from '../../../common-components/form-elements/genericLoadingButton';
import GenericCheckbox from '../../../common-components/form-elements/genericCheckbox';
import GenericInput from '../../../common-components/form-elements/genericInput';
import { Typography } from '@mui/material';
import GenericDropdown from '../../../common-components/form-elements/genericDropdown';

const BranchData = [
  {
    value: 'branch1',
    label: 'Branch One'
  },
  {
    value: 'barnch2',
    label: 'Branch Two'
  }
];
const FranchiseData = [
  {
    value: 'franchise1',
    label: 'Franchise One'
  },
  {
    value: 'franchise2',
    label: 'Franchise Two'
  }
];

const style = {
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'spaceBetween',
  width: '100%',
  border: '1px solid #C4C4C4',
  borderRadius: '4px'
  // padding: '10px 14px'
};

const EntityType = [
  {
    value: 'headOffice',
    label: 'Head Office'
  },
  {
    value: 'branch',
    label: 'Branch'
  },
  {
    value: 'franchise',
    label: 'Franchise'
  }
];

const Data = [
  {
    value: 'HeadOfficeManager',
    label: 'Head Office Manager'
  },
  {
    value: 'EnquiryManager',
    label: 'Enquiry Manager'
  },
  {
    value: 'Surveyor',
    label: 'Surveyor'
  },
  {
    value: 'ShiftingManager',
    label: 'Shifting Manager'
  },
  {
    value: 'BranchManager',
    label: 'Branch Manager'
  },
  {
    value: 'FranchiseManager',
    label: 'Franchise Manager'
  }
];

const AddRoleForm = () => {
  const [entityType, setEntityType] = useState(null);
  const [gridValue, setGridValue] = useState(4);
  // const gridDistributionValue = entityType === 'branch' || 'franchise' ? 3 : 4;
  const handleEntityType = (evt) => {
    const value = evt.target.value;
    if (value == 'branch') {
      setGridValue(3);
    } else if (value == 'franchise') {
      setGridValue(3);
    } else {
      setGridValue(4);
    }
    setEntityType(evt.target.value);
  };
  const branchOrFranchiseData = entityType == 'branch' ? BranchData : FranchiseData;
  return (
    <Fragment>
      <Box sx={{ flexGrow: 1, background: '#fff ' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={gridValue}>
            <GenericDropdown
              label={'Choose Entity'}
              data={EntityType}
              onChange={handleEntityType}
            />
          </Grid>
          {gridValue == 3 && (
            <Grid item xs={12} md={gridValue}>
              <GenericDropdown data={branchOrFranchiseData} />
            </Grid>
          )}
          <Grid item md={gridValue} xs={12}>
            <GenericInput required label="Name" />
          </Grid>
          <Grid item md={gridValue} xs={12}>
            <GenericInput required label="Mobile Number" />
          </Grid>
          <Grid item md={6} xs={12}>
            <GenericInput label="Email" />
          </Grid>
          <Grid item md={6} xs={12}>
            <GenericInput required label="Create Password" />
          </Grid>
          <Grid item xs={12} md={12}>
            <Box sx={style}>
              <Typography
                variant="body1"
                sx={{
                  color: '#666666',
                  marginRight: '20px',
                  marginTop: '10px',
                  marginLeft: '15px'
                }}
              >
                Role Type *
              </Typography>
              <GenericCheckbox list={Data} style={{ display: 'block' }} />
            </Box>
          </Grid>
          <Grid item md={12} xs={12}>
            <GenericLoadingButton sx={{ my: 2, float: 'right' }}>
              <span>Submit</span>
            </GenericLoadingButton>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};
export default AddRoleForm;
