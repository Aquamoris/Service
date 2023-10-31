import {compose} from "redux";
import CompanyVacancies from "./CompanyVacancies";
import {withAuth} from "../../hoc/withAuth";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        vacancies: state.vacanciesData.vacancies
    }
}

compose(
    connect(mapStateToProps, {}),
    withAuth
)(CompanyVacancies)