import { actions } from "./index";
import { put, call, takeEvery } from "redux-saga/effects";
import makeApi from "../../api";

function makeCharacterCard(arr) {
    return arr.map(item => {
        return {
            id: item.char_id,
            avatar: item.img,
            name: item.name,
            birthday: item.birthday,
            status: item.status,
            category: item.category,
            nickname: item.nickname
        }
    })
}

function* getAllCharactersSaga({ payload }) {
    try {
        const custom = makeApi().custom;
        let response = yield call([custom, custom.getAllCharacters]);
        if (response.data) {
            // payload - это value , которое мы ввели
            //response.data -это ответ от сервера
            const newArr = makeCharacterCard(response.data);
            console.log('newArr', newArr)
            yield put(
                actions.getAllCharactersSuccess({ characterCards: newArr })
            );
        }
    } catch (error) {
        console.log("errorInSaga");
        yield put(actions.processFailure({ error }));
    }
}

const customSagas = [takeEvery(actions.getAllCharacters, getAllCharactersSaga)];

export default customSagas;