import { Grid, Paper } from '@mui/material';
import { Fragment } from 'react';
import SubHeader from '../../../common-components/page-elements/SubHeader';
import { useNavigate } from 'react-router-dom';
import GenericPricingCard from '../../../common-components/page-elements/genericPricingCard';

const SubscriptionPlan = () => {
  const data = [
    {
      mark: 'true',
      label: 'lorem ipsum',
      value: 'lorem ipsum lorem ipsum lorem ipsum '
    },
    { mark: 'false', label: 'lorem ipsum', value: 'lorem ipsum lorem ipsum lorem ipsum ' },
    { mark: 'true', label: 'lorem ipsum', value: 'lorem ipsum lorem ipsum lorem ipsum ' },
    { mark: 'false', label: 'lorem ipsum', value: 'lorem ipsum lorem ipsum lorem ipsum ' }
  ];
  const cardData = [
    {
      plan: 'Basic',
      helpingtext: 'lorem ipsum yoreo huai',
      amount: '1500',
      color: '#7379D1',
      data: data
    },
    {
      plan: 'Silver',
      helpingtext: 'lorem ipsum yoreo huai',
      amount: '2000',
      color: '#A7CDF7',
      data: data
    },
    {
      plan: 'Gold',
      helpingtext: 'lorem ipsum yoreo huai',
      amount: '2500',
      color: '#fdc06c',
      data: data
    },
    {
      plan: 'Premium',
      helpingtext: 'lorem ipsum yoreo huai',
      amount: '3000',
      color: '#ff8e6c',
      data: data
    }
  ];
  const navigate = useNavigate();
  const getNow = () => {
    navigate('/erp');
  };
  return (
    <Fragment>
      <SubHeader title={'Subscribe For Your Plan'} />
      <Paper sx={{ p: 4 }}>
        <Grid container spacing={2}>
          {cardData?.map((item, index) => (
            <Grid item md={3} key={index}>
              <GenericPricingCard
                plan={item?.plan}
                helpingtext={item?.helpingtext}
                amount={item?.amount}
                color={item?.color}
                data={item?.data}
                getNow={getNow}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Fragment>
  );
};
export default SubscriptionPlan;
