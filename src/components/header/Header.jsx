import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    const state = props.header;

    const links = state.links;
    const authButtons = state.auth;

    const changeUser = (e) => {
        props.changeUser(e.target.id);
    }

    return (
        <div className={style.header}>
            <div className={style.wrapper}>
                <div>
                    {props.header.userManagement.map(e => (
                        <button onClick={changeUser}
                                id={e.id}
                                className={e.id === props.auth ? style.active : ''}>
                            {e.title}</button>
                    ))}
                </div>
                <div className={style.linksWrapper}>
                    { links.map(e => (
                        <NavLink key={e.id} to={e.url}>{e.title}</NavLink>
                    )) }
                </div>
                <div className={style.buttonsWrapper}>
                    { authButtons.map(e => (
                        <NavLink key={e.id} to={e.url}>
                            <button>
                                {e.title}
                            </button>
                        </NavLink>
                    )) }
                </div>
            </div>
        </div>
    );
}

export default Header;