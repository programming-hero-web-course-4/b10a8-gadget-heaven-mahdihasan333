import { NavLink, useParams } from "react-router-dom";
import Category from "./Category";
import Cards from "./Cards";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../root/Root";
// import { useEffect, useState } from "react";
const Categories = () => {

  const {categories} = useContext(UserContext) 
  console.log(categories)

  const {category} = useParams();
  console.log(category)


  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`../categories.json`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
      <h2 className="text-black mt-[450px] text-center font-bold text-3xl">Explore Cutting-Edge Gadgets</h2>
      <div className="flex gap-5 container mx-auto my-12">
        <div className="w-2/12 bg-white rounded-xl p-5 shadow-lg">
          <NavLink to="/category/allProducts" className="bg-gray-700 rounded-3xl">All Product</NavLink>
          {data?.map((category, index) => (
            <Category key={index} category={category}></Category>
          ))}
        </div>
        <Cards />
      </div>
    </>
  );
};

export default Categories;
