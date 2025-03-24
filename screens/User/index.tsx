"use client";

import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Table } from "antd";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchUsers } from "@/redux/slices/getUserSlice";
import { User } from "@/types/user";
import moment from "moment";
import { ColumnsType } from "antd/es/table";
import UserModal from "@/components/UserModal";

const UserPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users } = useSelector((state: RootState) => state.user);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const columns: ColumnsType<User> = [
    {
      title: "UserName",
      dataIndex: "UserName",
      key: "UserName",
      align: "center",
      render: (text: any) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar>{text.charAt(0)}</Avatar>
          <span style={{ marginLeft: 8 }}>{text}</span>
        </div>
      ),
    },
    { title: "Email", dataIndex: "Email", key: "Email", align: "center" },
    { title: "Phone", dataIndex: "Phone", key: "Phone", align: "center" },
    { title: "Role", dataIndex: "Role", key: "Role", align: "center" },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      align: "center",
      render: (data: any) => <>{moment(data).format("DD/MM/YYYY")}</>,
    },
  ];

  return (
    <div className={styles.container}>
      <UserModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSuccess={() => dispatch(fetchUsers())}
      />
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
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setOpenModal(true)}>
          Thêm
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={users}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default UserPage;
