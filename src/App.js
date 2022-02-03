import './App.css';
import Input from "./Input";
import {useState} from "react";

function App() {
    const [bill, setBill] = useState(0)
    const [tipAmount, setTipAmount] = useState(0.05)
    const [options, setOptions] = useState({'0.05': '', '0.1': '', '0.15': '', '0.25': '', '0.5': ''})
    const [peopleCount, setPeopleCount] = useState(1)
    const [tipTotal, setTipTotal] = useState(0.00)
    const [totalBill, setTotalBill] = useState(0.00)

    const selectTip = (e) => {
        const tip = parseFloat(e.target.value)
        let newOptions = {'0.05': '', '0.1': '', '0.15': '', '0.25': '', '0.5': ''}
        newOptions[e.target.value] = 'active'
        setOptions(newOptions)
        setTipAmount(tip)
        calculate()
    }

    const saveBill = e => {
        if (e.target.value != '') {
            setBill(parseFloat(e.target.value))
            calculate()
        }
    }
    const savePeople = e => {
        if (e.target.value != '') {
            setPeopleCount(parseInt(e.target.value))
            calculate()
        }
    }

    const calculate = () => {
        if (bill > 0 && peopleCount > 0 && tipAmount > 0) {
            setTipTotal((bill*tipAmount).toFixed(2))
            setTotalBill((bill+tipTotal).toFixed(2))
        }
    }

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
            <Input type="number" />
        </div>

        <label>Number of people</label>
        <Input type="text" value={peopleCount} onChange={savePeople} />
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
