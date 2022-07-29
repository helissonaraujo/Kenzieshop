import { Container } from '../../CSS/headerCartComponent';
import { Link } from 'react-router-dom';

export default function HeaderCart() {
	return (
		<Container>
			<h1>
				Kenzie <span>Shop</span>
			</h1>
			<Link to="/">
				<button>Voltar</button>
			</Link>
		</Container>
	);
}
