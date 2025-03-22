"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";

const index = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", icon: "📊", path: "/admin" },
    { name: "User", icon: "👤", path: "/admin/user" },
    { name: "Product", icon: "🛒", path: "/admin/product" },
    { name: "Sign in", icon: "🔒", path: "/signin" },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>💠</div>
      <ul className={styles.menu}>
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={pathname === item.path ? styles.active : ""}>
            <Link href={item.path}>
              <span className={styles.icon}>{item.icon}</span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default index;
