import './FormOutputs.css'
import Button from "./Button";

const FormOutputs = ({tipTotal, totalBill, reset}) => {
    return (
        <div className="output">
            <div>
                <div className="columns">
                    <div>
                        <h4>Tip Amount</h4>
                        <span>/ person</span>
                    </div>
                    <div>
                        <h2>£{tipTotal.toFixed(2)}</h2>
                    </div>
                </div>

                <div className="columns">
                    <div>
                        <h4>Total</h4>
                        <span>/ person</span>
                    </div>
                    <div>
                        <h2>£{totalBill.toFixed(2)}</h2>
                    </div>
                </div>
            </div>

            <Button clicker={reset} text="Reset" />
        </div>
    )
}

export default FormOutputs