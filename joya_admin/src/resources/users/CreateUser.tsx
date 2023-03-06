import {Create, Form, Input, useForm} from "@pankod/refine-antd";
import {Select} from "@pankod/refine-antd";
import {userTypes} from "./index";

const CreateUser: React.FC = () => {

    const { saveButtonProps, formProps } = useForm({
        redirect: 'list',
    });
    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical" >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input type={'password'}/>
                </Form.Item>
                <Form.Item
                    label="FirstName"
                    name="firstname"
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="LastName"
                    name="lastname"
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Type"
                    name="type"
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Select defaultValue={userTypes[0]} options={userTypes}>Default value</Select>
                </Form.Item>
            </Form>
        </Create>
    )
}

export default CreateUser;
