import {connect} from "react-redux";
import Header from "./Header";
import {changeUser} from "../../redux/auth-reducer";

let mapStateToProps = (state) => {
    return {
        header: state.header,
        auth: state.authData.user
    }
}

const HeaderContainer = connect(mapStateToProps, {
    changeUser
})(Header);

export default HeaderContainer;