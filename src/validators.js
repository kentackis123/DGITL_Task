const validateInput = value =>
    (!/^[a-zA-Z0-9]+$/.test(value) && "Input must be Alphanumeric value") ||
    (value.length > 10 && "Input must be longer than 0, but shorter than 10")


export default validateInput;