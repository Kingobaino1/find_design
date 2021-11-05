import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Registration from './Components/Registration';
import DesignPages from './Containers/DesignPage';
import Login from './Components/Login';
import ShowCars from './Containers/ShowCars';
import SingleCar from './Containers/SingleCar';
import LoadingPage from './Components/LandingPage';

const Routes = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/start" />
        </Route>
        <Route exact path="/start" component={LoadingPage} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/favorites" component={ShowCars} />
        <Route exact path="/car" component={SingleCar} />
        <Route exact path="/home" component={DesignPages} />
      </Switch>
    </BrowserRouter>
  </>
);

export default Routes;
