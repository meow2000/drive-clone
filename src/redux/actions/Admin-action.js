import adminService from "../../component/AuthHandler/admin.service";
import { RETRIEVE_USERS } from "./Types";
import { UPDATE_TASK_START, UPDATE_TASK_SUCCESS, UPDATE_TASK_FAIL } from './Types-saga'

export const retrieveUsers = () => {
    return (dispatch) => {
        debugger
        adminService.getListUser().then(response => {
            response.json().then(data => ({
                data: data,
                status: response.status
            })).then(res => {
                dispatch(retrieveUsersRequest(res.data))
            })
        })
    }

    // const response = await adminService.getListUser();
    // dispatch({ type: RETRIEVE_USERS, payload: response })
};

const retrieveUsersRequest = (data) => ({
    type: RETRIEVE_USERS,
    payload: { data }
})

export const updateTaskStart = (pid, id) => ({
    type: UPDATE_TASK_START,
    payload: pid, id
});

export const updateTaskSuccess = (data) => ({
    type: UPDATE_TASK_SUCCESS,
    payload: data,
});
