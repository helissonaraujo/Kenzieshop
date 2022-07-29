import CartTotal from '../Components/CartTotal';
import Header from '../Components/Header';
import Products from '../Components/Products';
import { Container, Main } from '../CSS/home.js';

export default function Home() {
	return (		
		<Container>	
			<Header />	
			<Main>
				<Products />
				<CartTotal/>
			</Main>			
		</Container>
		
	);
}
