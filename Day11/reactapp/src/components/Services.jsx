import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import image5 from "../assets/image5.jpg"
import image6 from "../assets/image6.jpg"
import image7 from "../assets/image7.jpg"
const Services=()=> {
  return (
    <>
      <div className="serviceImg">
        <div>
          <img src={image2} />
          <p>Item 1</p>
        </div>
        <div>
          <img src={image3} />
          <p>Item 2</p>
        </div>
        <div>
          <img src={image4} />
          <p>Item 3</p>
        </div>
        <div>
          <img src={image5} />
          <p>Item 4</p>
        </div>
        <div>
          <img src={image6} />
          <p>Item 5</p>
        </div>
        <div>
          <img src={image7} />
          <p>Item 6</p>
        </div>
        </div>
    </>
  );
}

export default Services