import React, {useState} from 'react';
import style from './Registration.module.css';
import {Switch} from "@mui/material";

const Company = () => {
    return (
        <form>
            <h3>Company</h3>
        </form>
    )
}

const User = () => {
    return (
        <form>
            <h3>User</h3>
        </form>
    )
}

const Registration = () => {

    const [toggle, setToggle] = useState(false);

    const handleChange = (e) => {
        setToggle(!toggle);
        console.log(e.target.checked);
    }

    return (
        <div className={style.wrapper}>

            <Switch onChange={handleChange} color="default" checked={toggle}/>

            { toggle ? Company() : User() }

        </div>
    );
};

export default Registration;