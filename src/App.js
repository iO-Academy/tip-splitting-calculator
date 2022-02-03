import './App.css'
import FormInputs from "./FormInputs"
import {useEffect, useState} from "react"
import FormOutputs from "./FormOutputs"

const App = () => {
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

    const selectCustomTip = e => {
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

    const reset = () => {
        setBill(0)
        setPeopleCount(1)
        setTipAmount(0.05)
        setTipTotal(0.00)
        setTotalBill(0.00)
        setOptions({'0.05': '', '0.1': '', '0.15': '', '0.25': '', '0.5': ''})
    }

    useEffect(() => {
        calculate()
    }, [peopleCount, bill, tipAmount])

    useEffect(() => {
        setTotalBill(parseFloat((bill / peopleCount) + tipTotal).toFixed(2))
    }, [tipTotal])

    return (
        <div className="app">
            <FormInputs
                selectTip={selectTip}
                selectCustomTip={selectCustomTip}
                saveBill={saveBill}
                bill={bill}
                options={options}
                peopleCount={peopleCount}
                savePeople={savePeople}
            />
            <FormOutputs
                tipTotal={tipTotal}
                totalBill={totalBill}
                reset={reset}
            />
        </div>
    );
}

export default App
