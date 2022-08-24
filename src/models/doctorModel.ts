import IdModel from "./idModel";
import UserInfoModel from "./userInfoModel";

export default interface DoctorModel extends IdModel, UserInfoModel {
    branch: string;
    about: string;
}