import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Form = ({ user, handleChange, handleSubmit, error }) => {
  return(
    <div className="m-0 p-0 bg-image">
      <div className="">
         <form onSubmit = {handleSubmit} className="d-flex flex-column w-25 mx-auto">
           <div className="mb-3 mt-5 pt-5">
             <label htmlFor="name" className="form-label">Name</label>
             <input className="form-control" id="name" type="text" name="name" value={user.name} onChange={handleChange} required/>
           </div>
           <div className="mb-3">
             <label htmlFor="emailAddress" className="form-label">Email address</label>
             <input className="form-control" id="emailAddress" type="email" name="email" value={user.email} onChange={handleChange} required/>
           </div>
           <div className="mb-3">
             <label htmlFor="Password" className="form-label">Password</label>
             <input className="form-control" id="Password" type="password" name="password" value={user.password} onChange={handleChange} required/>
           </div>
           <div className="mb-3">
             <label htmlFor="passwordConfirmation" className="form-label">Password confirmation</label>
             <input className="form-control" id="passwordConfirmation" type="password" name="password_confirmation" value={user.password_confirmation} onChange={handleChange} required/>
           </div>
           <div className="text-danger mb-3">{error}</div>
           <button type="submit" className="btn btn-primary">Register</button>
           <div className="form-text text-dark">already have an account? <Link className="text-primary text-bold" to='/login'>Sign in</Link></div>
         </form>
      </div>
    </div>
  );
};

Form.propTypes = {
  user: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default Form;
