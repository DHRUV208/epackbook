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
const LazyDashboard = React.lazy(() => import('./dashboard/index'));
const LazySharedRouting = React.lazy(() => import('../shared/shared.routing'));
const LazyVendorList = React.lazy(() => import('./dashboard/vendor-list'));
const LazyDemoRequest = React.lazy(() => import('./dashboard/demo-request'));

const LazySubscription = React.lazy(() =>
  import('../super-admin/dashboard/subscription/subscription-routes')
);
const SuperAdminRouting = () => {
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
                <Route path="/" element={<LazyDashboard />} />
                <Route path="/shared/*" element={<LazySharedRouting />} />
                <Route path="/vendors" element={<LazyVendorList />} />
                <Route path="/demo-request" element={<LazyDemoRequest />} />
                <Route path="/subscription" element={<LazySubscription />} />
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
export default SuperAdminRouting;
