const SIGN_UP = 'SIGN_UP';
const SIGN_IN = 'SIGN_IN';
const DESIGN = 'DESIGN';
const ERROR = 'ERROR';
const FAV = 'FAV';
const FAVE = 'FAVE';
const CAR = 'CAR';

const arr = [];

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
  .then((response) => response.json())
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
      history.push('/home');
    } else if (data.errors) {
      arr.push(data.errors);
      history.push('/registration');
    }
  })
  .catch((error) => {
    if (error.message === 'Request failed with status code 422') {
      dispatch({ type: 'SIGN_ERROR', payload: 'Account not created..' });
    }
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
  .then((response) => response.json())
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
      history.push('/home');
    } else if (data.error) {
      arr.push(data.error);
      history.push('/login');
    }
  })
  .catch((error) => {
    if (error.message === 'Request failed with status code 422') {
      dispatch({ type: 'SIGN_IN_ERROR', payload: 'Invalid Email or password..' });
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

const getSingleCar = (id) => (dispatch) => fetch(`https://find-design-api.herokuapp.com/houses/${id}`, {
  mode: 'cors',
  method: 'GET',
})
  .then((response) => response.json())
  .then((json) => dispatch(
    { type: CAR, payload: json },
  ))
  .catch((err) => dispatch(
    { type: ERROR, error: err },
  ));

const errorMessage = () => arr[0];

const saveFavoriteCar = (id, token, userId) => (dispatch) => fetch(`https://find-design-api.herokuapp.com/users/${userId}/favourites`, {
  method: 'POST',
  body: JSON.stringify({
    house_id: id,
  }),
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    mode: 'cors',
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => response.json())
  .then((fav) => dispatch(
    { type: FAV, payload: fav.house },
  ))
  .catch((err) => dispatch(
    { type: ERROR, payload: err },
  ));

const getFavoriteCars = (token, userId, history) => (dispatch) => fetch(`https://find-design-api.herokuapp.com/users/${userId}/favourites`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    mode: 'cors',
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => response.json())
  .then((fav) => {
    if (Object.entries(fav.cars).length === 0) {
      return 'You do not have any favorite yet!';
    }
    dispatch(
      { type: FAVE, payload: fav.cars },
    );
    return history.push('/favorites');
  })
  .catch((err) => dispatch(
    { type: ERROR, payload: err },
  ));

export {
  SignUp,
  design,
  SignIn,
  errorMessage,
  saveFavoriteCar,
  getFavoriteCars,
  getSingleCar,
};
