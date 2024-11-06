import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import { UserContext } from "../root/Root";

const Cards = () => {


  const {category} = useParams()
  console.log(category)

  const {products} = useContext(UserContext);

  const [cards, setCards] = useState([]);

  useEffect(() =>{


    if(category === 'allProducts') {
      setCards(products);
    }
    else {
      const filteredCategory = products.filter((product => product.category === category))
      setCards(filteredCategory)
      if(filteredCategory.length > 0) {
        setCards(filteredCategory)
      }
      else{
        setCards(products.slice(0, 9))
      }
    }
    

    
  },[products, category] )
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {
        cards.map((card, index) => <Card key={index} card={card}></Card>)
      }
    </div>
  );
};

export default Cards;
