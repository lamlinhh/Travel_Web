"use client";
import { useState, useEffect } from "react";
import { Container, Text, Yard } from "@/libs";
import { Button, Popover } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import styles from "./styles.module.scss";
import Image from "next/image";

const getCookie = (name: string) => {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
};

const Header = () => {
  const pathname = usePathname();
  // const isAdminPage = pathname?.startsWith("/admin") || false;

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    setIsLoggedIn(!!getCookie("token"));
  }, []);

  const handleLogout = () => {
    document.cookie = "token=; path=/; max-age=0";
    setIsLoggedIn(false);
    window.location.href = window.location.origin;
  };

  const userMenu = (
    <div className={styles.popoverMenu}>
      <Link href="/account">
        <Button type="text">Tài khoản</Button>
      </Link>
      <Link href="/my-tours">
        <Button type="text">Tour đã đặt</Button>
      </Link>
      <Button type="text" danger onClick={handleLogout}>
        Đăng xuất
      </Button>
    </div>
  );

  return (
    <Container className={styles.container} center>
      <div className={styles.body}>
        <div className={styles.content}>
          <Yard center>
            <Text fontSize={"30px"}>
              <Image
                src={
                  "https://raw.githubusercontent.com/lamlinhh/Travel_Web/refs/heads/vu/assets/Images/logo.webp"
                }
                alt=""
                width={"80"}
                height={"60"}
              />
            </Text>
          </Yard>
          <div>
            <ul className={styles.ul}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/DestinationsPage">Destinations</Link>
              </li>
              <li>
                <Link href="/Tours">Tour</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                {isLoggedIn ? (
                  <Popover
                    content={userMenu}
                    trigger="click"
                    placement="bottomRight">
                    <div className={styles.userIcon}>
                      <FaUserCircle size={30} />
                    </div>
                  </Popover>
                ) : (
                  <div className={styles.authButtons}>
                    <Link href="/login">
                      <Button type="primary">Đăng nhập</Button>
                    </Link>
                    <Link href="/register">
                      <Button type="default">Đăng ký</Button>
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
