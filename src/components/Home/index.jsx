import { useCart } from "../../providers/cart";
import { useProducts } from "../../providers/products";
import { Container, Content } from "../../CSS/homeStyle";

const Home = () => {
  const { products } = useProducts();
  const { addToCart } = useCart();

  return (
    <Container>
      {products.map((product) => (
        <>
          <Content>
            <img src={product.img} alt={product.name} />
            <div>
              <h3>{product.name}</h3>
              <span>
                {product.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <button onClick={() => addToCart(product)}>
                Adicionar ao Carrinho
              </button>
            </div>
          </Content>
        </>
      ))}
    </Container>
  );
};

export default Home;
