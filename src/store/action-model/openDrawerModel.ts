import { openDrawerActionType } from './../action-type/openDrawerActionType';

interface openDrawerChangeValue{
    type:openDrawerActionType.CHANGE_VALUE_OPEN_DRAWER,
    payload: boolean,
}


export type openDrawerActionModel = openDrawerChangeValue