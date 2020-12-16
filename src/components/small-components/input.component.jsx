import React from 'react';


const Input = ({handleChange,is2Col, ...otherProps}) => {
    return (
        <input onChange={handleChange} {...otherProps} className={`login-form__input ${is2Col ? 'login-form__input--big' : ''}`}  />
    )
}

export default Input;