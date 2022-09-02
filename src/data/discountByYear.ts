import { DiscountByYear } from "../types/discount";

export const discountByYear: DiscountByYear = {
    2020: [
        {
            relatedServices: ["Photography", "VideoRecording", "WeddingSession"],
            discountValue: 1500,
        },
        { relatedServices: ["Photography", "VideoRecording"], discountValue: 1200 },
        { relatedServices: ["Photography", "WeddingSession"], discountValue: 300 },
        {
            relatedServices: ["VideoRecording", "WeddingSession"],
            discountValue: 300,
        },
    ],
    2021: [
        {
            relatedServices: ["Photography", "VideoRecording", "WeddingSession"],
            discountValue: 1600,
        },
        { relatedServices: ["Photography", "VideoRecording"], discountValue: 1300 },
        { relatedServices: ["Photography", "WeddingSession"], discountValue: 300 },
        {
            relatedServices: ["VideoRecording", "WeddingSession"],
            discountValue: 300,
        },
    ],
    2022: [
        {
            relatedServices: ["Photography", "VideoRecording", "WeddingSession"],
            discountValue: 1900,
        },
        { relatedServices: ["Photography", "VideoRecording"], discountValue: 1300 },
        { relatedServices: ["Photography", "WeddingSession"], discountValue: 600 },
        {
            relatedServices: ["VideoRecording", "WeddingSession"],
            discountValue: 300,
        },
    ],
};
