import {connect} from "react-redux";
import Header from "./Header";
import {changeUser} from "../../redux/auth-reducer";
import {compose} from "redux";
import {withAuth} from "../../hoc/withAuth";

let mapStateToProps = (state) => {
    return {
        header: state.header,
    }
}

export default compose(
    connect(mapStateToProps, {
        changeUser
    }),
    withAuth
)(Header);