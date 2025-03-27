"use client";

import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { ColumnsType } from "antd/es/table";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchTours } from "@/redux/slices/tourSlice";

const index = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tours } = useSelector((state: RootState) => state.tour);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  const columns: ColumnsType<{}> = [
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
      title: "Địa điểm",
      dataIndex: "TourLocation",
      key: "TourLocation",
      align: "center",
    },
    {
      title: "Địa điểm",
      dataIndex: "TourLocation",
      key: "TourLocation",
      align: "center",
    },
  ];

  return (
    <div className={styles.container}>
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
        <Button type="primary" icon={<PlusOutlined />}>
          Thêm
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={tours}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default index;
