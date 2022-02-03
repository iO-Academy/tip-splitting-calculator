import './TipAmountButton.css'

const TipAmountButton = ({className, clicker, text, value}) => {
    return (
        <button value={value} className={className} onClick={clicker}>{text}</button>
    )
}

export default TipAmountButton