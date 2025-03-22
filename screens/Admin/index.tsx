"use client";

import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Table, Tag } from "antd";
import { useState } from "react";

const index = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([
    {
      key: "1",
      name: "Adam Trantow",
      company: "Mohr, Langworth and Hills",
      role: "UI Designer",
      verified: true,
      status: "Active",
    },
    {
      key: "2",
      name: "Angel Rolfson-Kulas",
      company: "Koch and Sons",
      role: "UI Designer",
      verified: true,
      status: "Active",
    },
    {
      key: "3",
      name: "Betty Hammes",
      company: "Waelchi – VonRueden",
      role: "UI Designer",
      verified: true,
      status: "Active",
    },
    {
      key: "4",
      name: "Billy Braun",
      company: "White, Cassin and Goldner",
      role: "UI Designer",
      verified: false,
      status: "Banned",
    },
    {
      key: "5",
      name: "Billy Stoltenberg",
      company: "Medhurst, Moore and Franey",
      role: "Leader",
      verified: true,
      status: "Banned",
    },
  ]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: any, record: any) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar>{text.charAt(0)}</Avatar>
          <span style={{ marginLeft: 8 }}>{text}</span>
        </div>
      ),
    },
    { title: "Company", dataIndex: "company", key: "company" },
    { title: "Role", dataIndex: "role", key: "role" },
    {
      title: "Verified",
      dataIndex: "verified",
      key: "verified",
      render: (verified: any) => (verified ? "✔️" : "-"),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: any) => (
        <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Users</h2>
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
          New User
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
