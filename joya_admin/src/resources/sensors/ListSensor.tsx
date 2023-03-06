import {DeleteButton, List, Table, useTable} from "@pankod/refine-antd";

const ListSensor: React.FC = () => {
    let { tableProps } = useTable();

    return (
        <List>
            <Table {...tableProps} rowKey={'id'}>
                <Table.Column dataIndex="serial_number" title="Serial number" />
                <Table.Column dataIndex="name" title="Sensor name" />
                <Table.Column dataIndex="location" title="Sensor location" />
                <Table.Column dataIndex={["plant", "name"]} title="Plant name" />
                <Table.Column dataIndex={["user", "email"]} title="User email" />
                <Table.Column<any>
                    title="Actions"
                    dataIndex="actions"
                    render={(_text: any, record: { id: any; }): React.ReactNode => {
                        return (
                            <DeleteButton size="small" recordItemId={record.id} hideText/>
                        );
                    }}
                />
            </Table>
        </List>
    )
}

export default ListSensor;
