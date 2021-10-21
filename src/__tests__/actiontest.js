import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';

const expectedUserState = {
  name: 'test',
  email: 'test@me.com',
  password_digest: '***********',
  created_at: '2021-05-09',
  updated_at: '2021-05-09',
};

const expectedRegisterState = {
  message: 'Created',
  user: expectedUserState,
  jwt: '**************',
};

const expectedLoginState = {
  user: expectedUserState,
  jwt: '**************',
  message: 'Created',
};

const getCarObject = {
  house_id: 1,
};

const expectedHouseState = [
  {
    id: 4,
    price: 200.0,
    details: 'details 1',
    about: 'A single house',
    picture: 'https://link.jpeg',
    owner: 'Autjer',
    created_at: '2021-05-03',
    updated_at: '2021-05-03',
  },
  {
    id: 5,
    price: 800.0,
    details: 'details',
    about: 'A single house',
    picture: 'https://link.jpeg',
    owner: 'Autjer',
    created_at: '2021-05-03',
    updated_at: '2021-05-03',
  },
];

const expectedFavoriteState = [
  {
    id: 6,
    user_id: 1,
    house_id: 1,
    created_at: '2021-05-09',
    updated_at: '2021-05-09',
  },
];

const registerObject = {
  name: 'test',
  email: 'test@me.com',
  password: '12345',
  password_confirmation: '12345',
};

const loginObject = {
  email: 'test@me.com',
  password: '12345',
};

const auth = '************';

const signInApiUrl = {
  method: 'POST',
  url: 'https://find-design-api.herokuapp.com/login',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    mode: 'cors',
  },
  body: loginObject,
};

const signUpApiUrl = {
  method: 'POST',
  url: 'https://find-design-api.herokuapp.com/users',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    mode: 'cors',
  },
  body: registerObject,
};

const successRegister = () => ({
  type: 'SIGN_UP',
  user: expectedRegisterState,
});

const successCar = () => ({
  type: 'DESIGN',
  design: expectedHouseState,
});

const successLogin = () => ({
  type: 'SIGN_IN',
  user: expectedRegisterState,
});

const successHouses = () => ({
  type: 'DESIGN',
  design: expectedHouseState,
});

const fetchDataRegister = async () => (dispatch) => fetch(('https://find-design-api.herokuapp.com/users', {
  body: registerObject,
  method: 'POST',
  headers: { 'content-type': 'application/json', Accept: 'application/json' },
}))
  .then((response) => response.json())
  .then(() => dispatch(successRegister()));

const fetchDataLogin = async () => (dispatch) => fetch(('https://find-design-api.herokuapp.com/login', {
  body: loginObject,
  method: 'POST',
  headers: { 'content-type': 'application/json', Accept: 'application/json' },
}))
  .then(() => dispatch(successLogin()));

const fetchDataHouse = async () => (dispatch) => fetch(('https://find-design-api.herokuapp.com/houses', {
  method: 'GET',
  mode: 'cors',

}))
  .then((response) => response.json())
  .then(() => dispatch(successHouses()));

const fetchDataFavorite = async () => (dispatch) => fetch(('https://find-design-api.herokuapp.com/users/1/favourites', {
  body: getCarObject,
  method: 'GET',
  headers: { 'content-type': 'application/json', Accept: 'application/json', Authorization: `Bearer ${auth}` },
}))
  .then(() => dispatch(successCar()));
const mockStore = configureStore([thunk]);
let store;

describe('sign up', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('Store is updated correctly', async () => {
    store = mockStore(expectedRegisterState);
    moxios.wait(() => {
      moxios.stubOnce('POST', signUpApiUrl, {
        status: 200,
        response: expectedRegisterState,
      });
    });

    return store.dispatch(fetchDataRegister).then(() => {
      const newState = store.getState();
      expect(Object.entries(newState)).toEqual(Object.entries(expectedRegisterState));
    });
  });

  it('should return an empty array', async () => store.dispatch(fetchDataRegister)
    .then(() => {
      expect(store.getActions()).toEqual([]);
    }));

  it('should not return an empty array', async () => store.dispatch(fetchDataRegister)
    .then(() => {
      expect(store.getState()).not.toEqual([]);
    }));
});

describe('login', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  store = mockStore(expectedLoginState);

  it('Store is updated correctly', async () => {
    moxios.wait(() => {
      moxios.stubOnce('POST', signInApiUrl, {
        status: 200,
        response: expectedLoginState,
      });
    });

    return store.dispatch(fetchDataLogin).then(() => {
      const newState = store.getState();
      expect(newState).toEqual(expectedLoginState);
    });
  });

  it('should return an empty array', async () => store.dispatch(fetchDataLogin)
    .then(() => {
      expect(store.getActions()).toEqual([]);
    }));

  it('should not return an empty array', async () => store.dispatch(fetchDataLogin)
    .then(() => {
      expect(store.getState()).not.toEqual([]);
    }));
});

describe('houses', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  store = mockStore(expectedHouseState);
  it('should return an empty array', async () => store.dispatch(fetchDataHouse)
    .then(() => {
      expect(store.getActions()).toEqual([]);
    }));

  it('should not return an empty array', async () => store.dispatch(fetchDataHouse)
    .then(() => {
      expect(store.getState()).not.toEqual([]);
    }));
});

describe('favorite houses', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  store = mockStore(expectedFavoriteState);
  it('should return an empty array', async () => store.dispatch(fetchDataFavorite)
    .then(() => {
      expect(store.getActions()).toEqual([]);
    }));

  it('should not return an empty array', async () => store.dispatch(fetchDataFavorite)
    .then(() => {
      expect(store.getState()).not.toEqual([]);
    }));
});
