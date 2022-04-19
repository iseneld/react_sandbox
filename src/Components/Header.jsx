import { Link } from 'react-router-dom';

export const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/star-rating">Stars</Link>
      <Link to="/compounder">Compounder</Link>
    </nav>
  </header>
)