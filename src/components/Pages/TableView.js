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
    // console.log(state, 'Table call')
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

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Blog Picture</th>
                            <th scope="col">Blog Name</th>
                            <th scope="col">Blog Description</th>
                        </tr>
                    </thead>
                    <tbody>

                        {state && state.map(data => {
                            return (<tr>
                                <td><Avatar src={data.blogImgSrc} /></td>
                                <td>{data.blogTitle}</td>
                                <td>{data.desc}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>

            </div>
        </SidebarPage >
    )
}

export default TableView
