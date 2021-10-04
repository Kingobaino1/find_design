const SIGN_UP = 'SIGN_UP';
const DESIGN = 'DESIGN';
const ERROR = 'ERROR';

const SignUp = (user) => (dispatch) => fetch('https://find-design-api.herokuapp.com/users/sign_in', {
  method: 'post',
  data: {
    name: user.name,
    email: user.email,
    password: user.password,
    password_confirmation: user.password_confirmation,
  },
  header: {
    Accept: 'application/json',
    mode: 'cors',
  },
})
  .then((response) => {
    if (typeof response.headers['access-token'] === 'string') {
      window.localStorage.setItem(
        'sessionID',
        response.headers['access-token'],
      );
      dispatch({
          type: SIGN_UP,
          payload: response.headers['access-token'],
      });
    }
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
  design
};
