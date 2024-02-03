import React, { Fragment, useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../../common-components/page-elements/dashboard-layout';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ThemeProvider } from '@mui/material';
import {
  defaultTheme,
  gracefulTheme,
  primaryTheme,
  secondaryTheme
} from '../../common-components/themes';
import { useSelector } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
const LazyEnquiry = React.lazy(() => import('./dashboard/enquiry/enquiry-routes'));
const LazyQuotation = React.lazy(() => import('./dashboard/quotation/quotation-routes'));
const LazyBranch = React.lazy(() => import('./dashboard/branch/branch-routes'));

const LazyOrder = React.lazy(() => import('./dashboard/order/order-routes'));
const LazyMain = React.lazy(() => import('./dashboard/main/main-routes'));
const LazyCustomer = React.lazy(() => import('./dashboard/customer/customer-routes'));
const LazySurvey = React.lazy(() => import('./dashboard/survey/survey'));
const LazyMaterial = React.lazy(() => import('./dashboard/survey/survey-form-components/Material'));
const LazyFranchise = React.lazy(() => import('./dashboard/franchise/franchise-routes'));
const LazyEditOrderDetail = React.lazy(() => import('./dashboard/order/order-routes'));
const LazyCheckoutScreen = React.lazy(() => import('./dashboard/checkout/Checkout'));
const LazyPaymentSuccessfull = React.lazy(() =>
  import('./dashboard/payment-successfull/PaymentSuccessfull')
);
const LazyPaymentFailed = React.lazy(() => import('./dashboard/payment-failed/PaymentFailed'));

const ERPAdminRouting = () => {
  const { theme } = useSelector((state) => state);
  const { currentTheme } = theme;
  const [selectedTheme, setSelectedTheme] = useState(primaryTheme);
  useEffect(() => {
    setSelectedTheme(
      currentTheme === 'default'
        ? defaultTheme
        : currentTheme === 'primary'
        ? primaryTheme
        : currentTheme === 'graceful'
        ? gracefulTheme
        : secondaryTheme
    );
  }, [currentTheme]);
  const { isAuthenticated } = useAuth();
  return (
    <Fragment>
      {isAuthenticated ? (
        <ThemeProvider theme={selectedTheme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DashboardLayout>
              <Routes>
                <Route path="/branch/*" element={<LazyBranch />} />
                <Route path="/enquiry/*" element={<LazyEnquiry />} />
                <Route path="/quotation/*" element={<LazyQuotation />} />
                <Route path="/order/*" element={<LazyOrder />} />
                <Route path="/" element={<LazyMain />} />
                <Route path="/customer/*" element={<LazyCustomer />} />
                <Route path="/survey/*" element={<LazySurvey />} />
                <Route path="/material/*" element={<LazyMaterial />} />
                <Route path="/franchise/*" element={<LazyFranchise />} />
                <Route path="/edit/*" element={<LazyEditOrderDetail />} />
                <Route path="/checkout/*" element={<LazyCheckoutScreen />} />
                <Route path="/success/*" element={<LazyPaymentSuccessfull />} />
                <Route path="/failed/*" element={<LazyPaymentFailed />} />
              </Routes>
            </DashboardLayout>
          </LocalizationProvider>
        </ThemeProvider>
      ) : (
        <Navigate to={'/auth'} />
      )}
    </Fragment>
  );
};
export default ERPAdminRouting;
