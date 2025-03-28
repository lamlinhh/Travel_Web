"use client";

import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Table, Tag } from "antd";
import { useState } from "react";
import styles from "./styles.module.scss";
import { ColumnsType } from "antd/es/table";

const index = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([
    {
      key: "1",
      name: "Adam Trantow",
      img: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/cat2.webp",
      price: "100.000.000",
      status: "Active",
    },
    {
      key: "2",
      name: "Angel Rolfson-Kulas",
      img: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/cat3.webp",
      price: "300.000.000",
      status: "Active",
    },
    {
      key: "3",
      name: "Betty Hammes",
      img: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/cat4.webp",
      price: "600.000.000",
      status: "Active",
    },
    {
      key: "4",
      name: "Billy Braun",
      img: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/cat5.webp",
      price: "700.000.000",
      status: "Banned",
    },
    {
      key: "5",
      name: "Billy Stoltenberg",
      img: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/main/assets/Images/th.webp",
      price: "100.000.000",
      status: "Banned",
    },
  ]);

  const columns: ColumnsType<{
    key: string;
    name: string;
    img: string;
    price: string;
    status: string;
  }> = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      align: "center",
      render: (text: any) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar>{text.charAt(0)}</Avatar>
          <span style={{ marginLeft: 8 }}>{text}</span>
        </div>
      ),
    },
    {
      title: "Ảnh",
      dataIndex: "img",
      key: "img",
      width: 400,
      align: "center",
      render: (data: any) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <img
            src={data}
            alt="product"
            style={{
              width: 140,
              height: 140,
              objectFit: "cover",
              borderRadius: 8,
            }}
          />
        </div>
      ),
    },
    {
      title: "Giá",
      width: 300,
      align: "center",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Số lượng",
      dataIndex: "status",
      key: "status",
      align: "center",
      width: 400,

      render: (status: any) => (
        <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <h2>Sản phẩm</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 16,
        }}>
        <Input
          placeholder="Search user..."
          prefix={<SearchOutlined />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: 250 }}
        />
        <Button type="primary" icon={<PlusOutlined />}>
          Thêm
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={users}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default index;
