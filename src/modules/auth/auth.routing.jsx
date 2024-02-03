import { Routes, Route, Navigate } from 'react-router-dom';
import React, { Fragment } from 'react';
import Login from './login/login';
import CompanyRegistration from './company-registration/CompanyRegistration';
import ForgotPassword from './forgot-password/ForgotPassword';
import Layout from '../../common-components/page-elements/layout';
import SubscriptionPlan from './subscription-plans/SubscriptionPlan';
import { useAuth } from '../../hooks/useAuth';

const AuthRouting = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Fragment>
      {!isAuthenticated ? (
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/company-registration" element={<CompanyRegistration />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/subscription-plan" element={<SubscriptionPlan />} />
          </Routes>
        </Layout>
      ) : (
        <Navigate to="/erp" />
      )}
    </Fragment>
  );
};
export default AuthRouting;
