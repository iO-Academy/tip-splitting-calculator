import Input from "./Input"
import './FormInputs.css'
import TipAmount from "./TipAmount";
import TipAmountButton from "./TipAmount/TipAmountButton";

const FormInputs = ({selectTip, selectCustomTip, saveBill, bill, options, peopleCount, savePeople}) => {
    return (
        <div className="inputs">
            <label>Bill</label>
            <Input type="text" onChange={saveBill} value={bill} />

            <label>Select Tip %</label>
            <TipAmount selectCustomTip={selectCustomTip}>
                <TipAmountButton className={options['0.05']} value="0.05" clicker={selectTip} text="5%" />
                <TipAmountButton className={options['0.10']} value="0.10" clicker={selectTip} text="10%" />
                <TipAmountButton className={options['0.15']} value="0.15" clicker={selectTip} text="15%" />
                <TipAmountButton className={options['0.25']} value="0.25" clicker={selectTip} text="25%" />
                <TipAmountButton className={options['0.5']} value="0.5" clicker={selectTip} text="50%" />
            </TipAmount>

            <label>Number of people</label>
            <Input type="number" value={peopleCount} onChange={savePeople} min={1}/>
        </div>
    )
}

export default FormInputs