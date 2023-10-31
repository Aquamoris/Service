import React from 'react';
import style from './Companies.module.css';
import CompanySmall from "./CompanySmall";

const Companies = (props) => {
    return (
        <div className={style.wrapper}>
            {
                props.companies.map(e => (
                    <CompanySmall
                        key={e.id}
                        id={e.id}
                        logo={e.logo}
                        fullname={e.fullName}
                    />
                ))
            }
        </div>
    );
};

export default Companies;