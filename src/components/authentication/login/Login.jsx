import React, {useState} from 'react';
import style from '../Authentication.module.css';
import {Switch} from "@mui/material";
import UserRegistrationForm from "./UserRegistrationForm";

const Registration = (props) => {
    const [toggle, setToggle] = useState(false);

    const handleChange = (e) => {
        setToggle(!toggle);
    }

    return (
        <div className={style.wrapper}>
            <span>User</span>
            <span>
            <Switch onChange={handleChange} color="default" checked={toggle}/>
            </span>
            <span>Company</span>

            {
                toggle
                ? <h3>Company</h3>
                : <UserRegistrationForm />
            }

        </div>
    );
};

export default Registration;