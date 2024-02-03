import { Routes, Route } from 'react-router-dom';
import CustomerList from './customer-list/CustomerList';
import CustomerDetails from './customer-details/CustomerDetails';
import PackerProfile from './packer-profile/PackerProfile';
const CustomerDetailsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CustomerList />}></Route>
      <Route path="/detail/:id" element={<CustomerDetails />}></Route>
      <Route path="/my-profile" element={<PackerProfile />}></Route>
    </Routes>
  );
};
export default CustomerDetailsRoutes;
