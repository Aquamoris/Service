import {connect} from "react-redux";

const mapStateToPropsFor = (state) => ({
    auth: state.authData.user,
    userData: state.authData.userData
})

export const withAuth = (Component) => {
    return (
        connect(mapStateToPropsFor)(Component)
    );
}