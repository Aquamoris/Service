import {compose} from "redux";
import Vacancies from "./Vacancies";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        vacancies: state.vacanciesData.vacancies
    };
}

export default compose(
    connect(mapStateToProps)
)(Vacancies)