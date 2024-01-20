import React from "react";
import phrases from '../utils/phrases.json'; 
import getRandomSentence from "../services/randomIndex";

const FortuneCookieButton = ({setQuote,setBackgroundIndex}) => {
  
  const handleProbarMiSuerte = () => {
    setQuote(getRandomSentence(phrases))
    
    //cambio de background
    const randomIndex = Math.floor(Math.random() * 4) + 1;
    setBackgroundIndex(randomIndex); 
 
  };

  return (
    <>
      <button className="boton" onClick={handleProbarMiSuerte}>
        Probar mi suerte
      </button>
    </>
  );
}

export default FortuneCookieButton;