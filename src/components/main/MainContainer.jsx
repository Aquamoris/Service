import Main from "./Main";
import {compose} from "redux";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        categories: state.mainData.categories
    }
}

export default compose(
    connect(mapStateToProps, {})
)(Main)