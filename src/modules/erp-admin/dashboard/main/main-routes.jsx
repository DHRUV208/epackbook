import { Route, Routes } from 'react-router-dom';
import Index from './index';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
};
export default MainRoutes;
