"use client";

import { Form, Input, Button, Card, Typography, message } from "antd";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/axios/axiosInstance";
import styles from "./styles.module.scss";
import { isEqual } from "lodash";
import { toast } from "react-toastify";

const { Title } = Typography;

const Index = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (values: {
    UserName: string;
    UserPassword: string;
    Email: string;
    Phone: number;
  }) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/CreateNewUser", {
        ...values,
        Role: "user",
      });

      if (isEqual(response.data.errCode, 0)) {
        message.success("Đăng ký thành công!");
        toast.success("Đăng ký thành công!", {
          style: { width: "340px", height: "80px", textAlign: "center" },
        });

        // Chuyển về trang home
        router.push("/");
      } else {
        toast.error("Email hoặc mật khẩu không chính xác!");
        message.error(response.data.message || "Đăng ký thất bại!");
      }
    } catch (error) {
      toast.error("Có lỗi xảy ra, vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <Card className={styles.registerCard}>
        <Title level={2} style={{ textAlign: "center" }}>
          Đăng ký
        </Title>
        <Form layout="vertical" onFinish={handleRegister}>
          <Form.Item
            label="Tài khoản"
            name="UserName"
            rules={[{ required: true, message: "Vui lòng nhập UserName!" }]}>
            <Input placeholder="Nhập tên người dùng" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="UserPassword"
            rules={[
              { required: true, message: "Vui lòng nhập UserPassWord!" },
            ]}>
            <Input placeholder="Nhập mật khẩu" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="Email"
            rules={[
              { required: true, message: "Vui lòng nhập Email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}>
            <Input placeholder="Nhập email" />
          </Form.Item>

          <Form.Item
            label="Số điện thoại"
            name="Phone"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
              {
                pattern: /^[0-9]{10,11}$/,
                message: "Số điện thoại không hợp lệ!",
              },
            ]}>
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Index;
