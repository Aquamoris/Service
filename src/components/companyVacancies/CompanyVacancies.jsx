import React from 'react';
import VacancySmall from "../vacancies/VacancySmall";

const CompanyVacancies = (props) => {
    return (
        <div style={{width: '60%', margin: '0 auto'}}>
            {
                props.vacancies.map(e => {
                    if (e.companyId === +props.router.params.id) {
                        return <VacancySmall
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
                    }
                })
            }
        </div>
    );
};

export default CompanyVacancies;