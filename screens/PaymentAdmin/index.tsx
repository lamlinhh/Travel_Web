"use client";

import axiosInstance from "@/axios/axiosInstance";
import { Text } from "@/libs";
import TourModal from "@/modals/TourModal";
import { fetchTours } from "@/redux/slices/tourSlice";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { isEqual } from "lodash";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { AppDispatch } from "../../redux/store";
import styles from "./styles.module.scss";

const Index = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [search, setSearch] = useState("");
  const [itemSearch, setItemSearch] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const searchRef = useRef("");

  const handleSearch = async () => {
    try {
      searchRef.current = search;
      const response = await axiosInstance.get(`Search?keyword=${search}`);
      setItemSearch(response?.data?.data);
      setSearch("");
    } catch (error: any) {
      toast.error("Tìm kiếm thất bại!");
    }
  };

  const columns: ColumnsType<{}> = [
    {
      title: "Tên Tour",
      dataIndex: ["BookTourId", "TourId", "TourName"],
      key: "UserName",
      align: "center",
    },
    {
      title: "Tên User",
      dataIndex: ["UserId", "UserName"],
      key: "UserName",
      align: "center",
    },
    {
      title: "Email",
      dataIndex: ["UserId", "Email"],
      key: "Email",
      align: "center",
    },
    {
      title: "Số điện thoại",
      dataIndex: ["UserId", "Phone"],
      key: "Phone",
      align: "center",
    },
    {
      title: "Giá",
      dataIndex: ["BookTourId", "TotalPrice"],
      key: "TotalPrice",
      align: "center",
      render: (data: any) => {
        return <Text center>{data} VNĐ</Text>;
      },
    },
    {
      title: "Hình thức thanh toán",
      dataIndex: "PaymentMethod",
      key: "PaymentMethod",
      align: "center",
    },
    {
      title: "Trạng thái",
      dataIndex: "PaymentStatus",
      key: "PaymentStatus",
      align: "center",
      render: (data: any) => {
        console.log("data", data);
        const isPaid = isEqual(data, true);
        return (
          <Tag color={isPaid ? "green" : "red"}>
            {isPaid ? "Đã thanh toán" : "Chưa thanh toán"}
          </Tag>
        );
      },
    },
    {
      title: "Xác nhận",
      key: "action",
      align: "center",
      render: (record: any) => {
        console.log("record", record);
        const isPaid = isEqual(record?.PaymentStatus, 1);

        const handleConfirmPayment = async () => {
          try {
            await axiosInstance.post(`/Payment/Callback`, {
              orderId: record?.TransactionId,
              resultCode: 0,
            });
            toast.success("Xác nhận thanh toán thành công!");
            const response = await axiosInstance.get(
              `Search?keyword=${searchRef.current}`,
            );
            setItemSearch(response?.data?.data);
          } catch (error) {
            toast.error("Xác nhận thanh toán thất bại!");
          }
        };

        return (
          <Button
            type="primary"
            onClick={handleConfirmPayment}
            disabled={isPaid}>
            Xác nhận thanh toán
          </Button>
        );
      },
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.Search}>
        <Input
          placeholder="Tìm kiếm theo (UserName | Phone | Email)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          prefix={<SearchOutlined />}
          style={{ width: 400 }}
        />
        <Button
          type="primary"
          icon={<SearchOutlined />}
          onClick={() => {
            handleSearch();
          }}>
          Tìm kiếm
        </Button>
      </div>
      <TourModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSuccess={() => dispatch(fetchTours())}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 16,
        }}></div>
      <Table
        bordered
        columns={columns}
        dataSource={itemSearch?.map((item: any) => ({
          ...item,
          key: item?._id,
        }))}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default Index;
