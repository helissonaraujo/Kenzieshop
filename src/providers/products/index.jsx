import { createContext, useContext, useState } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products] = useState([
    {
      name: "Iphone 8 pluss",
      price: 1599,
      img: "https://http2.mlstatic.com/D_NQ_NP_988207-MLA43711395866_102020-O.jpg",
      id: 1,
    },

    {
      name: "Iphone X",
      price: 2999,
      img: "https://i.zst.com.br/thumbs/12/3/39/-13306456.jpg",
      id: 2,
    },

    {
      name: "Iphone XS",
      price: 3999,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTFD2_AV1_SILVER_GEO_BR?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1536254160064",
      id: 3,
    },

    {
      name: "Iphone XS Max",
      price: 4999,
      img: "https://http2.mlstatic.com/D_NQ_NP_864883-MLA43761969475_102020-O.jpg",
      id: 4,
    },

    {
      name: "Iphone 11",
      price: 5999,
      img: "https://http2.mlstatic.com/D_NQ_NP_864883-MLA43761969475_102020-O.jpg",
      id: 5,
    },
    {
      name: "Iphone 11 Pro",
      price: 6999,
      img: "https://http2.mlstatic.com/D_NQ_NP_864883-MLA43761969475_102020-O.jpg",
      id: 6,
    }
  ]);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
