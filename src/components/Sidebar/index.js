import { Navigation } from "../../configurations/navigation/Navigation";
import { useSettings } from "@/hook/useSettings";
// import { useAuth } from "@/hooks/useAuth";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Drawer, Flex, Menu } from "antd";
import { createStyles } from "antd-style";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const useSidebarStyle = createStyles(({ token, css }) => ({
  sidebar: css`
    && .ant-menu-item,
    .ant-menu-submenu-title {
      margin: 4px 0px;
      margin-right: -16px;
      border-radius: 0px 50px 50px 0px;
    }

    && .ant-menu-item-selected {
      border-radius: 0px 50px 50px 0px;
      background: linear-gradient(
        135deg,
        ${token.primaryGradientStart} 0%,
        ${token.primaryGradientMiddle} 68%,
        ${token.primaryGradientEnd} 100%
      );
      color: white;
    }

    && .ant-menu-item:hover,
    .ant-menu-submenu-title:hover {
      border-radius: 0px 50px 50px 0px;
    }

    && .ant-menu.ant-menu-sub.ant-menu-inline {
      background-color: unset;
    }
  `,
}));

const SidebarMode = ({
  children,
  title,
  settings,
  openSidebar,
  onCloseSidebar,
}) => {
  if (!settings?.autoNative) {
    return (
      <Flex align="center" vertical>
        {title}
        {children}
      </Flex>
    );
  } else {
    return (
      <Drawer
        width={240}
        title={title}
        onClose={onCloseSidebar}
        open={openSidebar}
        placement="left"
        key="left"
        closable={false}
        extra={
          <Button
            icon={<CloseOutlined />}
            onClick={onCloseSidebar}
            type="text"
          />
        }
        styles={{
          header: { padding: "8px 16px" },
          body: { padding: "8px 4px 0px 0px", overflow: "hidden" },
        }}
      >
        {children}
      </Drawer>
    );
  }
};
const Sidebar = ({
  openSidebar,
  onCloseSidebar,
  onChangeRoute = () => null,
}) => {
  const pathname = usePathname();
  const { settings } = useSettings();
  const { styles } = useSidebarStyle();

  const collapsedWidth =
    settings.navigationCollapse && !settings.navbar ? "60" : "230";
  const defaultOpenKeys =
    !settings.navbar &&
    !settings.navigationCollapse &&
    Navigation.find((item) =>
      item.children && item.children.length > 0
        ? item.children.find((child) => child.key === pathname)
        : item.key === pathname
    );
  return (
    <SidebarMode
      openSidebar={openSidebar}
      onCloseSidebar={onCloseSidebar}
      settings={settings}
      title={
        <Flex align="center">
          <Image
            width={32}
            height={32}
            alt="logo"
            src="/images/logo.png"
            style={{ margin: 8, marginLeft: 0 }}
          />
          {((settings.autoNative &&
            (settings.navigationCollapse || !settings.navigationCollapse)) ||
            (!settings.navigationCollapse && !settings.navbar)) && (
            <Link
              style={{
                fontSize: "16px",
                whiteSpace: "nowrap",
                fontWeight: "bold",
                margin: "0px 8px",
              }}
              href={"/"}
            >
              {process.env.NEXT_PUBLIC_APP_NAME}
            </Link>
          )}
        </Flex>
      }
    >
      <Menu
        mode="inline"
        selectedKeys={[pathname]}
        defaultOpenKeys={[defaultOpenKeys.key]}
        style={{
          height: "calc(100dvh - 50px)",
          width: collapsedWidth,
          borderRight: 0,
          overflow: "auto",
          padding: "8px 0px",
          backgroundColor: "inherit",
        }}
        className={styles.sidebar}
        onClick={onChangeRoute}
        items={Navigation.map((item) => ({
          ...item,
          children: item.children?.filter((child) =>
            child.roles.includes(profile?.role)
          ),
        }))}
      />
    </SidebarMode>
  );
};

export default Sidebar;
