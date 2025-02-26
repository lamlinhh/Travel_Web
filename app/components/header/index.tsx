"use client"
import { Button } from "antd";
import styles from "./styles.module.scss";
import Link from "next/link";


const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <div className={styles.content}>
                    <div>
                        <ul className={styles.ul}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/">Travel</Link></li>
                            <li><Link href="/">Pages</Link></li>
                            <li><Link href="/">Shop</Link></li>
                            <li><Link href="/">Blog</Link></li>
                            <li><Link href="/">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className={styles.button}>
                        <Button type="primary" size={"middle"}>
                            Seacrh
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;