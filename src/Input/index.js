const Input = ({type, onChange, value, min, max}) => {
    return (
        <input type={type} onChange={onChange} value={value} min={min} max={max}/>
    );
}

export default Input;
