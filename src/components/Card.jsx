import { NavLink } from "react-router-dom";

const Card = ({card}) => {
  
    
  const { product_image, product_title, price, product_id } = card;
  return (
    <div className="card bg-gray-200 shadow-xl">
      <figure className="p-8  h-56 object-cover rounded-xl">
        <img src={product_image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>{price}</p>
        <div className="card-actions">
          <NavLink
            to={`/product-details/${product_id}`}
            className="border-2 border-primary py-4 px-4 rounded-full text-primary bg-transparent"
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
