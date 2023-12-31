import {compose} from "redux";
import CompanyVacancies from "./CompanyVacancies";
import {withAuth} from "../../hoc/withAuth";
import {connect} from "react-redux";
import {withRouter} from "../../hoc/withRouter";

let mapStateToProps = (state) => {
    return {
        vacancies: state.vacanciesData.vacancies
    }
}

export default compose(
    connect(mapStateToProps, {}),
    withRouter,
    withAuth
)(CompanyVacancies)