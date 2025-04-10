"use client";
import {
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Input, Button, Space } from "antd";
import styles from "./styles.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.wrapper}>
          <div className={styles.column}>
            <div className={styles.logo}>TOUR & TRAVELS</div>
            <p><strong>Address:</strong> 12 Nguyen Van Bao, Ward 1, Go Vap, Ho Chi Minh</p>
            <p><strong>Hotline:</strong> 0123456789</p>
            <p>
              <strong>Email:</strong>
              <Link className={styles.Link} href="mailto:info@tourist.vn"> info@tourist.vn</Link>
            </p>
          </div>

          <div className={styles.column}>
            <h3>ABOUT TOURIST</h3>
            <Link className={styles.Link} href="/blog">Blog</Link>
          </div>

          <div className={styles.column}>
            <h3>QUICK LINKS</h3>
            <Link className={styles.Link} href="/Tours">Booking Tours</Link>
          </div>

          <div className={styles.column}>
            <h3>NEWSLETTER</h3>
            <p>Subscribe to get the latest updates</p>
            <Space.Compact>
              <Input placeholder="Email address" />
              <Button icon={<SendOutlined />} />
            </Space.Compact>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>&copy; Tourist. All Rights Reserved.</p>
          <Space>
            <Link className={styles.linkIcon} href="#" ><FacebookOutlined /></Link>
            <Link className={styles.linkIcon} href="#" ><TwitterOutlined /></Link>
            <Link className={styles.linkIcon} href="#" ><YoutubeOutlined /></Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Footer;
