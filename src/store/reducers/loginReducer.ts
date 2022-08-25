import { login } from "../initialValues/login";
import { LoginModel } from '../action-model/loginModel';
import { LoginActionType } from "../action-type/loginActionType";

const initialState={
    login:login
}

const loginReducer = (state=initialState, action:LoginModel) =>{
    switch (action.type) {
        case LoginActionType.CHANGE_VALUE:
            return{
                ...state,login:action.payload
            }
    
        default:
           return state
    }
}

export default loginReducer