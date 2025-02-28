'use client';
import Link from "next/link";
import styles from "./styles.module.scss";
import { SearchOutlined, EnvironmentOutlined, GlobalOutlined } from "@ant-design/icons";
import { Button } from "antd";

const HomeSearch = () => {
    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <div className={styles.content}>
                    <div className={styles.overlay}></div>
                    <div className={styles.subtitle}>
                        <h3>LOVE TRAVEL THEME</h3>
                        <h1>
                            Adventure &<br /> Experience <br /> The Travel!
                        </h1>
                    </div>
                    <div className={styles.searchbox}>
                        <div className={styles.item}>
                            <div className={styles.icon}>
                                <Link href="">
                                    <SearchOutlined />
                                </Link>
                            </div>
                            <div className={styles.info}>
                                <h4>Search</h4>
                                <p>Insert keyword</p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.icon}>
                                <Link href="">
                                    <EnvironmentOutlined />
                                </Link>
                            </div>
                            <div className={styles.info}>
                                <h4>Destinations</h4>
                                <p>All Destinations</p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.icon}>
                                <Link href="">
                                    <GlobalOutlined />
                                </Link>
                            </div>
                            <div className={styles.info}>
                                <h4>Typologies</h4>
                                <p>All Typologies</p>
                            </div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <Button className={styles.btn}>SEARCH</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSearch;