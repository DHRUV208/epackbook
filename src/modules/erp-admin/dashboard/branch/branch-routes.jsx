import { Route, Routes } from 'react-router-dom';
import AddBranch from './add-branch/AddBranch';
import BranchList from './branch-list/BranchList';
import BranchEdit from './branch-edit/BranchEdit';

const BranchRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AddBranch />}></Route>
      <Route path="/list" element={<BranchList />}></Route>
      <Route path="/edit/:id" element={<BranchEdit />}></Route>
    </Routes>
  );
};
export default BranchRoutes;
