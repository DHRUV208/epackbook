import { Route, Routes } from 'react-router-dom';
import AddFranchise from './add-franchise/AddFranchise';
import FranchiseList from './franchise-list/FranchiseList';
import FranchiseEdit from './edit-franchise/EditFranchise';

const FranchiseRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AddFranchise />}></Route>
      <Route path="/list" element={<FranchiseList />}></Route>
      <Route path="/edit/:id" element={<FranchiseEdit />}></Route>
    </Routes>
  );
};
export default FranchiseRoutes;
