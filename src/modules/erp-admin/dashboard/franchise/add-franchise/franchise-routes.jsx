import FranchiseList from '../franchise-list/FranchiseList';
import AddFranchise from './AddFranchise';

const AddFranchiseRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AddFranchise />}></Route>
      <Route path="/list" element={<FranchiseList />}></Route>
    </Routes>
  );
};
export default AddFranchiseRoutes;
