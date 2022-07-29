import Cart from '../Pages/cart';
import Home from '../Pages/home';
import {Switch, Route} from 'react-router-dom';

export function Routes() {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="/cart">
				<Cart />
			</Route>
		</Switch>
	);
}

