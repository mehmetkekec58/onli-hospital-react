import UserInfoModel from "./userInfoModel";

export default interface ChatInfoModel extends UserInfoModel{
    id:number; //question id
    userId:number;
    lastMessage:string;
    date:Date;
}