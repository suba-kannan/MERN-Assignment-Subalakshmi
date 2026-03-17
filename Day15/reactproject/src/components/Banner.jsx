
const Banner = ({title,description,button}) => {
  return (
    <>
      <div className="bg-blue-900 text-white h-150 flex items-center justify-center">
        <div className="text-center ">
          <h1 className="text-5xl font-bold mb-4">{title}</h1>

          <p className="text-lg text-gray-300 mb-6">{description}</p>

          {button && (
            <button className="bg-blue-500 px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition">
              {button}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Banner