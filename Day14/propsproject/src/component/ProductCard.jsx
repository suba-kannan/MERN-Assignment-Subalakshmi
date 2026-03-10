
const ProductCard = ({productDetails}) => {
  return (
    <>
      <div className="flex bg-green-300 justify-between p-7">
        <h2>Product Cards:</h2>
        {productDetails.map((details, i) => (
          <div key={i + 1}>
            <div className="bg-white p-4 rounded">
              <p>Id: {details.id}</p>
              <p>Name: {details.name}</p>
              <p>Price: ₹{details.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCard