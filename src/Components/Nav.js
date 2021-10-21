import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getFavoriteCars } from '../actions/index';

const Nav = ({ name, greetings }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem('sessionID')).jwt;
  const userId = JSON.parse(localStorage.getItem('sessionID')).user.id;

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
      <div className="d-md-none container nav-image d-flex justify-content-between home">
        <ul>
          <li className="text-secondary font-weight-light mt-3">
            {greetings}
          </li>
          <li className="text-secondary font-weight-light mt-3">
            {name}
          </li>
        </ul>
        <ul>
          <li onClick={showFav} className="cursor mt-3" role="presentation">Favorites</li>
          <li onClick={signOut} className="cursor pt-3" role="presentation">Sign out</li>
        </ul>
      </div>
    </>
  );
};

Nav.propTypes = {
  name: PropTypes.string.isRequired,
  greetings: PropTypes.string.isRequired,
};

export default Nav;
