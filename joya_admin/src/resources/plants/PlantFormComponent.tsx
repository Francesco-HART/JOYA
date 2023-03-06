import {Form, Input, InputNumber} from "@pankod/refine-antd";

interface Props {
    formProps: any,
    isRequired: boolean
}

export const PlantForm = function({formProps, isRequired}:Props) {
    return (
        <Form {...formProps} layout="vertical">
            <Form.Item
                label="Type"
                name="type"
                rules={[
                    {
                        required: isRequired,
                    },
                ]}>
                <Input/>
            </Form.Item>
            <Form.Item
                label="Name"
                name="name"
                rules={[
                    {
                        required: isRequired,
                    },
                ]}>
                <Input/>
            </Form.Item>
            <Form.Item
                label="Luminosity needs (min)"
                name={["luminosity_needs", "min"]}
                rules={[
                    {
                        required: isRequired,
                    },
                ]}>
                <InputNumber/>
            </Form.Item>
            <Form.Item
                label="Luminosity needs (max)"
                name={["luminosity_needs", "max"]}
                rules={[
                    {
                        required: isRequired,
                    },
                ]}>
                <InputNumber/>
            </Form.Item>
            <Form.Item
                label="Temperature needs (min)"
                name={["temperature_needs", "min"]}
                rules={[
                    {
                        required: isRequired,
                    },
                ]}>
                <InputNumber/>
            </Form.Item>
            <Form.Item
                label="Temperature needs (max)"
                name={["temperature_needs", "max"]}
                rules={[
                    {
                        required: isRequired,
                    },
                ]}>
                <InputNumber/>
            </Form.Item>
            <Form.Item
                label="Humidity needs (min)"
                name={["humidity_needs", "min"]}
                rules={[
                    {
                        required: isRequired,
                    },
                ]}>
                <InputNumber/>
            </Form.Item>
            <Form.Item
                label="Humidity needs (max)"
                name={["humidity_needs", "max"]}
                rules={[
                    {
                        required: isRequired,
                    },
                ]}>
                <InputNumber/>
            </Form.Item>
            <Form.Item
                label="Fertility needs"
                name="fertility_needs"
                rules={[
                    {
                        required: isRequired,
                    },
                ]}>
                <InputNumber/>
            </Form.Item>
        </Form>
    );
}
