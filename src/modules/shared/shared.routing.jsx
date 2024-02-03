import { Route, Routes } from 'react-router-dom';
import React from 'react';
const LazyAccountManagement = React.lazy(() => import('./account-management/AccountManagement'));
const LazyAppSetting = React.lazy(() => import('./app-setting/AppSetting'));
const LazyContentManagement = React.lazy(() => import('./content-management/ContentManagement'));
const LazyRoleManagement = React.lazy(() => import('./role-management/role-management'));
const LazyShiftingManagement = React.lazy(() => import('./shifting-management/ShiftingManagement'));
const LazyTemplateManagement = React.lazy(() => import('./template-management/TemplateManagement'));
const LazyUserManagement = React.lazy(() => import('./user-management/UserManagement'));
const LazyVehicleManagement = React.lazy(() => import('./vehicle-management/VehicleManagement'));
const LazyVehicleDriverDetail = React.lazy(() => import('./vehicle-management/driver/DriverDetail'));
const LazySubscriptionPlanManagement = React.lazy(() =>
  import('./subscription-plan-management/SubscriptionPlanManagement')
);

const SharedRouting = () => {
  return (
    <Routes>
      <Route path="/*" element={<LazyAccountManagement />} />
      <Route path="/app-setting/*" element={<LazyAppSetting />} />
      <Route path="/content-management/*" element={<LazyContentManagement />} />
      <Route path="/role-management/*" element={<LazyRoleManagement />} />
      <Route path="/shifting-management/*" element={<LazyShiftingManagement />} />
      <Route path="/template-management/*" element={<LazyTemplateManagement />} />
      <Route path="/user-management/*" element={<LazyUserManagement />} />
      <Route path="/vehicle-management/*" element={<LazyVehicleManagement />} />
      <Route path="/vehicle-management/driver/:id" element={<LazyVehicleDriverDetail />} />
      <Route path="/subscription-plan-management/*" element={<LazySubscriptionPlanManagement />} />
    </Routes>
  );
};
export default SharedRouting;
