import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as customActions } from "../../store/custom";

// import CharacterCards from "../../components/organisms/CharacterCards";
import MainPage from '../../components/pages/mainPage';

const mapStateToProps = (state, props) => {
    return {
        characterCards: state.custom.characterCards,
        filterState: state.custom.filterState,
        isLoadingGetCharacters: state.custom.isLoadingGetCharacters
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            getAllCharacters: customActions.getAllCharacters,
            changeFilterStateStatus: customActions.changeFilterStateStatus,
            changeFilterCategoryStatus: customActions.changeFilterCategoryStatus
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);