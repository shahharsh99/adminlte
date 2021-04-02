import {
FETCH_POSTS_LIST_REQUEST,
FETCH_POSTS_LIST_SUCCESS,
FETCH_POSTS_LIST_FAILURE,
} from "../../Types/types";
import axios from "axios";

export const fetchPostsListRequest = () => ({
type: FETCH_POSTS_LIST_REQUEST,
});

export const fetchPostsListSuccess = (data) => ({
type: FETCH_POSTS_LIST_SUCCESS,
data,
});

export const fetchPostsListFailure = (error) => ({
type: FETCH_POSTS_LIST_FAILURE,
error,
});

export const fetchPostsList = (formData) => (dispatch) => {
const passVal = {
    ...formData,
};

dispatch(fetchPostsListRequest());

const config = {
        headers: {
Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkZTg1NTUzOC1jZDVkLTQyZDEtYmZlMi0wYTA0MThmYjZjMzIiLCJleHAiOjE2NDg4NzI4NzUsInVzciI6NTgxLCJzdWIiOiI1ODEiLCJzY3AiOiJhcGlfdjFfYXV0aG9yaXphdGlvbnNfdXNlciIsImF1ZCI6eyJhdWQiOiJVc2VyIn0sImlhdCI6MTYxNzMzNjg3NX0.SALmAUQsBK1sIex73GxvqVLP4E0dBZqxPPIWv1X97e0"
        },
        };
return axios
    .get('https://dev7.spaceo.in/logistic/api/v2//vehicles_type',config)
    .then((data) => {
    dispatch(fetchPostsListSuccess(data));
    })
    .catch((error) => {
    dispatch(fetchPostsListFailure(error));
    });
};
