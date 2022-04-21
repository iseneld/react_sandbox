import { useState, useEffect } from "react";

export const Compounder = () => {
  const [age, setAge] = useState(33);
  const [savings, setSavings] = useState(1000);
  const [returns, setReturns] = useState(1.04);
  const [compound, setCompound] = useState(1);

  useEffect(() => {
      let prutt = Math.pow(returns, (65-age));
      setCompound(prutt);
    
  }, [compound, returns, age]);

  // useEffect(() => {
  //   let prutt = Math.pow(returns, (65-age));
  //   setCompound(prutt);
  // }, [compound, returns, age]);

  return (
    <main>
      <label>
        Age: 
        <input type="range" min="18" max="65" className="slider" id="myRange" 
          onChange={(e) => {setAge(e.target.value)}}/>
        {age} years old
      </label>
      <label>
        Monthly savings: 
        <input type="range" min="1000" max="9999" className="slider" id="myRange" 
          onChange={(e) => {setSavings(e.target.value)}}/>
        {savings} SEK/month
      </label>
      <label>
        Annual return: 
        <input type="range" min="0" max="8" className="slider" id="myRange" 
          onChange={(e) => {setReturns((e.target.value/100)+1)}} />
        {((returns*100)-100).toFixed(0)}%
      </label>
      
      <h1>{((((savings*12)*(40-age))*compound)/1000000).toFixed(2)} MKr at 40</h1>
      <h1>{((((savings*12)*(50-age))*compound)/1000000).toFixed(2)} MKr at 50</h1>
      <h1>{((((savings*12)*(65-age))*compound)/1000000).toFixed(2)} MKr at 65</h1>
      
    </main>
  );
}