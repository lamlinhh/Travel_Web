"use client";

import { RootState } from "@/redux/store";
import { Button, Form, Input, Modal, Select } from "antd";
import { isEqual } from "lodash";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axiosInstance from "../../axios/axiosInstance";

const { Option } = Select;

interface TourModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

interface TourFormValues {
  CategoryId: string;
  TourName: string;
  CategoryName: string;
  TourLocation: string;
  TourTime: number;
  TourPrice: number;
  TourDifficulty: string;
  TourMinAge: number;
  DescribeTour: string;
  Image: string;
  Rating: number;
}

const UserModal: React.FC<TourModalProps> = ({ open, onClose, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm<TourFormValues>();
  const { categori } = useSelector((state: RootState) => state.categorie);

  const handleSubmit = () => {
    form.submit();
  };

  const onFinish = async (values: TourFormValues) => {
    console.log("values", values);
    setLoading(true);
    try {
      const response = await axiosInstance.post("CreateNewTour", values);
      if (isEqual(response.data.errCode, 0)) {
        console.log("Check>>");

        form.resetFields();
        onClose();
        toast.success("Thêm mới thành công!");
        onSuccess();
      } else {
        toast.error("Thêm mới thất bại!");
      }
    } catch (error) {
      console.error("Lỗi API:", error);
      toast.error("Thêm mới thất bại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal
        open={open}
        title="Thêm tours"
        onOk={handleSubmit}
        onCancel={onClose}
        footer={[
          <Button key="back" onClick={onClose}>
            Hủy
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleSubmit}>
            Thêm
          </Button>,
        ]}>
        <Form form={form} layout="vertical" name="add_user" onFinish={onFinish}>
          <Form.Item
            label="TourName"
            name="TourName"
            rules={[{ required: true, message: "Vui lòng nhập TourName!" }]}>
            <Input placeholder="Nhập tên tour" />
          </Form.Item>

          <Form.Item
            label="CategoryName"
            name="CategoryId"
            rules={[
              { required: true, message: "Vui lòng chọn CategoryName!" },
            ]}>
            <Select
              showSearch
              placeholder="CategoryName"
              optionFilterProp="children">
              {(categori as Array<{ _id: string; CategoryName: string }>)?.map(
                (item: any) => (
                  <Option key={item?._id} value={item?._id}>
                    {item?.CategoryName}
                  </Option>
                ),
              )}
            </Select>
          </Form.Item>

          <Form.Item
            label="TourLocation"
            name="TourLocation"
            rules={[
              { required: true, message: "Vui lòng nhập TourLocation!" },
            ]}>
            <Input placeholder="Nhập TourLocation" />
          </Form.Item>

          <Form.Item
            label="TourTime"
            name="TourTime"
            rules={[{ required: true, message: "Vui lòng nhập TourTime!" }]}>
            <Input placeholder="Nhập TourTime" />
          </Form.Item>

          <Form.Item
            label="TourPrice"
            name="TourPrice"
            rules={[{ required: true, message: "Vui lòng nhập TourPrice!" }]}>
            <Input placeholder="Nhập TourPrice" />
          </Form.Item>

          <Form.Item
            label="TourDifficulty"
            name="TourDifficulty"
            rules={[{ required: true, message: "Vui lòng chọn mức độ!" }]}>
            <Select placeholder="Chọn mức độ">
              <Option value="Low">Low</Option>
              <Option value="High">High</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="TourMinAge"
            name="TourMinAge"
            rules={[{ required: true, message: "Vui lòng nhập TourMinAge!" }]}>
            <Input placeholder="Nhập TourMinAge" />
          </Form.Item>

          <Form.Item
            label="DescribeTour"
            name="DescribeTour"
            rules={[
              { required: true, message: "Vui lòng nhập DescribeTour!" },
            ]}>
            <Input placeholder="Nhập DescribeTour" />
          </Form.Item>

          <Form.Item
            label="Rating"
            name="Rating"
            rules={[{ required: true, message: "Vui lòng nhập Rating!" }]}>
            <Input placeholder="Nhập Rating" />
          </Form.Item>

          <Form.Item
            label="Image"
            name="Image"
            rules={[{ required: true, message: "Vui lòng nhập Image!" }]}>
            <Input placeholder="Nhập Image" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UserModal;
