import ContainerCart from '../Components/Cart';
import HeaderCart from '../Components/HeaderCart';
import { Container } from '../CSS/cart.js';

export default function Cart() {
	return (
		<>
			<HeaderCart />
			<Container>
				<ContainerCart />
			</Container>
		</>
		
	);
}
