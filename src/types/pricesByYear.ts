import {ServiceYear} from "./serviceYear";
import {ServiceType} from "./serviceType";

export type PricesByYear = {
    [year in ServiceYear]: { [serviceType in ServiceType]: { price: number } };
};
