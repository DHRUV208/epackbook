import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import SubHeader from '../../../../../common-components/page-elements/SubHeader';
import GenericTabs from '../../../../../common-components/page-elements/genericTabs';
import MoneyReceiptForm from '../../../form-components/MoneyReceiptForm';
import CarConditionForm from '../../../form-components/CarConditionForm';
import InvoiceForm from '../../../form-components/InvoiceForm';
import Bilty from '../../../form-components/BiltyForm';
import PackingList from '../../../form-components/PackingList';
import EditOrderDetail from '../../../form-components/EditOrderDetailForm';
import GenericDropdown from '../../../../../common-components/form-elements/genericDropdown';
import GenericBreadcrum from '../../../../../common-components/form-elements/genericBreadcrum';
import { requestToUpdateOrder, requestToListOrder, requestToGetOrder, resetOrderById } from '../../../../../store/slices/OrderSlice';
import { requestToGetEnquiry, resetEnquiryById } from '../../../../../store/slices/EnquirySlice';

const tabStack = [
  {
    label: 'DETAILS',
    child: <EditOrderDetail />
  },
  {
    label: 'MONEY RECEIPT',
    child: <MoneyReceiptForm />
  },
  {
    label: 'VEHICLE CONDITION',
    child: <CarConditionForm />
  },
  {
    label: 'BILTY',
    child: <Bilty />
  },
  {
    label: 'Packing List',
    child: <PackingList />
  },
  {
    label: 'INVOICE',
    child: <InvoiceForm />
  }
];

const OrderDetail = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('');

  const {
    order: {orderById , isOrderGetById},
  } = useSelector((res) => res);

  useEffect(() => {
    dispatch(resetOrderById());
    dispatch(requestToGetOrder(id));
  }, []);
  useEffect(() => {
    setStatus(orderById?.[0]?.status);
  }, [isOrderGetById]);

  const onOrderStatusChange = (evt) => {
    setStatus(evt.target.value);
    dispatch(requestToUpdateOrder({ status: evt.target.value, _id: id }));

    if (evt?.target?.value === 'completed') {
      navigate('/erp/order/list');
    }
  };
  const data = [
    { value: 'new order', label: 'New Order' },
    { value: 'out for shifting', label: 'Out For Shifting' },
    { value: 'material received at warehouse', label: 'Material Received at Warehouse' },
    { value: 'in transit', label: 'In Transite' },
    { value: 'reached at destination city', label: 'Reached at Destination City' },
    { value: 'completed', label: 'Completed' },
    { value: 'cancelled order', label: 'Cancelled Order' }
  ];

  const breadcrumbList = [
    {
      url: '#',
      label: 'Dashboard'
    },
    {
      url: '#',
      label: 'Branch'
    },
    {
      url: '#',
      label: 'Branch List'
    }
  ];

  return (
    <Fragment>
      <Box sx={{ backgroundColor: '#fff', padding: '8px', marginBottom: '15px' }}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <GenericBreadcrum list={breadcrumbList} />
          </Grid>
          <Grid item xs={2}>
            <GenericDropdown
              label={'Status'}
              data={data}
              value={status}
              onChange={onOrderStatusChange}
            />
          </Grid>
        </Grid>
      </Box>
      <SubHeader title={'Order Detail'} />
      <GenericTabs className="orderDetailTabs" list={tabStack} />
    </Fragment>
  );
};

export default OrderDetail;
