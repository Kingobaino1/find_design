import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getFavoriteCars } from '../actions/index';

const Nav = ({ name }) => {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem('sessionID')).jwt;
  const userId = JSON.parse(localStorage.getItem('sessionID')).user.id;

  const showFav = () => {
    dispatch(getFavoriteCars(token, userId))
  }
  return (
    <>
      <div className="nav-image d-flex justify-content-between p-4">
        <h1 className="text-dark">Welcome</h1>
        <h1 className="text-primary">{name}</h1>
        <ul className="w mt-3 d-flex justify-content-between">
          <li onClick={showFav}>Favorites</li>
          <li>Sign out</li>
        </ul>
      </div>
    </>
  )
};

Nav.propTypes = {
  name: PropTypes.string,
}

export default Nav;
