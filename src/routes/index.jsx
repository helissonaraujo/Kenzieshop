import { Route, Switch } from "react-router-dom";
import Cart from "../pages/Cart";
import Shop from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Shop />
      </Route>

      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
};

export default Routes;
