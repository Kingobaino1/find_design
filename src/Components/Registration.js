import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SignUp, errorMessage } from '../actions/index';
import Form from './Form';

const Registration = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState(
    {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
  );

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(SignUp(user, history));
  };
  return(
    <Form user={user} handleChange={handleChange}
          handleSubmit={handleSubmit}
          error={errorMessage()}
    />
  );
};

export default connect()(Registration);
