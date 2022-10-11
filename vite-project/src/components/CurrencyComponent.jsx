import React from "react";
import "./CurrencyComponent.css";


export const CurrencyComponent = (props) => {
  const {currencyChoice,selectCurrency,changeCurrency,InputAmount} = props;
  return (
    <div className="currency">
    <select value={selectCurrency} onChange={changeCurrency}>
        {currencyChoice.map((choice)=>
            <option key={choice} value={choice}>{choice}</option>
        )}
    </select>
    <input type="number" value={InputAmount}/>
    </div>
  );
};
