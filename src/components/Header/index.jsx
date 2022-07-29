import { Container, Content, IconHeader } from "../../CSS/headerStyle";

import { FiShoppingCart } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useCart } from "../../providers/cart";

const Header = () => {
  const history = useHistory();
  const { cart } = useCart();

  return (
    <>
      <Container>
        <h2 onClick={() => history.push("/")}>Kenzie <span>Shop</span></h2>
        <Content>
          <IconHeader onClick={() => history.push("/cart")}>
            <FiShoppingCart />
            <span>{cart.length}</span>
            <p>Carrinho</p>
          </IconHeader>

          <IconHeader>
            <FiLogIn />
            <p>Entrar</p>
          </IconHeader>
        </Content>
      </Container>
    </>
  );
};

export default Header;
