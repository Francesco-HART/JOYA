import {ResourceProps} from "@pankod/refine-core/src/contexts/resource/IResourceContext";
import CreateUser from "./CreateUser";
import ListUser from "./ListUser";
import EditUser from "./EditUser";

const UserResource: ResourceProps = {
    name: 'users',
    list: ListUser,
    create: CreateUser,
    edit: EditUser,
    canDelete: true
}

export const userTypes = [
    { value: 'user', label: 'User' },
    { value: 'admin', label: 'Administrator' },
];

export default UserResource;
