import {ResourceProps} from "@pankod/refine-core/src/contexts/resource/IResourceContext";
import UserResource from "./users";
import PlantResource from "./plants";
import SensorResource from "./sensors";

const resources : ResourceProps[] = [
    UserResource,
    PlantResource,
    SensorResource,
]

export default resources;
