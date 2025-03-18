"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import { Container, Yard, Text } from "@/libs";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <Container className={styles.container} center>
      <div className={styles.body}>
        <div className={styles.content}>
          <Yard center>
            <Text fontSize={"30px"}>Next Travel</Text>
          </Yard>
          <div>
            <ul className={styles.ul}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Pages</Link>
              </li>
              <li>
                <Link href="/">Account</Link>
              </li>
              <li>
                <Link href="/">Tour</Link>
              </li>
              <li>
                <div className={styles.userIcon}>
                  <FaUserCircle size={20} />{" "}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
