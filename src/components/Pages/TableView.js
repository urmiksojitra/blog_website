import React, { useState } from "react";
import SidebarPage from "./SidebarPage";
import { Table, Tag, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "antd/lib/avatar/avatar";
function TableView() {
  const { Column, ColumnGroup } = Table;

  const state = useSelector((state) => state.BlogDisplayReducer.BlogData);
  console.log(state, "displaytablecall");
  return (
    <SidebarPage>
      <div>
        <h1>Show Table</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Blog Picture</th>
              <th scope="col">Blog Name</th>
              <th scope="col">Blog Description</th>
            </tr>
          </thead>
          <tbody>
            {state &&
              state.map((data) => {
                return (
                  <tr>
                    <td>
                      <Avatar src={data.blogImgSrc} />
                    </td>
                    <td>{data.blogTitle}</td>
                    <td>{data.desc}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </SidebarPage>
  );
}

export default TableView;
