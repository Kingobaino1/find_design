import { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { SignIn, errorMessage } from '../actions/index'
import LoginForm from './LoginForm';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState(
    {
      email: '',
      password: '',
    },
  );

  const handleChange = (event) => {
    const {value, name} = event.target;
    setUser(prev => ({...prev, [name]: value}))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(SignIn(user, history));
  };

  return(
    <LoginForm user={user} handleChange={handleChange} handleSubmit={handleSubmit} error={errorMessage()} />
  )
};

export default connect()(Login);
