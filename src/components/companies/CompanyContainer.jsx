import {compose} from "redux";
import Company from "./Company";
import {connect} from "react-redux";
import {withRouter} from "../../hoc/withRouter";

let mapStateToProps = (state) => {
    return {
        companies: state.companiesData.companies
    }
}

export default compose(
    connect(mapStateToProps, {}),
    withRouter
)(Company)