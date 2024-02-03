import { Route, Routes } from 'react-router-dom';
import AddFranchise from '../franchise/add-franchise/AddFranchise';
import FranchiseList from '../franchise/franchise-list/FranchiseList';

const FranchiseRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AddFranchise />}></Route>
      <Route path="/list" element={<FranchiseList />}></Route>
    </Routes>
  );
};
export default FranchiseRoutes;
