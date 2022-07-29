import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../Store/Modules/cart/action';
import { Card } from '../../CSS/productComponent';
import { toast } from 'react-toastify';
import cart from '../../assets/cart.png';

export default function Product({ product, isRemovable = false }) {
	const dispatch = useDispatch();
	const { id, name, price, image } = product;
	return (
		<Card>
			<img src={image} alt="Imagem Produto" />
			<h3>{name}</h3>
			<h4>
				{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
			</h4>
			{isRemovable ? (
				<button
					onClick={() =>
						dispatch(
							removeFromCart(id),
							toast.error('Produto removido do carrinho!')
						)
					}
				>
					<img className="cart" src={cart}/>
				</button>
			) : (
				<button
					onClick={() =>
						dispatch(
							addToCart(product),
							toast.success('Produto adicionado ao carrinho!')
						)
					}
				>
					<img className="cart" src={cart}/>
				</button>
			)}
		</Card>
	);
}
