import {connect} from "react-redux";

const mapStateToPropsFor = (state) => ({
    auth: state.authData.user
})

export const withAuth = (Component) => {
    return (
        connect(mapStateToPropsFor)(Component)
    );
}