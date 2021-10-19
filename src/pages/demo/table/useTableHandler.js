/*
 * @Author: Chris
 * @Date: 2021-05-18 10:56:06
 * @LastEditors: Chris
 * @LastEditTime: 2021-10-19 18:32:09
 * @Descripttion: **
 */
import React, { useCallback, useEffect, useState } from 'react';
import reqwest from 'reqwest';

const useTableHandler = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    dataSource: [],
    total: 0,
  });
  const [pagination, setPagination] = useState({
    results: 10, // 每页条数
    current: 1,
  })

  const handleTableChange = (current, size) => {
    setPagination({
      ...pagination,
      results: size,
      current,
    });
  };

  const changePageSize = (current, size) => {
    setPagination({
      ...pagination,
      results: size,
      current: 1,
    })
  }

  const fetch = useCallback((current, results) => {
    setLoading(true);
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      data: {
        current: current, // 当前页
        results: results, // 单页数量
      },
      type: 'json',
    }).then(data => {
      setLoading(false);
      setData({
        dataSource: data.results,
        total: 200,
      })
    });
  }, []);

  useEffect(() => {
    fetch(pagination.current, pagination.results)
  }, [fetch, pagination])

  return {
    pagination: {
      ...pagination,
      total: data.total,
      onShowSizeChange: changePageSize,
      onChange: handleTableChange,
      showQuickJumper: true,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '30', '40', '100'], // 每页显示条数的选项
      // showSizeChanger: true, // 是否显示每页条数修改
      // showQuickJumper: true, // 是否允许输入页码
      // onChange: handleTableChange, // 页码改变时的方法
      size: 'small', // 分页大小
    },
    loading,
    dataSource: data.dataSource,
  }
}
export default useTableHandler;