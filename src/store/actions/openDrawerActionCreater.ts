import { OpenDrawerActionType } from './../action-type/openDrawerActionType';
import { Dispatch } from "redux";
import { OpenDrawerActionModel } from "../action-model/openDrawerModel";

const openDrawerChangeValue  = (openOrClose:boolean) =>{

return (dispatch:Dispatch<OpenDrawerActionModel>) =>{
    dispatch({
        type:OpenDrawerActionType.CHANGE_VALUE_OPEN_DRAWER,
        payload: openOrClose,
    })
}
}

const openDrawerFunctions={
    openDrawerChangeValue,
}

export default openDrawerFunctions;