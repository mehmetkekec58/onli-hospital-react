import { OpenDrawerActionType } from './../action-type/openDrawerActionType';

interface OpenDrawerChangeValue{
    type:OpenDrawerActionType.CHANGE_VALUE_OPEN_DRAWER,
    payload: boolean,
}


export type OpenDrawerActionModel = OpenDrawerChangeValue