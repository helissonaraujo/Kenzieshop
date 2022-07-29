import { useCart} from "../../providers/cart";
import { Container, ContentList, ContentTotal, TitleCard } from "../../CSS/listProductStyle";

const ListProducts = () => {
  const { cart } = useCart();
  const {removeFromCart} = useCart();

  const allProduct = () => {
    return cart.reduce((current, make) => current + make.price, 0);
  };

  return (
    <Container>
      <ContentList>
        <TitleCard>
          <p>Produto</p>
          <p>Preço</p>
        </TitleCard>
        {cart.map((make) => (
          <>
            <section>
              <img src={make.img} alt="" />
              <p>{make.name}</p>
              <span>
                {make.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <button className="remover" onClick={()=>removeFromCart(make.id)}>Remover</button>
            </section>
          </>
        ))}
      </ContentList>
      <ContentTotal>
        <h2>Resumo dos pedidos</h2>
        <div>
          <p>{cart.length} Produtos</p>
          <span>
            {allProduct().toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
        <button>Fazer pedido</button>
      </ContentTotal>
    </Container>
  );
};

export default ListProducts;
