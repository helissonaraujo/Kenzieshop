import { useSelector } from 'react-redux';
import { Container } from '../../CSS/cartTotalComponent';

export default function CartTotal() {
	const cart = useSelector(({ cart }) => cart);

	const cartTotalValue = cart.reduce((valorAnterior, valorAtual) => {
		return valorAnterior + Number(valorAtual.price);
	}, 0);

	return (
		<Container>
			<h2>Resumo do Pedido</h2>
			<span>{cart.length} Produtos</span>
			<span>
				{cartTotalValue.toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				})}
			</span>
			<button>Finalizar Pedido</button>
		</Container>
	);
}
