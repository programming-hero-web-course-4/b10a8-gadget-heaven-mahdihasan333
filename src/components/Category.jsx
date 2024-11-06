import { NavLink } from "react-router-dom";

const Category = ({category}) => {
  return (
    <div className="mt-3 p-2 bg-gray-700 rounded-3xl">
      <NavLink to={`/category/${category.category}`}>{category.category}</NavLink>
    </div>
  );
};

export default Category;