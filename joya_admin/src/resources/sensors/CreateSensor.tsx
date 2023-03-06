import {Create, Form, Input, useForm} from "@pankod/refine-antd";

const CreateSensor: React.FC = () => {
    const { saveButtonProps, formProps } = useForm({
        redirect: 'list',
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical" >
                <Form.Item
                    label="Serial number"
                    name="serial_number"
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input/>
                </Form.Item>
            </Form>
        </Create>
    )
}

export default CreateSensor;
