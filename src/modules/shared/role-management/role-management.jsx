import { Fragment } from 'react';
import SubHeader from '../../../common-components/page-elements/SubHeader';
import EmployeeEnroll from './employee-enroll/EmployeeEnroll';
import GenericTab from '../../../common-components/page-elements/genericTabs';
const tabStack = [
  {
    label: 'Employee Enrollment',
    child: <EmployeeEnroll />
  }
];
const RoleManagement = () => {
  return (
    <Fragment>
      <SubHeader title={'Role Management'} />
      <GenericTab list={tabStack} />
    </Fragment>
  );
};

export default RoleManagement;
