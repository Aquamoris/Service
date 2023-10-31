import React, {useState} from 'react';
import style from './Vacancy.module.css'
import {Link} from "react-router-dom";

const VacancySmall = (props) => {
    const [showContacts, setShowContacts] = useState(false);

    return (
        <div className={style.smallVacancy}>
            <div>
                <Link to={'/vacancies/' + props.id}><h3>{props.title}</h3></Link>
                <h3>{props.salary}</h3>
            </div>
            <div className={style.companyInfo}>
                <div>{props.company}</div>
                <div>{props.location}</div>
            </div>
            <div className={style.workExperience}>{props.workExperience}</div>
            <div className={style.description}>{props.description}</div>
            <div>
                <button>Откликнуться</button>
                {props.contacts &&
                    (showContacts
                    ? <span
                        className={style.contactsButton}>{props.contacts}
                    </span>
                    : <button
                        onClick={() => setShowContacts(!showContacts)}
                        className={style.contactsButton}
                    >Контакты</button>
                    )}
            </div>
        </div>
    );
};

export default VacancySmall;