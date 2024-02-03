import { Route, Routes } from 'react-router';
import AddOrder from './add-order/AddOrder';
import OrderDetail from './order-detail/OrderDetail';
import OrderList from './order-list/OrderList';
import EditOrderDetail from '../../form-components/EditOrderDetailForm';

const OrderRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AddOrder />} />
      <Route path="/detail/:id" element={<OrderDetail />} />
      <Route path="/list" element={<OrderList />} />
      <Route path="/edit" element={<EditOrderDetail />} />
    </Routes>
  );
};
export default OrderRoutes;
