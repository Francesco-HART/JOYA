import {EditButton, List, Table, TagField, useTable} from "@pankod/refine-antd";

const ListUser: React.FC = () => {
    const { tableProps } = useTable();
    return (
        <List>
            <Table {...tableProps} rowKey={'id'}>
                <Table.Column dataIndex="email" title="Email" />
                <Table.Column dataIndex="firstname" title="Firstname" />
                <Table.Column dataIndex="lastname" title="Lastname" />
                <Table.Column dataIndex="type" title="Type" render={(value) => <TagField value={value} />}/>
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

export default ListUser;