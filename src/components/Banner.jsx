import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero relative">
      <div className="hero-content text-center bg-primary px-8 rounded-xl">
        <div className="flex flex-col items-center px-40 text-white pt-10 pb-48">
          <h1 className="text-5xl font-bold">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="py-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <NavLink
            to="/dashboard"
            className="btn border-none bg-white text-primary rounded-full font-bold"
          >
            Shop Now
          </NavLink>
        </div>
      </div>
      <div className="absolute top-[400px] p-5 bg-black rounded-2xl">
        <div className="text-black h-[450px] w-[800px]">
          {/* <img className="w-full h-full rounded-2xl"  src="" alt="" /> */}
          <div className="hero bg-cover bg-banner min-h-[450px] rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
