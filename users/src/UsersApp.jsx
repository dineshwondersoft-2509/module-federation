import { Routes, Route } from 'react-router-dom';
import UserList from './UserList';
import UserDetail from './UserDetail';
import './styles.css';

export default function UsersApp() {
  return (
    <div className="mfe-page">
      <div className="mfe-heading">
        <h1>Users</h1>
        <p>Loaded from the Users remote. Data harinisri comes from json-server.</p>
      </div>
      <Routes>
        <Route index element={<UserList />} />
        <Route path=":id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}
