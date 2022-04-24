import { Link } from 'react-router-dom';

export const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/compounder">Compounder</Link>
      <Link to="/reducer">Reducer</Link>
      <Link to="/star-rating">Stars</Link>
      
    </nav>
  </header>
)