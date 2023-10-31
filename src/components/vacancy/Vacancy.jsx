import React from 'react';
import {Link} from "react-router-dom";

const Vacancy = (props) => {
    const id = +props.router.params.id;
    const vacancy = props.vacancies.find(e => e.id === id);

    return (
        <div>
            {vacancy.title}
            {vacancy.salary}
            {vacancy.location}
            <span>Удалённо: </span><span>{vacancy.remote ? 'Да' : 'Нет'}</span>
            {vacancy.description}
            {vacancy.workHours}
            {vacancy.workExperience}
            <Link to={'/company/' + vacancy.companyId}>{vacancy.company}</Link>
            {vacancy.contacts}
            <button>Откликнуться</button>
        </div>
    );
};

export default Vacancy;