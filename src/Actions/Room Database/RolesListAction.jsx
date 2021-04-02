import {
FETCH_ROLES_LIST_REQUEST,
FETCH_ROLES_LIST_SUCCESS,
FETCH_ROLES_LIST_FAILURE,
} from "../../Types/Room Database/types";
import axios from "axios";

export const fetchRolesListRequest = () => ({
type: FETCH_ROLES_LIST_REQUEST,
});

export const fetchRolesListSuccess = (data) => ({
type: FETCH_ROLES_LIST_SUCCESS,
data,
});

export const fetchRolesListFailure = (error) => ({
type: FETCH_ROLES_LIST_FAILURE,
error,
});

export const fetchRolesList = (formData) => (dispatch) => {
const passVal = {
    ...formData,
};

dispatch(fetchRolesListRequest());

const config = {
        headers: {
Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3MGM4NzZmZi04N2UxLTQ2M2UtYTVjOC04NjBjNTJhMjBlNzUiLCJleHAiOjE2NDg5MDA2ODUsInVzciI6MSwic3ViIjoiMSIsInNjcCI6ImFwaV92MV9hdXRob3JpemF0aW9uc191c2VyIiwiYXVkIjp7ImF1ZCI6IlVzZXIifSwiaWF0IjoxNjE3MzY0Njg1fQ.QBY67iP8B3O_AsRa5DnRgh-tex1-wSTqSKi1qGaW854"
    },
        };
return axios
    .get('https://dev7.spaceo.in/logistic/api/v2/rooms',config)
    .then((data) => {
    dispatch(fetchRolesListSuccess(data));
    })
    .catch((error) => {
    dispatch(fetchRolesListFailure(error));
    });
};
