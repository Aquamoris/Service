import {connect} from "react-redux";
import Header from "./Header";

let mapStateToProps = (state) => {
    return {
        header: state.header
    }
}

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;