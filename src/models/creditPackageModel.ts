import IdModel from "./idModel";

export default interface CreditPackageModel extends IdModel {
    creditPackageName: string;
    price: number;
    discount: number;
    creditAmount: number;
}