import { call, put, all, takeLatest } from 'redux-saga/effects'
import { UPDATE_TASK_SUCCESS, UPDATE_TASK_START, UPDATE_TASK_FAIL } from "./actions/Types-saga";
import adminService from '../component/AuthHandler/admin.service'
import { updateTaskSuccess } from './actions/Admin-action';

export function* updateTask({ payload: { pid, id } }) {
    try {
        debugger
        const response = yield call(adminService.changePlan, pid, id);
        if (response.status === 200 && response.status < 300) {
            yield put(updateTaskSuccess(response.data));
        }
    } catch (error) {
        // yield put(updateTaskFail(error.response.data));
    }
}

export function* updateTaskStart() {
    yield takeLatest(UPDATE_TASK_START, updateTask);
}

export default function* rootSaga() {
    yield all([
        call(updateTaskStart),
    ]);
}