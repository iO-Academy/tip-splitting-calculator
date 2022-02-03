import './Button.css'

const Button = ({clicker, text}) => {
    return (
        <button onClick={clicker}>{text}</button>
    )
}

export default Button