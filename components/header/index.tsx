"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import { Container, Yard } from "@/libs";

const Header = () => {
  return (
    <Container className={styles.container} center>
      <div className={styles.body}>
        <div className={styles.content}>
          <Yard center>ICON</Yard>
          <div>
            <ul className={styles.ul}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Travel</Link>
              </li>
              <li>
                <Link href="/Prices">Prices</Link>
              </li>
              <li>
                <Link href="/Shop">Shop</Link>
              </li>
              <li>
                <Link href="/Blog">Blog</Link>
              </li>
              <li>
                <Link href="/AboutUs">About Us</Link>
              </li>
              <li>
                <Link href="/ContactUs">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
