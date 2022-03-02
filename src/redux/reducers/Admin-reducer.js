import { RETRIEVE_USERS } from "../actions/Types";
import { UPDATE_TASK_START, UPDATE_TASK_SUCCESS, UPDATE_TASK_FAIL } from '../actions/Types-saga'
const initialState = [];

export default function adminReducer(users = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case RETRIEVE_USERS:
            return payload;
        case UPDATE_TASK_START:
            debugger
            return users;
        case UPDATE_TASK_SUCCESS:
            debugger
            return {
                editUser: payload
            };
        default:
            return users;
    }
}