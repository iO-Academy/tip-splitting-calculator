const Input = ({type, onChange, value, min}) => {
    return (
        <input type={type} onChange={onChange} value={value} min={min} />
    );
}

export default Input;
