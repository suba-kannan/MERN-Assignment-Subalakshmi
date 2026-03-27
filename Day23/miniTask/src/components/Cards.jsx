const Cards = ({name,image,type}) => {
  return (
    <>
      <div className="bg-purple-500 shadow-lg rounded-xl p-4 text-center">
        <img src={image} className="h-32 mx-auto mb-3" />

        <h2 className="font-bold text-lg capitalize">{name}</h2>
        <p className="text-black capitalize mt-1">Type: {type}</p>
      </div>
    </>
  );
};

export default Cards;
