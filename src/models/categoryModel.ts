import IdModel from "./idModel";

export default interface CategoryModel extends IdModel {
    categoryName: string;
    categoryPhotoUrl: string;
}