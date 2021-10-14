import PropTypes from 'prop-types';
const Nav = ({ name }) => (
  <>
    <div className="nav-image d-flex justify-content-between p-4">
      <h1 className="text-dark">Welcome</h1>
      <h1 className="text-primary">{name}</h1>
      <ul className="w mt-3 d-flex justify-content-between">
        <li>Favorites</li>
        <li>Sign out</li>
      </ul>
    </div>
  </>
);

Nav.propTypes = {
  name: PropTypes.string,
}

export default Nav;
