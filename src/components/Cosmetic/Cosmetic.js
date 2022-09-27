import React from "react";
import { addToStorage, removeFromDB, removeShoppingCart } from "../Utilities/fakeDB";

const Cosmetic = (props) => {
    //destructure of data
    const {name, price, id} = props.cosmetic;

    const addToCart= (id)=>{
        addToStorage(id)
    }
    const removeItems=id=>{
      removeFromDB(id)
    }

  return (
    <div>
        <h3>Buy Our Cosmetics!</h3>
      <div className="cosmetic">
        <h4>Name: {name} </h4>
        <h4>Price: {price} </h4>
        <h4>ID: {id} </h4>
        <button onClick={()=>addToCart(id)}>Add To Cart</button>
        <button onClick={()=>removeItems(id)}>Delete</button>
        <button onClick={()=>removeShoppingCart(id)}>Remove All</button>


        {/* <h4>Name: {props.cosmetic.name} </h4>
        <h4>Price: {props.cosmetic.price} </h4>
        <h4>ID: {props.cosmetic.id} </h4> */}

      </div>
    </div>
  );
};

export default Cosmetic;
