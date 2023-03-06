import {EditButton, List, Table, TagField, useTable} from "@pankod/refine-antd";

const ListPlant: React.FC = () => {
    const { tableProps } = useTable();
    return (
        <List>
            <Table {...tableProps} rowKey={'id'}>
                <Table.Column dataIndex="type" title="Type" render={(value) => <TagField value={value} />}/>
                <Table.Column dataIndex="name" title="Name" />
                <Table.Column dataIndex={["luminosity_needs", "min"]} title="Luminosity needs (min)" />
                <Table.Column dataIndex={["luminosity_needs", "max"]} title="Luminosity needs (max)" />
                <Table.Column dataIndex={["temperature_needs", "min"]} title="Temperature needs (min)" />
                <Table.Column dataIndex={["temperature_needs", "max"]} title="Temperature needs (max)" />
                <Table.Column dataIndex={["humidity_needs", "min"]} title="Humidity needs (min)" />
                <Table.Column dataIndex={["humidity_needs", "max"]} title="Humidity needs (max)" />
                <Table.Column dataIndex="fertility_needs" title="Fertility needs" />
                <Table.Column<any>
                    title="Actions"
                    dataIndex="actions"
                    render={(_text, record): React.ReactNode => {
                        return (
                                <EditButton size="small" recordItemId={record.id} hideText/>
                        );
                    }}
                />
            </Table>
        </List>
    )
}

export default ListPlant;
