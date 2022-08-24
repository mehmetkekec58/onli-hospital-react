import IdModel from "./idModel";
import UserInfoModel from "./userInfoModel";

export default interface ArticleModel extends IdModel, UserInfoModel {
    thumbnailUrl: string;
    title: string;
    text: string;
    tag: string[];
    date: Date;
}