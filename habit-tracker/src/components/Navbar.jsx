import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '50px', background: '#eaeaeb' }}>
      <Link to="/">Home</Link> | <Link to="/tracker">Tracker</Link> | <Link to="/signin">Sign In</Link> | <Link to="/signup">Sign Up</Link> | <Link to="/about">About</Link>
    </nav>
  );
}
