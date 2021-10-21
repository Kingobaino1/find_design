import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';

const FavNav = ({ name }) => {
  const history = useHistory();
  const signOut = () => {
    localStorage.removeItem('sessionID');
    history.push('/login');
  };
  return (
    <>
      <div className="container nav-image d-flex justify-content-between p-4 nav-media">
        <h1 className="text-secondary font-weight-light name">
          Hi there,
          {' '}
          {name}
        </h1>
        <ul className="w mt-3 d-flex justify-content-between">
          <li className="cursor"><Link to="/home" className="text-secondary underline">Home</Link></li>
          <li onClick={signOut} className="cursor text-secondary sign" role="presentation">Sign out</li>
        </ul>
      </div>
    </>
  );
};

FavNav.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FavNav;
