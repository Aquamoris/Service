import React from 'react';
import style from './Vacancy.module.css';
import map from '../../assets/images/map.png'
import VacancySmall from "./VacancySmall";

const Vacancies = (props) => {
    return (
        <div className={style.wrapper}>
            <div>
                {
                    props.vacancies.map(e => (
                        <VacancySmall
                            key={e.id}
                            id={e.id}
                            title={e.title}
                            description={e.description}
                            salary={e.salary}
                            location={e.location}
                            remote={e.remote}
                            workExperience={e.workExperience}
                            workHours={e.workHours}
                            contacts={e.contacts}
                            company={e.company}
                            companyId={e.companyId}
                        />
                    ))
                }
            </div>
            <div className={style.map}>
                <img src={map} alt=""/>
            </div>
        </div>
    );
};

export default Vacancies;