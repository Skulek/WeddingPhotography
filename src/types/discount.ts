import {ServiceYear} from "./serviceYear";
import {ServiceType} from "./serviceType";

export type Discount = {
    relatedServices: ServiceType[],
    discountValue: number
}
export type DiscountByYear = {
    [year in ServiceYear]: Discount[];
};
