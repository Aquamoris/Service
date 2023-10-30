import React from 'react';
import {Navigate} from "react-router-dom";
import {compose} from "redux";
import {withAuth} from "./withAuth";

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {

        if (props.auth !== 'unknown') return <Navigate to='/' />

        return <Component {...props} />
    }

    return compose(
        withAuth
    )(RedirectComponent)
};