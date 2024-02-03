import { Route, Routes } from 'react-router-dom';
import AddQuotation from './add-quotation/AddQuotation';
import QuotationList from './quotation-list/QuotationList';

const QuotationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AddQuotation />} />
      <Route path="/list" element={<QuotationList />} />
    </Routes>
  );
};
export default QuotationRoutes;
