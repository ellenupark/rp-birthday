import React, { useState } from 'react';
import './Lock.css'

const Lock = (props) => {
    const [code, setCode] = useState('');
    const inputRef = React.createRef();

    const handleChange = () => {
        const value = inputRef.current.value;
        setCode(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleSubmit(code)
        setCode("")
    }


    return (
        <div className="lock">
            <p style={{ fontSize: "3em" }}>What is your pet's name?</p>
            <input ref={inputRef} type="text" onChange={handleChange} value={code}></input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Lock;