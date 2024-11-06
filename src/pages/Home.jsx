import { useContext } from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { UserContext } from "../root/Root";

const Home = () => {

  const {categories} = useContext(UserContext) 
  console.log(categories)

  return (
    <div>
        {/* Banner Section */}
      <Banner />
      {/* categories Section */}
      <Categories />
    </div>
  );
};

export default Home;
