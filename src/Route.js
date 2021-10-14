import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Registration from './Components/Registration';
import DesignPages from './Components/DesignPage';
import Login from './Components/Login';

const Routes = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={Registration} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/designs" component={DesignPages} />
      </Switch>
    </BrowserRouter>
  </>
);

export default Routes;
