import { ActiveMenuActionType } from './../action-type/activeMenuActionType';
import { Dispatch } from 'redux';
import { ActiveMenuModel } from '../action-model/activeMenuModel';



const addActiveMenu = (activeMenus:boolean[]) =>{

    return (dispatch:Dispatch<ActiveMenuModel>) => {
      dispatch({
        type: ActiveMenuActionType.ADD_ACTIVE_MENU,
        payload:activeMenus,
      })
    }
}

const activeMenusFunction={
    addActiveMenu
}
export default activeMenusFunction