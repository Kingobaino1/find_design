import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getFavoriteCars } from '../actions/index';
import Hamburger from './Hamburger';

const Nav = ({ name, greetings }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem('sessionID')).jwt;
  const userId = JSON.parse(localStorage.getItem('sessionID')).user.id;
  const [hamburgerOpen, setHambugerOpen] = useState(false);

  const toggleHambuger = () => {
    setHambugerOpen(!hamburgerOpen);
  };

  const showFav = () => {
    dispatch(getFavoriteCars(token, userId, history));
  };
  const signOut = () => {
    localStorage.removeItem('sessionID');
    history.push('/login');
  };
  return (
    <>
      <div className="d-none d-md-flex container nav-image d-flex justify-content-between home">
        <h6 className="text-secondary font-weight-light mt-3">
          {greetings}
          {' '}
          {name}
        </h6>
        <ul className="w m-5 mb-0 mt-3 d-flex justify-content-between">
          <li onClick={showFav} className="cursor mr-5" role="presentation">Favorites</li>
          <li onClick={signOut} className="cursor pr-3" role="presentation">Sign out</li>
        </ul>
      </div>
      <div className="d-md-none container nav-image d-flex justify-content-between home navigation">
        <ul>
          <li onClick={showFav} className="cursor mt-3" role="presentation">Favorites</li>
          <li onClick={signOut} className="cursor pt-3" role="presentation">Sign out</li>
        </ul>
        <div className="hamburger" onClick={toggleHambuger} role="presentation">
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
            margin-top: 50px;
            position: absolute;
            color: white;
          }
        `}
      </style>
    </>
  );
};

Nav.propTypes = {
  name: PropTypes.string.isRequired,
  greetings: PropTypes.string.isRequired,
};

export default Nav;
