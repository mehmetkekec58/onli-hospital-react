import { openDrawerActionType } from './../action-type/openDrawerActionType';
import { Dispatch } from "redux";
import { openDrawerActionModel } from "../action-model/openDrawerModel";

const openDrawerChangeValue  = (openOrClose:boolean) =>{

return (dispatch:Dispatch<openDrawerActionModel>) =>{
    dispatch({
        type:openDrawerActionType.CHANGE_VALUE_OPEN_DRAWER,
        payload: openOrClose,
    })
}
}

const openDrawerFunctions={
    openDrawerChangeValue,
}

export default openDrawerFunctions;