import {ResourceProps} from "@pankod/refine-core/src/contexts/resource/IResourceContext";
import CreatePlant from "./CreatePlant";
import ListPlant from "./ListPlant";
import EditPlant from "./EditPlant";

const PlantResource: ResourceProps = {
    name: 'plants',
    list: ListPlant,
    create: CreatePlant,
    edit: EditPlant,
    canDelete: true
}

export default PlantResource;
