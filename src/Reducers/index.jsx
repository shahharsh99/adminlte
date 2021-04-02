import { combineReducers } from "redux";
import PostsListReducer from "./Posts/PostsListReducer";
import RegisterReducer from "./Signup/RegisterReducer";


const rootReducer = combineReducers({
    
    //posts
    postsList : PostsListReducer,

    //signup
    userRegister : RegisterReducer,
});

export default rootReducer;
