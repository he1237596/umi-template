/*
 * @Author: Chris
 * @Date: 2021-05-07 09:50:26
 * @LastEditors: Chris
 * @LastEditTime: 2021-05-19 09:49:54
 * @Descripttion: **
 */
import React from 'react';
import { Table } from 'antd';
import useTableHandler from './useTableHandler';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

const Test = () => {
    const params = useTableHandler({
      getList: () => {}
    });

    return (
      <Table
        size='small'
        columns={columns}
        rowKey={record => record.login.uuid}
        {
          ...params
        }
      />
    );
}

export default Test