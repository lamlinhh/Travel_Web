"use client";
import {
    FacebookOutlined,
    TwitterOutlined,
    YoutubeOutlined,
} from "@ant-design/icons";
import { Button, Space } from "antd";
import styles from "./styles.module.scss";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <h2>Travel beyond your imagination, with our Travel Agency!</h2>
                    </div>
                    <div className={styles.address}>
                        <h3>Address</h3>
                        <p>1080 Brickell Ave</p>
                        <p>Miami - Florida</p>
                        <p>U.S. of America</p>
                        <Space size="middle">
                            <a href="#" aria-label="Facebook" className={styles.icon}>
                                <FacebookOutlined />
                            </a>
                            <a href="#" aria-label="Twitter" className={styles.icon}>
                                <TwitterOutlined />
                            </a>
                            <a href="#" aria-label="Youtube" className={styles.icon}>
                                <YoutubeOutlined />
                            </a>
                        </Space>
                    </div>
                    <div className={styles.contact}>
                        <h3>Contact</h3>
                        <Button type="primary" className={styles.emailButton}>
                            <a href="mailto:info@travel.com">info@travel.com</a>
                        </Button>
                        <p>+84 944 373 809</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
