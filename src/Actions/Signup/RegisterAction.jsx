import {
    FETCH_REGISTER_REQUEST,
    FETCH_REGISTER_SUCCESS,
    FETCH_REGISTER_FAILURE,
} from "../../Types/types";
import axios from "axios";

export const fetchRegisterRequest = () => ({
    type: FETCH_REGISTER_REQUEST,
});

export const fetchRegisterSuccess = (data) => ({
    type: FETCH_REGISTER_SUCCESS,
    data,
});

export const fetchRegisterFailure = (error) => ({
    type: FETCH_REGISTER_FAILURE,
    error,
});

export const fetchRegister = (formData) => (dispatch) => {
    dispatch(fetchRegisterRequest());

    return axios
    .post('https://dev7.spaceo.in/logistic/api/v2/register', formData)
    .then((data) => {
        console.log("data from action",data)
    dispatch(fetchRegisterSuccess(data));
    })
    .catch((error) => {
    dispatch(fetchRegisterFailure(error));
    });
};
