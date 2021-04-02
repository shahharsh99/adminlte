import {
FETCH_ROLES_LIST_REQUEST,
FETCH_ROLES_LIST_SUCCESS,
FETCH_ROLES_LIST_FAILURE,
} from '../../Types/Room Database/types';

const initialState = {
data: null,
error: null,
isLoading: false,
};

const RolesListReducer = (state = initialState, action) => {
switch (action.type) {
    case FETCH_ROLES_LIST_REQUEST:
    return {
        ...state,
        isLoading: true,
    };
    case FETCH_ROLES_LIST_SUCCESS:
    return {
        ...state,
        isLoading: false,
        data: action.data.data,
        error: null,
    };
    case FETCH_ROLES_LIST_FAILURE:
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

export default RolesListReducer;
