"use client";
import { Container, Text, Yard } from "@/libs";
import { Button } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import styles from "./styles.module.scss";

const Header = () => {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith("/admin") || false;

  const handleLogout = () => {
    document.cookie = "token=; path=/; max-age=0";

    localStorage.removeItem("user");

    window.location.href = window.location.origin;
  };

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
                {isAdminPage ? (
                  <Button type="default" onClick={handleLogout}>
                    Logout
                  </Button>
                ) : (
                  <div className={styles.userIcon}>
                    <FaUserCircle size={20} />
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
