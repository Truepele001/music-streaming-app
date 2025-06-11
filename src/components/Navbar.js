import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Streamify</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/library">Library</Link></li>
        <li><Link to="/now-playing">Now Playing</Link></li>
      </ul>
    </nav>
  );
}
