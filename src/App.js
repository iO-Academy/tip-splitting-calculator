import './App.css';
import Input from "./Input";
import {useEffect, useState} from "react";

function App() {
    const [bill, setBill] = useState(0)
    const [tipAmount, setTipAmount] = useState(0.05)
    const [options, setOptions] = useState({'0.05': '', '0.1': '', '0.15': '', '0.25': '', '0.5': ''})
    const [peopleCount, setPeopleCount] = useState(1)
    const [tipTotal, setTipTotal] = useState(0.00)
    const [totalBill, setTotalBill] = useState(0.00)

    const selectTip = e => {
        const tip = parseFloat(e.target.value)
        let newOptions = {'0.05': '', '0.1': '', '0.15': '', '0.25': '', '0.5': ''}
        newOptions[e.target.value] = 'active'
        setOptions(newOptions)
        setTipAmount(tip)
    }

    const setCustomTip = e => {
        const tip = parseFloat(e.target.value) / 100
        let newOptions = {'0.05': '', '0.1': '', '0.15': '', '0.25': '', '0.5': ''}
        setOptions(newOptions)
        setTipAmount(tip)
    }

    const saveBill = e => {
        if (e.target.value !== '') {
            setBill(parseFloat(e.target.value))
        }
    }
    const savePeople = e => {
        if (e.target.value !== '') {
            setPeopleCount(parseInt(e.target.value))
        }
    }

    const calculate = () => {
        if (bill > 0 && peopleCount > 0 && tipAmount > 0) {
            setTipTotal(parseFloat(((bill * tipAmount) / peopleCount).toFixed(2)))
        }
    }

    useEffect(() => {
        calculate()
    }, [peopleCount, bill, tipAmount])

    useEffect(() => {
        setTotalBill(((bill / peopleCount) + tipTotal).toFixed(2))
    }, [tipTotal])

  return (
    <div className="app">
      <div className="inputs">
        <label>Bill</label>
        <Input type="text" onChange={saveBill} />

        <label>Select Tip %</label>
        <div className="tip-amount">
            <button value="0.05" className={options['0.05']} onClick={selectTip}>5%</button>
            <button value="0.1" className={options['0.1']} onClick={selectTip}>10%</button>
            <button value="0.15" className={options['0.15']} onClick={selectTip}>15%</button>
            <button value="0.25" className={options['0.25']} onClick={selectTip}>25%</button>
            <button value="0.5" className={options['0.5']} onClick={selectTip}>50%</button>
            <Input type="number" onChange={setCustomTip} min={1} max={100} />
        </div>

        <label>Number of people</label>
        <Input type="number" value={peopleCount} onChange={savePeople} min={1}/>
      </div>
      <div className="output">
          <div>
              <h4>Tip Amount</h4>
              <h2>£{tipTotal}</h2>
          </div>

          <div>
              <h4>Total</h4>
              <h2>£{totalBill}</h2>
          </div>

          <button>Reset</button>
      </div>
    </div>
  );
}

export default App;
