import { useState, useEffect } from "react";

export const Compounder = () => {
  const [age, setAge] = useState(1);
  const [monthlySavings, setMonthlySavings] = useState(1000);
  const [annualReturn, setAnnualReturn] = useState(1);
  const [bajs, setBajs] = useState(1);

  useEffect(() => {
      for (var i = 0; i < age; i++) {
        setBajs(bajs);
      }
  }, [bajs, age]);

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
          onChange={(e) => {setMonthlySavings(e.target.value)}}/>
        {monthlySavings} SEK/month
      </label>
      <label>
        Annual return: 
        <input type="range" min="0" max="15" className="slider" id="myRange" 
          onChange={(e) => {setAnnualReturn(e.target.value)}}/>
        {annualReturn}%
      </label>
      
      <p>{bajs} kr</p>
      
    </main>
  );
}