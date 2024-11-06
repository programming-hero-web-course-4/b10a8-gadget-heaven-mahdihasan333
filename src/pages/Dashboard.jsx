import { NavLink } from "react-router-dom";
import Heading from "../components/Heading";
import { useContext, useState } from "react";
import { UserContext } from "../root/Root";

const Dashboard = () => {
  const { addCard, addWistList } = useContext(UserContext);

  const [selectCard, setSelectCard] = useState(true);

  //
  const handleIsCart = () => {
    setSelectCard(true);
  };

  //
  const handleIsWishList = () => {
    setSelectCard(false);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="bg-primary py-8 container mx-auto">
          <Heading
            title="Dashboard"
            subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          />
          <div className="flex items-center justify-center gap-8 container mx-auto">
            <div>
              <div role="tablist" className="tabs flex gap-10 mt-6">
                <button onClick={handleIsCart} className="btn">
                  <NavLink
                    role="tab"
                    className="tab tab-active text-white text-xl font-bold"
                  >
                    Cart
                  </NavLink>
                </button>
                <button onClick={handleIsWishList} className="btn">
                  <NavLink
                    role="tab"
                    className="tab tab-active text-white text-xl font-bold"
                  >
                    Wishlist
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-14 my-6 text-black">
          <h2 className="text-3xl font-bold">Cart</h2>
          <div className="flex gap-5 items-center">
            <h2 className="text-xl font-semibold">
              Total Cost: <span></span>
            </h2>
            <button className="btn text-black px-5 py-3 bg-transparent border-primary">
              Sort by Price
            </button>
            <button className="btn bg-primary text-white border-none">
              Purchase
            </button>
          </div>
        </div>

        {selectCard
          ? addCard.map((card) => (
              <>
              <h2>Cart</h2>
                <div className="my-14 text-black">
                  <div className="card p-5 container mx-auto card-side bg-white shadow-xl">
                    <figure>
                      <img src={card.product_image} alt="Movie" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-black">
                        {card.product_title}
                      </h2>
                      <p>{card.description}</p>
                      <p>Price: {card.price}</p>
                      <button className="bg-primary border-none text-white btn w-fit">
                        Add To Cart
                      </button>
                    </div>
                    <div>
                      <button className="mt-20 mr-10">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))
          : addWistList.map((addWist) => (
              <>
                <h2>WishList</h2>
                <div className="my-14 text-black">
                  <div className="card p-5 container mx-auto card-side bg-white shadow-xl">
                    <figure>
                      <img src={addWist.product_image} alt="Movie" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-black">
                        {addWist.product_title}
                      </h2>
                      <p>{addWist.description}</p>
                      <p>Price: {addWist.price}</p>
                      <button className="bg-primary border-none text-white btn w-fit">
                        Add To Cart
                      </button>
                    </div>
                    <div>
                      <button className="mt-20 mr-10">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
        {}
      </div>
    </>
  );
};

export default Dashboard;
