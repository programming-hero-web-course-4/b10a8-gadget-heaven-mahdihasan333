import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();




const Root = () => {


  const [addCard, setAddCard] = useState([])

  const [addWistList, setAddWistList] = useState([])

  const [categories, setCategories] = useState([])

  const [products, setProducts] = useState([])

  const getCategory = async () => {
    const response = await fetch('../categories.json')
    const data = await response.json()
    setCategories(data);
  }


  const getProduct = async () => {
    const response = await fetch('../allData.json')
    const productData = await response.json()
    setProducts(productData)
  }


  useEffect(() => {
    getCategory()
    getProduct()

  },[])


  



  return (

    <UserContext.Provider value={{categories, products, addCard, setAddCard, addWistList, setAddWistList}}>
      <div className="bg-[#f7f7f7]">
        {/* Navbar Section */}
        <Navbar />
        {/* main Section */}

        <Outlet />

        {/* Footer Section */}
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

export default Root;
