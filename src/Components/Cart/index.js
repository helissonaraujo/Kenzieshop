import { useSelector } from 'react-redux';
import { CardCart, ContainerCart, ContainerPrincipal } from '../../CSS/cartComponent';
import Product from '../Product';
import CartTotal from '../CartTotal';
import CartEmpty from '../CartEmpty';

export default function Cart() {
	const cart = useSelector(({ cart }) => cart);

	return (
		<ContainerPrincipal>
			<ContainerCart>
				{cart.length === 0 ? (
					<CartEmpty />
				) : (
					<CardCart>
						{cart.map((product) => (
							<Product key={product.id} product={product} isRemovable />
						))}
					</CardCart>
				)}
			</ContainerCart>
			<CartTotal />
		</ContainerPrincipal>
	);
}
