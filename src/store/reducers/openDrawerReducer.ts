import { openDrawerActionModel } from "../action-model/openDrawerModel";
import { openDrawerActionType } from "../action-type/openDrawerActionType";
import { openDrawer } from "../initialValues/openDrawer";

const initialState = {
    openDrawer : openDrawer,
}


const openDrawerReducer = (state=initialState, action:openDrawerActionModel) =>{
switch (action.type) {
    case openDrawerActionType.CHANGE_VALUE_OPEN_DRAWER:
        return {
            ...state, openDrawer:action.payload
        }
        

    default:
        return state
}
} 
export default openDrawerReducer