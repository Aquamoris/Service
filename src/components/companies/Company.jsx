import React from 'react';
import {Link} from "react-router-dom";

const Company = (props) => {

    let company = props.companies[+props.router.params.id]

    return (
        <div>
            <img src={company.logo} alt=""/>
            {company.fullName}
            {company.name}
            {company.location}
            {company.specialization}
            {company.url}
            <Link to={'/company/vacancies/' + company.id}>Вакансии</Link>
        </div>
    );
};

export default Company;