import { ActiveMenuActionType } from './../action-type/activeMenuActionType';
import { ActiveMenuModel } from './../action-model/activeMenuModel';
import { activeMenu } from "../initialValues/activeMenu";


const initalState = {
    activeMenu : activeMenu
}

const activeMenuReducer = (state = initalState, action:ActiveMenuModel) =>{
switch (action.type) {
    case ActiveMenuActionType.ADD_ACTIVE_MENU:
      return {
        ...state, activeMenu:action.payload
      }        

    default:
        return state;
}

}
export default activeMenuReducer