"use client";
import { Area, Block, Text, Yard } from "@/libs";
import styles from "./styles.module.scss";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";


const BreadcrumbHeader = () => {
    return (
        <Yard className={styles.header}>
            <Area className={styles.breadcrumb}>
                <Block className={styles.breadcrumbText}>
                    <Text fontSize={"16px"}>
                        <Link href={"/"}>Home</Link>
                        <span className={styles.text}>/</span>
                        <span>France / Paris / Tours</span>
                    </Text>
                </Block>
                <Block className={styles.contact}>
                    <div>
                        <FiPhone color="orange" />
                        <span>Whatsapp: +84 944 373 809</span>
                    </div>
                </Block>
            </Area>
        </Yard>
    )
}
export default BreadcrumbHeader;