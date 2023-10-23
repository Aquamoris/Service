import {connect} from "react-redux";
import {compose} from "redux";
import Registration from "./Registration";
import {registrationNewUser} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersData.users
    }
}

export default compose(
    connect(mapStateToProps, {registrationNewUser})
)(Registration)