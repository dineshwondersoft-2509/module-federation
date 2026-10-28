import { BrowserRouter } from 'react-router-dom';
import OrdersApp from './OrdersApp';

export default function App() {
  return (
    <BrowserRouter>
      <div className="standalone-shell">
        <header className="standalone-banner">
          Orders remote — running standalone on port 3002
        </header>
        <OrdersApp />
      </div>
    </BrowserRouter>
  );
}
