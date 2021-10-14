import PropTypes from 'prop-types';

const LoginForm = ({ user, handleChange, handleSubmit, error }) => {
  return(
    <div className="bg-image">
       <form onSubmit = {handleSubmit} className="d-flex flex-column w-25 mx-auto">
         <div className="mb-3 mt-5 pt-5">
           <label htmlFor="emailAddress" className="form-label">Email address</label>
           <input className="form-control" id="emailAddress" type="email" name="email" value={user.email} onChange={handleChange} required/>
         </div>
         <div className="mb-3">
           <label htmlFor="Password" className="form-label">Password</label>
           <input className="form-control" id="Password" type="password" name="password" value={user.password} onChange={handleChange} required/>
         </div>
          <div className="text-danger mb-3">{error}</div>
         <button type="submit" className="btn btn-primary">Sign in</button>
       </form>
    </div> 
  );
};

LoginForm.propTypes = {
  user: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
