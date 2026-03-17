import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div className="p-6">
        <div className="">
          <h1 className="text-2xl font-bold mb-4">Product Details</h1>

          <p className=" mb-6">
            Product ID: <span>{id}</span>
          </p>

          <button
            onClick={() => navigate("/products")}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Back to Products
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
