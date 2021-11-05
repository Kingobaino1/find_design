import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LoginForm = ({
  user,
  handleChange,
  handleSubmit,
  error,
}) => (
  <div className="bg-image">
    <form onSubmit={handleSubmit} className="d-flex flex-column w-25 mx-auto">
      <div className="mb-3 mt-5 pt-5">
        <label htmlFor="emailAddress" className="form-label">
          Email address
          <input className="form-control" id="emailAddress" type="email" name="email" value={user.email} onChange={handleChange} required />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="Password" className="form-label">
          Password
          <input className="form-control" id="Password" type="password" name="password" value={user.password} onChange={handleChange} required />
        </label>
      </div>
      <div className="text-danger mb-3">
        {error}
      </div>
      <button type="submit" className="btn color length">Sign in</button>
      <div className="form-text text-dark">
        do not have an account yet?
        <Link className="text-primary text-bold" to="/registration">
          Sign up
        </Link>
      </div>
    </form>
  </div>
);

LoginForm.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default LoginForm;
