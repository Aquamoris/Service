import React from 'react';
import {Link, Navigate} from "react-router-dom";

const Profile = (props) => {
    const user = props.auth;
    const userData = props.userData;

    if (user === 'employee') {
        return (
            <div>
                <img src={userData.avatar} alt=""/>
                <div>
                    {userData.username}
                    {userData.email}
                    {userData.location}
                </div>
                <div>
                    <Link to={'/employee/favorites/' + userData.id}>Избранное</Link>
                </div>
                <button onClick={() => props.changeUser('unknown', null)}>Выйти</button>
            </div>
        );
    }

    if (user === 'company') {
        return (
            <div>
                <img src={userData.logo} alt=""/>
                <div>
                    {userData.fullName}
                    {userData.name}
                    {userData.email}
                    {userData.location}
                    {userData.specialization}
                    {userData.iTN}
                </div>
                <div>
                    <Link to={'/company/vacancies/' + userData.id}>Ваши вакансии</Link>
                </div>
                <div>
                    <Link to={'/company/favorites/' + userData.id}>Избранное</Link>
                </div>
                <button onClick={() => props.changeUser('unknown', null)}>Выйти</button>
            </div>
        );
    }

    return <Navigate to='/' />;
};

export default Profile;