import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const currentPage = useLocation().pathname;
  return (
    <div className='container'>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>About</Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link to="/resume">Resume</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
};