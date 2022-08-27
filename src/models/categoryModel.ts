import IdModel from "./idModel";

export default interface CategoryModel extends IdModel {
    name: string;
    thumbnailUrl: string;
}