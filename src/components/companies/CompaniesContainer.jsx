import Companies from "./Companies";
import {compose} from "redux";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        companies: state.companiesData.companies,
    }
}

export default compose(
    connect(mapStateToProps, {})
)(Companies)