/*
 * @Author: Chris
 * @Date: 2021-05-07 09:50:26
 * @LastEditors: Chris
 * @LastEditTime: 2021-10-19 18:31:52
 * @Descripttion: **
 */
import React, { useState } from 'react';
import { Table } from 'antd';
import useFetchData from '../../../utils/useFetchData2';

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
  // const [pagination, setPagination] = useState({results: 10, current: 1})
  const [state, params, setParams] = useFetchData({
    url: 'https://randomuser.me/api',
    params: {
      results: 10,
      current: 1,
    }
  }, { data: [] });

  const handleTableChange = (current, size) => {
    console.log(current, size)
    // setPagination({
    //   ...pagination,
    //   results: size,
    //   current,
    // });
    setParams({
      url: 'https://randomuser.me/api',
      params: {
        results: size,
        current,
      }
    })
  };

  const changePageSize = (current, size) => {
    // setPagination({
    //   ...pagination,
    //   results: size,
    //   current: 1,
    // })
    setParams({
      url: 'https://randomuser.me/api',
      params: {
        results: size,
        current: 1,
      }
    })
  }

  return (
    <Table
      columns={columns}
      rowKey={record => record.login.uuid}
      dataSource={state.data?.data?.results}
      pagination={{
        defaultCurrent: params.params.current,
        // current: params.current,
        // pageSize: params.pageSize,
        total: state.data.total,
        pageSizeOptions: ['10', '20', '30', '40', '100'], // 每页显示条数的选项
        showQuickJumper: true,
        showSizeChanger: true,
        size: 'small',
        onShowSizeChange: changePageSize,
        onChange: handleTableChange,
      }}
    />
  )
}

export default Test