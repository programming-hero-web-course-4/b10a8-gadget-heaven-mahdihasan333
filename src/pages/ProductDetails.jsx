import { NavLink, useParams } from "react-router-dom";
import Heading from "../components/Heading";
import { useContext, useState } from "react";
import { UserContext } from "../root/Root";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState([]);

  const { products, setAddCard, setAddWistList } = useContext(UserContext);
  console.log(products);

  const { productId } = useParams();
  console.log(productId);

  const findProducts = products.find(
    (product) => product.product_id === parseInt(productId)
  );

  // function

  const handleCard = (id) => {
    setAddCard((prev) => [...prev, id]);
  };

  // wishlist
  const handleWishList = (id) => {
    setAddWistList((prev) => [...prev, id])
  }

  const {
    product_title,
    product_image,
    price,
    description,
    Specification,
    rating,
  } = findProducts;

  return (
    <div className="bg-primary pt-8 mb-96 relative">
      <div className="pb-48">
        <Heading
          title="Product Details"
          subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        />
      </div>
      <div className="absolute top-48 flex items-center justify-center gap-8 w-full">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={product_image} />
          </figure>
          <div className="card-body space-y-3">
            <h2 className="text-2xl font-bold">{product_title}</h2>
            <h5>Price: ${price}</h5>
            <p>{description}</p>
            <h4>Specification</h4>
            <ol>
              <li>{Specification[0]}</li>
              <li>{Specification[1]}</li>
              <li>{Specification[2]}</li>
              <li>{Specification[3]}</li>
            </ol>
            <div>{rating}</div>
            <div className="card-actions flex items-center">
              <button
                onClick={() => handleCard(findProducts)}
                className="btn bg-primary text-white"
              >
                <NavLink>
                  Add To Card
                  <i className="fa-solid fa-cart-shopping ml-2 cursor-pointer rounded-full"></i>
                </NavLink>
              </button>
              <button onClick={() => handleWishList(findProducts)}>
                <i className="fa-regular p-2 bg-white fa-heart cursor-pointer rounded-full"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
