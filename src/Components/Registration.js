import { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { SignUp } from '../actions/index'

const Registration = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState(
    {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
  );

  const handleChange = (event) => {
    const {value, name} = event.target;
    setUser(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = (event) => {
    dispatch(SignUp(user))
    event.preventDefault();
  };

  return(
    <div>
      <form onSubmit = {handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required/>
        <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required/>
        <input type="password" name="password_confirmation" placeholder="Password Confirmation" value={user.password_confirmation} onChange={handleChange} required/>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default connect()(Registration);

