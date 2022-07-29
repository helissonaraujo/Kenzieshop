import { Container } from '../../CSS/headerComponent';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<Container>
			<h1>
				Kenzie <span>Shop</span>
			</h1>
			<Link to="/cart">
				<button>Carrinho</button>
			</Link>
		</Container>
	);
}
