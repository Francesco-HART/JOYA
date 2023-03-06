import {ResourceProps} from "@pankod/refine-core/src/contexts/resource/IResourceContext";
import CreateSensor from "./CreateSensor";
import ListSensor from "./ListSensor";

const SensorResource: ResourceProps ={
        name: 'sensors',
        list: ListSensor,
        create: CreateSensor,
        canDelete: true,
}

export default SensorResource;
