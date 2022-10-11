import "./App.css";
import money from "./assets/images/money.png";
import { CurrencyComponent } from "./components/CurrencyComponent";
import { useEffect,useState } from "react";

function App() {
  const [currencyChoice,setCurrencyChoice] = useState([])
  
  const [fromCurrency,setFromCurrency] = useState("USD")
  const [toCurrency,setToCurrency] = useState('THB')

  const [amount,setAmount] = useState(1)
  const [exChangeRate,setExchangeRate] = useState(0)

  useEffect(() => {
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    fetch(url)
    .then((res) => res.json())
    .then(data=>{
      setCurrencyChoice([...Object.keys(data.rates)])
      setExchangeRate(data.rates[toCurrency])
    })
    
  },[fromCurrency,toCurrency]);

  return (
    <div className="App">
      <img src={money} alt="logo" className="money-img" />
      <h1>App Convert Currency (API)</h1>
      <div className="container">
        <CurrencyComponent 
        currencyChoice={currencyChoice} 
        selectCurrency={fromCurrency} 
        changeCurrency={(e)=>setFromCurrency(e.target.value)}
        inputAmount={(e)=>setAmount(e.target.value)}/>
        <div className="equal"> = </div>
        <CurrencyComponent 
        currencyChoice={currencyChoice} 
        selectCurrency={toCurrency}
        changeCurrency={(e)=>setToCurrency(e.target.value)}
        inputAmount={(e)=>setAmount(e.target.value)} />


      </div>
    </div>
  );
}

export default App;
