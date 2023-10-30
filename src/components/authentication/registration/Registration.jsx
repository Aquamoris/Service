import React, {useState} from 'react';
import style from '../Authentication.module.css';
import {Switch} from "@mui/material";
import UserRegistrationForm from "./UserRegistrationForm";
import CompanyRegistrationForm from "./CompanyRegistrationForm";

const Registration = (props) => {
    const [toggle, setToggle] = useState(false);

    const handleChange = (e) => {
        setToggle(!toggle);
    }

    return (
        <div className={style.wrapper}>
            {/*<span>User</span>*/}
            {/*<span>*/}
            {/*<Switch onChange={handleChange} color="default" checked={toggle}/>*/}
            {/*</span>*/}
            {/*<span>Company</span>*/}

            {/*{*/}
            {/*    toggle*/}
            {/*    ? <CompanyRegistrationForm />*/}
            {/*    : <UserRegistrationForm />*/}
            {/*}*/}
            На данном этапе разработки доступна только авторизация,<br></br>
            Используйте логин: <strong>admin@admin</strong>, пароль: <strong>admin</strong> чтобы авторизироваться как пользователь<br></br>
            Используйте логин: <strong>company@company</strong>, пароль: <strong>company</strong> чтобы авторизироваться как компания<br></br>

        </div>
    );
};

export default Registration;