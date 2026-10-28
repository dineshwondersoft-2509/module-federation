import { BrowserRouter } from 'react-router-dom';
import UsersApp from './UsersApp';

export default function App() {
  return (
    <BrowserRouter>
      <div className="standalone-shell">
        <header className="standalone-banner">
          Users remote — running standalone on port 3001
        </header>
        <UsersApp />
      </div>
    </BrowserRouter>
  );
}
