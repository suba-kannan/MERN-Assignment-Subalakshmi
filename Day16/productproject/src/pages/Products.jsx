import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" },
    { id: 3, name: "Tablet" },
  ];

  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Products</h1>

        <div className="flex gap-20">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-xl shadow "
            >
              <h2 className="text-lg font-semibold mb-4">{item.name}</h2>

              <Link
                to={`/products/${item.id}`}
                className="text-green-600 font-medium"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
