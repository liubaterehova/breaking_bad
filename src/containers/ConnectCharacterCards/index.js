import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as customActions } from "../../store/custom";

import CharacterCards from "../../components/organisms/CharacterCards";

const mapStateToProps = (state, props) => {
  return {
    characterCards: state.custom.characterCards,
    filterState: state.custom.filterState,
    isLoadingGetCharacters: state.custom.isLoadingGetCharacters
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAllCharacters: customActions.getAllCharacters
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCards);
