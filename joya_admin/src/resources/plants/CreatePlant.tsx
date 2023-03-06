import {Create, useForm} from "@pankod/refine-antd";
import {PlantForm} from "./PlantFormComponent";

const CreatePlant: React.FC = () => {
    const { saveButtonProps, formProps } = useForm({
        redirect: 'list',
    });
    return (
        <Create saveButtonProps={saveButtonProps}>
            <PlantForm formProps={formProps} isRequired={true}/>
        </Create>
    )
}

export default CreatePlant;
