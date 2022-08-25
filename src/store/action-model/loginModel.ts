import { LoginActionType } from "../action-type/loginActionType";

interface LoginValue {
    type: LoginActionType.CHANGE_VALUE,
    payload: boolean,
}

export type LoginModel = LoginValue