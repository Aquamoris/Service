import {compose} from "redux";
import Vacancy from "./Vacancy";
import {withRouter} from "../../hoc/withRouter";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        vacancies: state.vacanciesData.vacancies
    }
}

export default compose(
    connect(mapStateToProps, {}),
    withRouter
)(Vacancy)