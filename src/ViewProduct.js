import React from 'react';
import { Table } from 'antd';

const ViewProduct = () => {
  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
  ];

  const data = [
    {
      key: '1',
      productName: 'Product 1',
      price: 20,
    },
    {
      key: '2',
      productName: 'Product 2',
      price: 30,
    },
    // Add more data as needed
  ];

  return (
    <div>
      <h1>View Products</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default ViewProduct;
