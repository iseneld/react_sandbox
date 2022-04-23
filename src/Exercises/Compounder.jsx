import { useState, useEffect } from "react";
import { birthdayCalculator, birthCalculatorYears } from "../Helpers/birthday";

export const Compounder = () => {
  const [age, setAge] = useState(33);
  const [myAge] = useState(birthCalculatorYears());
  const [myCompound, setMycompound] = useState(1);
  const [savings, setSavings] = useState(1000);
  const [need, setNeed] = useState(1000);
  const [returns, setReturns] = useState(1.04);
  const [compound, setCompound] = useState(1);

  useEffect(() => {
      let compounded = Math.pow(returns, (65-age));
      setCompound(compounded);
  }, [compound, returns, age]);

    useEffect(() => {
      let compounded = Math.pow(returns, (65-myAge));
      setMycompound(compounded);
  }, [compound, returns, myAge]);

  function needMkr(need) {
    return ((((need*12)*(73.2-age)))/1000000).toFixed(2)
  } 

  function resultMkr(years) {
    return ((((savings*12)*(years-age))*compound)/1000000).toFixed(2)
  } 

  function resultMkr2(years) {
    let ager = birthCalculatorYears();
    return ((((savings*12)*(years-ager))*myCompound)/1000000).toFixed(2)
  } 

  function toDays(years) {
    return (years * 365);
  }
  

  return (
    <main>
      <section>
        <label>
          Age: 
          <input type="range" min="18" max="64" className="slider" id="sliderAge" 
            onChange={(e) => {setAge(e.target.value)}}/>
          {age} years old
        </label>
        <label>
          Monthly savings: 
          <input type="range" 
            min="500" max="20000" step="500"
            className="slider" id="sliderSavings" 
            onChange={(e) => {setSavings(e.target.value)}}/>
          {savings} SEK/month
        </label>
        <label>
          Annual return: 
          <input type="range" min="0" max="8" className="slider" id="sliderReturns" 
            onChange={(e) => {setReturns((e.target.value/100)+1)}} />
          {((returns*100)-100).toFixed(0)}%
        </label>
        
        <h1>{resultMkr(40) > 0 ? resultMkr(40) + "MKr at 40" : null}</h1>
        <h1>{resultMkr(50) > 0 ? resultMkr(50) + "MKr at 50" : null}</h1>
        <h1>{resultMkr(65)} MKr at 65</h1>
      </section>

      <section>
        <label>
        Need: 
        <input type="range" 
          min="10000" max="30000" step="2500"
          className="slider" id="sliderNeed" 
          onChange={(e) => {setNeed(e.target.value)}}/>
        {need} SEK/month
      </label>
      <h1>{needMkr(need) > 0 ? needMkr(need) + "MKr" : null}</h1>
      </section>

      <section>
        <h1>{birthdayCalculator() + ` days since I was born`}</h1>
        <h1>{`I am ` + birthCalculatorYears() + ` old!`}</h1>
        <h1>{`~` + (toDays(81.69) - birthdayCalculator()).toFixed(0) + ` days to death`}</h1>

        <h1>{resultMkr2(40) > 0 ? resultMkr2(40) + "MKr at 40" : null}</h1>
        <h1>{resultMkr2(50) > 0 ? resultMkr2(50) + "MKr at 50" : null}</h1>
        <h1>{resultMkr2(65)} MKr at 65</h1>
      </section>
    </main>
  );
}