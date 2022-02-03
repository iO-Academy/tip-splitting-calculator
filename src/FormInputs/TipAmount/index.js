import Input from "../Input"
import './TipAmount.css'

const TipAmount = ({children, selectCustomTip}) => {
    return (
        <div className="tip-amount">
            {children}
            <Input type="number" onChange={selectCustomTip} min={1} max={100} />
        </div>
    )
}

export default TipAmount