import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import SidebarPage from './SidebarPage'


import { Table, Tag, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'antd/lib/avatar/avatar';
function TableView() {
    // const [searchText, setSearchText] = useState()
    // const [searchedColumn, setSearchedColumn] = useState()
    const { Column, ColumnGroup } = Table

    const state = useSelector(state => state.BlogDisplayReducer.user)
    console.log(state, 'Table call')
    // const dispatch = useDispatch()
    const data = [
        {
            key: '1',
            firstName: 'John',
            lastName: 'Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            firstName: 'Jim',
            lastName: 'Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            firstName: 'Joe',
            lastName: 'Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    return (
        <SidebarPage>
            <div>
                <h1>Show Table</h1>
                {/* </UserLoginPage> */}
                <Table dataSource={state}>

                    {/* <Column title="blogImgSrc" dataIndex="blogImgSrc" key="blogImgSrc" /> */}
                    {state&&state.map(data=>  <Column title="avatar"> <Avatar src={data.blogImgSrc} /></Column>)}
                    <Column title="blogTitle" dataIndex="blogTitle" key="agblogTitlee" />
                    <Column title="desc" dataIndex="desc" key="desc" />
                    <Column
                        title="Action"
                        key="action"
                        render={(text, record) => (
                            <Space size="middle">
                                <a>Invite {record.lastName}</a>
                                <a>Delete</a>
                            </Space>
                        )}
                    />
                </Table>
                {state&&state.map(data=> <Avatar src={data.blogImgSrc} />)}
                
                
            </div>
        </SidebarPage >
    )
}

export default TableView
