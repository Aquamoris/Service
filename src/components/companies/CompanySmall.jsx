import React from 'react';
import style from './Company.module.css';
import {Link} from "react-router-dom";

const CompanySmall = (props) => {
    return (
        <div>
            <Link to={'/company/' + props.id}>
                <img className={style.img} src={props.logo} alt='logo'/>
                <div>{props.fullname}</div>
            </Link>
        </div>
    );
};

export default CompanySmall;