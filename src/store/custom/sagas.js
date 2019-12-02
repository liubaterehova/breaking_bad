import { actions } from "./index";
import { put, call, takeEvery } from "redux-saga/effects";
import makeApi from "../../api";

function* getAllCharactersSaga({ payload }) {
    try {
        const custom = makeApi().custom;
        let response = yield call([custom, custom.getAllCharacters]);
        console.log(response);
        if (response.data) {
            console.log(response.data);
            // payload - это value , которое мы ввели
            //response.data -это ответ от сервера

            yield put(
                actions.getAllCharactersSuccess({ characterCards: response.data })
            );
        }
    } catch (error) {
        console.log("errorInSaga");
        yield put(actions.processFailure({ error }));
    }
}

const customSagas = [takeEvery(actions.getAllCharacters, getAllCharactersSaga)];

export default customSagas;