import { useState, useEffect } from "react";
import "./App.css";
import FortuneCookieButton from "./components/FortuneCookieButton";
import FortuneCookiePaper from "./components/FortuneCookiePaper";
import phrases from "./utils/phrases.json";
import getRandomSentence from "./services/randomIndex";

function App() {
  let sentence = getRandomSentence(phrases);

  let [quote, setQuote] = useState(sentence);

   //Cambio del background aleatoriamente
  let [backgroundIndex, setBackgroundIndex] = useState(Math.floor(Math.random() * 4) + 1);
 
  useEffect(() => {
    document.body.className = `background${backgroundIndex}`;
  }, [backgroundIndex]);

  return (
    <>
      <h1>Galleta de la Fortuna</h1>
      <FortuneCookiePaper  quote={quote} />
      <FortuneCookieButton setQuote={setQuote} setBackgroundIndex={setBackgroundIndex} />
    </>
  );
}

export default App;
