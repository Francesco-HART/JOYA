import {Edit, useForm} from "@pankod/refine-antd";
import {PlantForm} from "./PlantFormComponent";

const EditPlant: React.FC = () => {
    const { saveButtonProps, formProps } = useForm();
    return (
        <Edit saveButtonProps={saveButtonProps}>
           <PlantForm formProps={formProps} isRequired={false}/>
        </Edit>
    )
}

export default EditPlant;
