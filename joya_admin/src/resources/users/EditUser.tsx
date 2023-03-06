import {Edit, Form, Input, Select, useForm} from "@pankod/refine-antd";
import {userTypes} from "./index";

const EditUser: React.FC = () => {
    const { saveButtonProps, formProps } = useForm();
    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Email"
                    name="email">
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password">
                    <Input type={'password'}/>
                </Form.Item>
                <Form.Item
                    label="FirstName"
                    name="firstname">
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="LastName"
                    name="lastname">
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Type"
                    name="type">
                    <Select options={userTypes}>Default value</Select>
                </Form.Item>
            </Form>
        </Edit>
    )
}

export default EditUser;
