import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
import { useState } from 'react';
import Hamburger from './Hamburger';

const FavNav = ({ name }) => {
  const history = useHistory();
  const signOut = () => {
    localStorage.removeItem('sessionID');
    history.push('/login');
  };
  const [hamburgerOpen, setHambugerOpen] = useState(false);
  const toggleHambuger = () => {
    setHambugerOpen(!hamburgerOpen);
  };
  return (
    <>
      <div className="d-none d-md-flex container nav-image d-flex justify-content-between p-4 nav-media">
        <h1 className=" text-secondary font-weight-light name">
          Hi there,
          {' '}
          {name}
        </h1>
        <ul className="w d-flex justify-content-between">
          <li className="cursor"><Link to="/home" className="text-secondary underline mt-3">Home</Link></li>
          <li onClick={signOut} className="cursor text-secondary sign" role="presentation">Sign out</li>
        </ul>
      </div>
      <div className="navigation d-md-none">
        <ul className="w">
          <li className="cursor"><Link to="/home" className="text-light underline mt-3">Home</Link></li>
          <li onClick={signOut} className="cursor sign mt-3" role="presentation">Sign out</li>
        </ul>
        <div className="hamburger m-4" onClick={toggleHambuger} role="presentation">
          <Hamburger />
        </div>
      </div>

      <style jsx>
        {`
         .navigation ul {
            display: ${hamburgerOpen ? 'inline' : 'none'};
            background-color: #ec5200;
            height: 15vh;
            width: 40vw;
            margin-top: 40px;
            position: absolute;
            color: white;
          }
        `}
      </style>
    </>
  );
};

FavNav.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FavNav;
