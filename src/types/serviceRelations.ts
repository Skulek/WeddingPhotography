import {ServiceType} from "./serviceType";

export type ServiceRelations = {
    [services in ServiceType]: ServiceType[];
}
