"use client";

import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Popconfirm, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import moment from "moment";
import { DeleteOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchTours } from "../../redux/slices/tourSlice";
import axiosInstance from "../../axios/axiosInstance";
import React from "react";
import TourModal from "../../modals/TourModal";

const index = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tours } = useSelector((state: RootState) => state.tour);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  const handleDelete = async (tourID: string) => {
    try {
      await axiosInstance.delete(`DeleteTour/${tourID}`);
      toast.success("Xoá thành công!");
      dispatch(fetchTours());
    } catch (error) {
      toast.error("Xoá thất bại!");
    }
  };

  const columns: ColumnsType<{}> = [
    {
      title: "",
      key: "action",
      align: "center",
      width: 30,
      render: (_, record: any) => (
        <Popconfirm
          title="Bạn có chắc chắn muốn xóa tour này?"
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
      title: "Tên tour",
      dataIndex: "TourName",
      key: "TourName",
      align: "center",
    },
    {
      title: "Tên danh mục",
      dataIndex: "CategoryName",
      key: "CategoryName",
      align: "center",
    },
    {
      title: "Mô tả",
      dataIndex: "DescribeTour",
      key: "DescribeTour",
      align: "center",
    },
    {
      title: "Địa điểm",
      dataIndex: "TourLocation",
      key: "TourLocation",
      align: "center",
    },
    {
      title: "Thời gian",
      dataIndex: "TourTime",
      key: "TourTime",
      align: "center",
    },
    {
      title: "Giá",
      dataIndex: "TourPrice",
      key: "TourPrice",
      align: "center",
    },
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
      <TourModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSuccess={() => dispatch(fetchTours())}
      />
      <h2>Tours</h2>
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
        dataSource={tours.map((tour: any) => ({ ...tour, key: tour?._id }))}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default index;
