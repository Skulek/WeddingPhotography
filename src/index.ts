import {ServiceType} from "./types/serviceType";
import {ServiceYear} from "./types/serviceYear";
import {prizesByYear} from "./data/prizesByYear";
import {discountByYear} from "./data/discountByYear";
import {findDiscount} from "./utills/findDiscount";
import {relatedServicesIncluded} from "./utills/relatedServiceIncluded";

export const updateSelectedServices = (
    previouslySelectedServices: ServiceType[],
    action: { type: "Select" | "Deselect", service: ServiceType }
) => {
    let selectedServices = [...previouslySelectedServices];
    const { type, service } = action;
    switch (type) {
        case "Select": {
            if (selectedServices.includes(service)) return previouslySelectedServices;

            return relatedServicesIncluded(service, selectedServices)
                ? [...previouslySelectedServices, service]
                : previouslySelectedServices;
        }
        case "Deselect": {
            if (!selectedServices.includes(service))
                return previouslySelectedServices;

            selectedServices = selectedServices.filter(
                (selectedService) => selectedService !== service
            );
            for (const preElement of previouslySelectedServices) {
                if (!relatedServicesIncluded(preElement, selectedServices)) {
                    selectedServices = selectedServices.filter(
                        (selectedService) => selectedService !== preElement
                    );
                }
            }

            return selectedServices;
        }
        default:
            return selectedServices;
    }
};

export const calculatePrice = (
    selectedServices: ServiceType[],
    selectedYear: ServiceYear
) => {
    const price = prizesByYear[selectedYear];
    const discounted = findDiscount(
        discountByYear[selectedYear],
        selectedServices
    );

    const filtered = selectedServices.map((selectedService) => {
        return price[selectedService];
    });

    const priceCalculations = { basePrice: 0, finalPrice: 0 };
    filtered.reduce((previousValue, currentValue) => {
        priceCalculations.finalPrice += currentValue.price;
        priceCalculations.basePrice += currentValue.price;
        return priceCalculations;
    }, priceCalculations);

    priceCalculations.finalPrice -= discounted?.discountValue ?? 0;

    return priceCalculations;
};
