import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from './api';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then(setUsers)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="muted">Loading users…</p>;
  }

  if (error) {
    return (
      <p className="error-text">
        Could not load users. Is json-server running on port 3003? {error}
      </p>
    );
  }

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <Link to={`${user.id}`}>{user.name}</Link>
              </td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <span className={`badge badge-${user.status}`}>{user.status}</span>
              </td>
              <td>{user.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
