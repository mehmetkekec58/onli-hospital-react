import IdModel from "./idModel";
import UserInfoModel from "./userInfoModel";

export default interface PostModel extends IdModel, UserInfoModel {
    thumbnailUrl: string;
    text: string;
    date: Date;

}