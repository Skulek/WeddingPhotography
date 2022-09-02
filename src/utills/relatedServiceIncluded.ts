import {ServiceType} from "../types/serviceType";
import {servicesRelations} from "../data/servicesRelations";

export const relatedServicesIncluded = (
    service: ServiceType,
    selectedServices: ServiceType[]
) => {
    return servicesRelations[service].length === 0
        ? true
        : servicesRelations[service].filter((relatedService) =>
            selectedServices.includes(relatedService)
        ).length >
        servicesRelations[service].length / 2;
}
