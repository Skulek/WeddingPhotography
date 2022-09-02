import {ServiceRelations} from "../types/serviceRelations";

export const servicesRelations: ServiceRelations = {
    TwoDayEvent: ["WeddingSession", "Photography", "VideoRecording"],
    BlurayPackage: ["VideoRecording"],
    VideoRecording: [],
    WeddingSession: [],
    Photography: [],
};
