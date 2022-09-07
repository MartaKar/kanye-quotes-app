import React, { useState }from "react";
import axios from "axios"
import kanye from "./images/kanye.png"
import kanyeglasses from "./images/kanye_glasses.png"
import "./App.css"

function App() {
    const [quote, setQuote] = useState("");
    function kanyeQuote() {
        axios.get("https://api.kanye.rest")
            .then((response) => {
                const quote = response.data.quote;
                setQuote(quote);
            }) 
            .catch((error) => {

            })
    
    }
    

  return (<div className="app">
            <div className="card"> 
            <div className="quote">
                <h2>{quote}</h2>
                </div> 
                <div>
                <input value="" className="button" onClick={kanyeQuote} alt="kanye" type="submit" ></input>
                </div>        
  </div>
  
  </div>)
}

export default App