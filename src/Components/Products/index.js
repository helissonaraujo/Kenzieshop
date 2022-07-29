import { useSelector } from 'react-redux';
import Product from '../Product';
import { Container } from '../../CSS/productsComponent';

export default function Products() {
	const products = useSelector(({ products }) => products);
	return (
		<Container>
			{products.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</Container>
	);
}
