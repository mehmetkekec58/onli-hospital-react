import { OpenDrawerActionModel } from "../action-model/openDrawerModel";
import { OpenDrawerActionType } from "../action-type/openDrawerActionType";
import { openDrawer } from "../initialValues/openDrawer";

const initialState = {
    openDrawer : openDrawer,
}


const openDrawerReducer = (state=initialState, action:OpenDrawerActionModel) =>{
switch (action.type) {
    case OpenDrawerActionType.CHANGE_VALUE_OPEN_DRAWER:
        return {
            ...state, openDrawer:action.payload
        }
        

    default:
        return state
}
} 
export default openDrawerReducer