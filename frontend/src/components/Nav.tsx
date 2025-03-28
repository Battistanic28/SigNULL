import { useAuth } from '../hooks/useAuth';
import './styles.css';

export default function Nav() {
  const { isLoggedIn, handleLogout } = useAuth();
  
  return (
    <nav className="navbar">
      <div className="nav-title">SigNull</div>
      <ul className="nav-links">
        {!isLoggedIn ? (
          <>
            <li><a href="/login" className="nav-item">Login</a></li>
            <li><a href="/register" className="nav-item">Register</a></li>
          </>
         ) :
        <li><button onClick={handleLogout} className="nav-item logout-btn">Logout</button></li>
        }
      </ul>
    </nav>
  );
}