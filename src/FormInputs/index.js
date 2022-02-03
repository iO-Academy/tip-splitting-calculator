import Input from "./Input"
import './FormInputs.css'

const FormInputs = ({selectTip, selectCustomTip, saveBill, bill, options, peopleCount, savePeople}) => {
    return (
        <div className="inputs">
            <label>Bill</label>
            <Input type="text" onChange={saveBill} value={bill} />

            <label>Select Tip %</label>
            <div className="tip-amount">
                <button value="0.05" className={options['0.05']} onClick={selectTip}>5%</button>
                <button value="0.1" className={options['0.1']} onClick={selectTip}>10%</button>
                <button value="0.15" className={options['0.15']} onClick={selectTip}>15%</button>
                <button value="0.25" className={options['0.25']} onClick={selectTip}>25%</button>
                <button value="0.5" className={options['0.5']} onClick={selectTip}>50%</button>
                <Input type="number" onChange={selectCustomTip} min={1} max={100} />
            </div>

            <label>Number of people</label>
            <Input type="number" value={peopleCount} onChange={savePeople} min={1}/>
        </div>
    )
}

export default FormInputs