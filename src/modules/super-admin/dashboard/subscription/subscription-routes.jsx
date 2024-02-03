import { Route, Routes } from 'react-router-dom';
import AddSubscription from './add-subscription/AddSubscription';

const SubscriptionRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AddSubscription />} />
    </Routes>
  );
};
export default SubscriptionRoutes;
