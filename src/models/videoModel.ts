import IdModel from "./idModel";
import UserInfoModel from "./userInfoModel";

export default interface VideoModel extends IdModel, UserInfoModel {
    videoUrl: string;
    thumbnailUrl: string;
    title: string;
    explanation: string;
    tags: string[];
    date: Date;

}