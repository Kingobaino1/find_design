// import axios from 'axios';

const SIGN_UP = 'SIGN_UP';
const DESIGN = 'DESIGN';
const ERROR = 'ERROR';


const SignUp = (user) => (dispatch) => fetch('https://find-design-api.herokuapp.com/users', {
  method: 'POST',
  body: JSON.stringify({
    name: user.name,
    email: user.email,
    password: user.password,
    password_confirmation: user.password_confirmation,
  }),
  headers: {
   'Content-Type': 'application/json',
    Accept: 'application/json',
    mode: 'cors',
  },
})
  .then(response => response.json())
  .then((data) => {
    console.log(data.user)
      window.localStorage.setItem(
        'sessionID',
        data.jwt,
      );
      dispatch({
          type: SIGN_UP,
          payload: data.user,
      });
  })
  .catch((error) => {
      if (error.message === 'Request failed with status code 422') {
        dispatch({ type: 'SIGN_ERROR', payload: 'Account already exists..' });
      }
    });

const design = () => (dispatch) => fetch('https://find-design-api.herokuapp.com/houses', {
  mode: 'cors',
  method: 'GET',
})
  .then((response) => response.json())
  .then((json) => dispatch(
    { type: DESIGN, payload: json },
  ))
  .catch((err) => dispatch(
    { type: ERROR, error: err },
  ));

export {
  SignUp,
  design,
};
