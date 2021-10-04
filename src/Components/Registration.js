import { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { design } from '../actions/index'

const Registration = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    dispatch(design(User))
    event.preventDefault();
  };
  const [User, setUser] = useState(
    {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
  );
 
    const handleChange = (event) => {
      const {value, name} = event.target
      setUser(prev => ({...prev, [name]: value}))
  }

  return(
    <div>
      <form onSubmit = {handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={User.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={User.email} onChange={handleChange} required/>
        <input type="password" name="password" placeholder="Password" value={User.password} onChange={handleChange} required/>
        <input type="password" name="password_confirmation" placeholder="Password Confirmation" value={User.password_confirmation} onChange={handleChange} required/>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default connect()(Registration);
