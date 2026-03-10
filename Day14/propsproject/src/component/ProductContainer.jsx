import ProductCard from './ProductCard';

const ProductContainer = () => {
    const Product = [
      {
        id: 1,
        name: "Mobile",
        price: 20000,
      },
      {
        id: 2,
        name: "Tv",
        price: 55000,
      },
      {
        id: 1,
        name: "AC",
        price: 30000,
      },
    ];
  return (
    <>
      <ProductCard productDetails={Product} />
    </>
  );
}

export default ProductContainer