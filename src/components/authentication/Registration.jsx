import React, {useState} from 'react';
import style from './Registration.module.css';
import {Switch} from "@mui/material";
import User from "./User";

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
                : <User users={props.users} registrationNewUser={props.registrationNewUser}/>
            }

        </div>
    );
};

export default Registration;