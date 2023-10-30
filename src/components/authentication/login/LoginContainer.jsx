import {connect} from "react-redux";
import {compose} from "redux";
import Login from "./Login";
import {checkUser, registrationNewUser} from "../../../redux/users-reducer";
import {changeUser} from "../../../redux/auth-reducer";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {checkCompany} from "../../../redux/companies-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersData.users,
        currentUser: state.usersData.currentUser,
        companies: state.companiesData.companies,
        currentCompany: state.companiesData.currentCompany
    }
}

export default compose(
    connect(mapStateToProps, {
        registrationNewUser,
        checkUser,
        changeUser,
        checkCompany
    }),
    withAuthRedirect
)(Login)