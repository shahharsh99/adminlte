import {
FETCH_POSTS_LIST_REQUEST,
FETCH_POSTS_LIST_SUCCESS,
FETCH_POSTS_LIST_FAILURE,
} from '../../Types/types';

const initialState = {
data: null,
error: null,
isLoading: false,
};

const PostsListReducer = (state = initialState, action) => {
switch (action.type) {
    case FETCH_POSTS_LIST_REQUEST:
    return {
        ...state,
        isLoading: true,
    };
    case FETCH_POSTS_LIST_SUCCESS:
    return {
        ...state,
        isLoading: false,
        data: action.data.data,
        error: null,
    };
    case FETCH_POSTS_LIST_FAILURE:
    return {
        ...state,
        isLoading: false,
        data: null,
        error: action.error.response,
    };
    default:
    return state;
}
};

export default PostsListReducer;
