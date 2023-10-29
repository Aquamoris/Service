import React from 'react';
import style from './Header.module.css';
import {Link, NavLink} from "react-router-dom";

const Header = (props) => {
    const state = props.header;

    let links = state.links;
    let authContent;

    if (props.auth === 'employee') {
        links = state.employeeLinks;
        authContent = <NavLink to={'/employee/profile'}>{props.auth}</NavLink>;
    } else if (props.auth === 'company') {
        links = state.companyLinks;
        authContent = <NavLink to={'/company/profile'}>{props.auth}</NavLink>;
    } else {
        authContent = state.auth.map(e => (
            <NavLink key={e.id} to={e.url}>
                <button>
                    {e.title}
                </button>
            </NavLink> ));
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