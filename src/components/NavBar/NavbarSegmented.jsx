import { useState } from "react";
import {
  Icon2fa,
  IconDatabaseImport,
  IconFileAnalytics,
  IconFingerprint,
  IconKey,
  IconLicense,
  IconLogout,
  IconMessage2,
  IconMessages,
  IconReceipt2,
  IconReceiptRefund,
  IconSettings,
  IconShoppingCart,
  IconSwitchHorizontal,
  IconUsers,
  IconBuildingStore,
  IconCarGarage
} from "@tabler/icons-react";
import { SegmentedControl, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import classes from "./NavbarSegmented.module.css";

const tabs = {
  account: [
    { link: "/products", label: "Products", icon: IconBuildingStore },
    { link: "", label: "Vendors", icon: IconReceipt2 },
    { link: "", label: "Security", icon: IconFingerprint },
    { link: "/deposits", label: "Deposits", icon: IconCarGarage },
    { link: "", label: "Clients", icon: IconDatabaseImport },
    { link: "", label: "Users", icon: Icon2fa },
    { link: "", label: "Other Settings", icon: IconSettings },
  ],
  general: [
    { link: "", label: "Orders", icon: IconShoppingCart },
    { link: "", label: "Receipts", icon: IconLicense },
    { link: "", label: "Reviews", icon: IconMessage2 },
    { link: "", label: "Messages", icon: IconMessages },
    { link: "", label: "Customers", icon: IconUsers },
    { link: "", label: "Refunds", icon: IconReceiptRefund },
    { link: "", label: "Files", icon: IconFileAnalytics },
  ],
};

export function NavbarSegmented() {
  const [section, setSection] = useState("account");
  const [active, setActive] = useState("Billing");

  const links = tabs[section].map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      to={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div>
        <Text fw={500} size="sm" className={classes.title} c="dimmed" mb="xs">
          ariannavega2022@gmail.com
        </Text>

        <SegmentedControl
          value={section}
          onChange={(value) => setSection(value)}
          transitionTimingFunction="ease"
          fullWidth
          data={[
            { label: "Account", value: "account" },
            { label: "System", value: "general" },
          ]}
        />
      </div>

      <div className={classes.navbarMain}>{links}</div>

      <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}
