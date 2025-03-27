"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";

const Index = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", icon: <SpaceDashboardIcon />, path: "/admin" },
    { name: "User", icon: <PersonIcon />, path: "/admin/user" },
    { name: "Tour", icon: <ShoppingCartIcon />, path: "/admin/tour" },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>Admin</div>
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

export default Index;
