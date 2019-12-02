import { actions } from "./index";
import { put, call, takeEvery } from "redux-saga/effects";
import makeApi from "../../api";

function* getAllCharactersSaga({ payload }) {
    try {
        const custom = makeApi().custom;
        let response = yield call([custom, custom.getCountries]);
        if (response.data) {
            // payload - это value , которое мы ввели
            //response.data -это ответ от сервера

            yield put(actions.getAllCharactersSuccess({ payload }));
        }
    } catch (error) {
        yield put(actions.processFailure({ error }));
    }
}

const customSagas = [takeEvery(actions.getAllCharacters, getAllCharactersSaga)];

export default customSagas;