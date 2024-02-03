import { Route, Routes } from 'react-router-dom';
import AddEnquiry from './add-enquiry/AddEnquiry';
import EnquiryList from './enquiry-list/EnquiryList';
import EnquiryDetails from './enquiry-details/EnquiryDetails';
import EditEnquiry from './edit-enquiry/EditEnquiry';

const EnquiryRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AddEnquiry />}></Route>
      <Route path="/list" element={<EnquiryList />}></Route>
      <Route path="/detail/:id" element={<EnquiryDetails />}></Route>
    </Routes>
  );
};
export default EnquiryRoutes;
