import { Discount } from "../types/discount";
import { ServiceType } from "../types/serviceType";

export const findDiscount = (
    discounts: Discount[],
    selectedServices: ServiceType[]
) => {
    let discounted: Discount | undefined;
    for (const discount of discounts) {
        if (
            discount.relatedServices.every((disc) => selectedServices.includes(disc))
        ) {
            discounted = discount;
            break;
        }
    }
    return discounted;
};
