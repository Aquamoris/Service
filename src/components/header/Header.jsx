import React from 'react';
import style from './Header.module.css';
import {Link, NavLink} from "react-router-dom";

const Header = (props) => {
    const state = props.header;

    let links = state.links;
    let authContent = state.auth.map(e => (
        <NavLink key={e.id} to={e.url}>
            <button>
                {e.title}
            </button>
        </NavLink> ))

    let prefix = '';

    if (props.auth === 'employee') {
        prefix = 'employee';
        links = state.employeeLinks;
        authContent = props.auth;
    } else if (props.auth === 'company') {
        prefix = 'company'
        links = state.companyLinks;
        authContent = props.auth;
    }

    const changeUser = (e) => {
        props.changeUser(e.target.id);
    }

    return (
        <div className={style.header}>
            <div className={style.wrapper}>
                <div>
                    {props.header.userManagement.map(e => (
                        <Link to={e.url}>
                            <button onClick={changeUser}
                                    id={e.id}
                                    className={e.id === props.auth
                                        ? style.changeUser + ' ' + style.active
                                        : style.changeUser}>
                                {e.title}</button>
                        </Link>
                    ))}
                </div>
                <div className={style.linksWrapper}>
                    { links.map(e => (
                        <NavLink key={e.id} to={e.url}>{e.title}</NavLink>
                    )) }
                </div>
                <div className={style.buttonsWrapper}>
                    { authContent }
                </div>
            </div>
        </div>
    );
}

export default Header;