const SIGN_UP = 'SIGN_UP';
const SIGN_IN = 'SIGN_IN';
const DESIGN = 'DESIGN';
const ERROR = 'ERROR';
let arr = [];

const SignUp = (user, history) => (dispatch) => fetch('https://find-design-api.herokuapp.com/users', {
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
      if (data.user) {
        window.localStorage.setItem(
          'sessionID',
          JSON.stringify(data),
        );
        dispatch({
          type: SIGN_UP,
          payload: data.user,
        });
        history.push('/designs')
      } else if (data.errors) {
        arr.push(data.errors);
        history.push('/home');
      }
  })
  .catch((error) => {
      if (error.message === 'Request failed with status code 422') {
        dispatch({ type: 'SIGN_ERROR', payload: 'Account not created..' });
      };
    });

const SignIn = (user, history) => (dispatch) => fetch('https://find-design-api.herokuapp.com/login', {
  method: 'POST',
  body: JSON.stringify({
    email: user.email,
    password: user.password,
  }),
  headers: {
   'Content-Type': 'application/json',
    Accept: 'application/json',
    mode: 'cors',
  },
})
  .then(response => response.json())
  .then((data) => {
      if (data.user) {
        window.localStorage.setItem(
          'sessionID',
          JSON.stringify(data),
    );
        dispatch({
            type: SIGN_IN,
            payload: data.user,
        });
        history.push('/designs')
      } else if (data.error) {
          arr.push(data.error)
          history.push('/login');
      };
  })
  .catch((error) => {
      if (error.message === 'Request failed with status code 422') {
        dispatch({ type: 'SIGN_IN_ERROR', payload: 'Invalid Email or password..' });
      };
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

const errorMessage = () => {
  return arr[0];
};

export {
  SignUp,
  design,
  SignIn,
  errorMessage,
};
