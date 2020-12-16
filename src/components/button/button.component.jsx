import React from 'react';


const CardButton = ({children, btnClass, ...otherProps}) => {
    return (
    <button {...otherProps} className={btnClass}>{children}</button>
    )
}


export default CardButton;