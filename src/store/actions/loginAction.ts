import { Dispatch } from 'redux';
import { LoginModel } from '../action-model/loginModel';
import { LoginActionType } from '../action-type/loginActionType';


const changeValueLogin = (value: boolean) => {
    return (dispatch: Dispatch<LoginModel>) => {
        dispatch({
            type: LoginActionType.CHANGE_VALUE,
            payload: value,
        })
    }
}
const LoginFunction = {
    changeValueLogin
}

export default LoginFunction