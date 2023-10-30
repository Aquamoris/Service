import React, {useState} from 'react';
import style from '../Authentication.module.css';
import {Switch} from "@mui/material";
import UserLoginForm from "./UserLoginForm";
import CompanyLoginForm from "./CompanyLoginForm";

const Login = (props) => {
    const [toggle, setToggle] = useState(false);

    const handleChange = () => {
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
                ? <CompanyLoginForm
                        checkCompany={props.checkCompany}
                        currentCompany={props.currentCompany}
                        changeUser={props.changeUser}
                    />
                : <UserLoginForm
                        currentUser={props.currentUser}
                        checkUser={props.checkUser}
                        changeUser={props.changeUser}
                    />
            }
            Используйте логин: <strong>admin@admin</strong>, пароль: <strong>admin</strong> чтобы авторизироваться как пользователь<br></br>
            Используйте логин: <strong>company@company</strong>, пароль: <strong>company</strong> чтобы авторизироваться как компания<br></br>
            Авторизация сработает при повторном нажатии на кнопку <strong>Войти</strong>
        </div>
    );
};

export default Login;