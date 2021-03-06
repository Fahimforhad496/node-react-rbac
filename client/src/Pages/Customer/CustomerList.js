import { Table, Tag, Space } from "antd";
import { Link } from "react-router-dom";

const columns = [
    {
        title: "Name",
        // dataIndex: 'name',
        key: "name",
        render: (obj) => {
            console.log(obj);
            return <Link to={`/customers/list/${obj.key}`}>{obj.name}</Link>;
        },
    },
    {
        title: "SKU",
        dataIndex: "sku",
        key: "sku",
    },
    {
        title: "Unit Price",
        dataIndex: "price",
        key: "price",
    },
    {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        render: (tags) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 7 ? "lightblue" : "green";
                    if (tag === "putrid") {
                        color = "volcano";
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: "Action",
        key: "action",
        render: (obj) => (
            <Space size="middle">
                <Link to={`/customers/edit/${obj.key}`}>Edit</Link>
                <a href="/#">Delete</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: "1",
        name: "Mango",
        price: 60,
        sku: "115asdf33",
        tags: ["nice", "Green"],
    },
    {
        key: "2",
        name: "Banana",
        price: 24,
        sku: "bbid112365d",
        tags: ["Yellow", "putrid"],
    },
    {
        key: "3",
        name: "Black Berry",
        price: 320,
        sku: "12635asd3",
        tags: ["Summer", "Awesome"],
    },
];
const CustomerList = () => {
    return <Table columns={columns} dataSource={data}></Table>;
};

export default CustomerList;
