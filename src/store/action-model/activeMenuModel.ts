import { ActiveMenuActionType } from "../action-type/activeMenuActionType";

interface AddActiveMenu{
    type: ActiveMenuActionType.ADD_ACTIVE_MENU,
    payload:boolean[]
}

export type ActiveMenuModel = AddActiveMenu