
import { Form, Input, Button, PageHeader, Divider } from "antd";

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 10,
    },
};

const ProductAdd = () => {
    return (
        <Form {...layout} name="nest-messages">
            <PageHeader title="Add Product" />
            <Divider />
            <Form.Item
                name={["user", "product-name"]}
                label="Product Name"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={["user", "sku"]}
                label="SKU"
                rules={[
                    {
                        type: "string",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={["user", "unit-price"]}
                label="Unit Price"
                rules={[
                    {
                        type: "number",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item name={["user", "tags"]} label="Tags">
                <Input />
            </Form.Item>
            <Form.Item name={["user", "description"]} label="Description">
                <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ProductAdd;
