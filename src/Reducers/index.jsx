import { combineReducers } from "redux";
import PostsListReducer from "./Posts/PostsListReducer";
import RegisterReducer from "./Signup/RegisterReducer";
import RolesListReducer from "./Room Database/RolesListReducer";


const rootReducer = combineReducers({
    
    //posts
    // postsList : PostsListReducer,

    //signup
    userRegister : RegisterReducer,

    //roles
    rolesList : RolesListReducer
});

export default rootReducer;
