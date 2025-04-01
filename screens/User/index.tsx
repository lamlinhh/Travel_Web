"use client";

import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Popconfirm, Table } from "antd";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchUsers } from "@/redux/slices/getUserSlice";
import { User } from "@/types/user";
import moment from "moment";
import { ColumnsType } from "antd/es/table";
import { DeleteOutlined } from "@ant-design/icons";
import axiosInstance from "@/axios/axiosInstance";
import { toast } from "react-toastify";
import UserModal from "@/components/UserModal";

const UserPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users } = useSelector((state: RootState) => state.user);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = async (userID: string) => {
    try {
      await axiosInstance.delete(`DeleteUser/${userID}`);
      toast.success("Xoá thành công!");
      dispatch(fetchUsers());
    } catch (error) {
      toast.error("Xoá thất bại!");
    }
  };

  const columns: ColumnsType<User> = [
    {
      title: "",
      key: "action",
      align: "center",
      width: 30,
      render: (_, record: any) => (
        <Popconfirm
          title="Bạn có chắc chắn muốn xóa user này?"
          onConfirm={() => handleDelete(record?._id)}
          okText="Xóa"
          cancelText="Hủy">
          <DeleteOutlined
            style={{ color: "red", cursor: "pointer", fontSize: "20px" }}
          />
        </Popconfirm>
      ),
    },
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
        bordered
        columns={columns}
        dataSource={users}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default UserPage;
