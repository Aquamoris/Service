import {compose} from "redux";
import Profile from "./Profile";
import {withAuth} from "../../hoc/withAuth";
import {connect} from "react-redux";
import {changeUser} from "../../redux/auth-reducer";

let mapStateToProps = () => {

}
export default compose(
    connect(mapStateToProps, {changeUser}),
    withAuth
)(Profile);