import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function TextField({
    value,
    onChange,
    onBlur,
    isValid,
    errorText,
    name,
    id,
    label,
    type
}){

    return(
        <Fragment>
            <label htmlFor={name}>{label}</label>
            {!isValid ? <span>{errorText}</span> : <></>}
            <input className={!isValid ? 'invalid' : ''} name={name} value={value} type={type} onChange={onChange} onBlur={onBlur} id={id} />
        </Fragment>
        
    );
}

TextField.defaultProps = {
    isValid: true,
    onBlur: ()=>{},
    onChange: ()=>{},
  }

  TextField.propTypes = {
    value: PropTypes.node,
    label: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    errorText: PropTypes.string,
  }

  export default TextField;