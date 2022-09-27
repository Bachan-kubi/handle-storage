import React, { useEffect, useState } from "react";
import Cosmetic from "../Cosmetic/Cosmetic";
import './Cosmetics.css'

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([])
  useEffect(()=>{
    fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCosmetics(data))
  }, [])
  return (
    <div>
      <h1>This is Cosmetics!</h1>
      <h3>Total Data: {cosmetics.length}</h3>
      <div className="cosmetics">
        {cosmetics.map((cosmetic) => (
          <Cosmetic 
          cosmetic={cosmetic} 
          key={cosmetic.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Cosmetics;
