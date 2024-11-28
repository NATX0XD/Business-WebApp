"use client";
import {
  ClearOutlined,
  GlobalOutlined,
  MoonFilled,
  MoonOutlined,
  SettingOutlined,
  SunFilled,
  SunOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Flex, Image, Menu } from "antd";
import Navigation from "../../configurations/navigation/Navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [selectedKeysLanguage, setSelectedKeysLanguage] = useState("");
  const [selectedKeysTheme, setSelectedKeysTheme] = useState({
    mode: "",
  });
  const pathname = usePathname();
  const changeTheme = (name, value) => {
    setSelectedKeysTheme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const changeLanguage = (lang) => {
    setSelectedKeysLanguage(lang);
  };
  useEffect(() => {
    console.log("Updated Language:", selectedKeysLanguage); 
  }, [selectedKeysLanguage]);
  const modeItem = [
    {
      label: "โหมดมืด",
      icon: <MoonOutlined />,
      key: "Dark",
      onClick: () => changeTheme("mode", "Dark"),
    },
    {
      label: "โหมดสว่าง",
      icon: <SunOutlined />,
      key: "Light",
      onClick: () => changeTheme("mode", "Light"),
    },
  ];

  const languageItem = [
    {
      label: "ภาษาไทย",
      key: "th",
      onClick: () => changeLanguage("th"),
    },
    {
      label: "English",
      key: "en",
      onClick: () => changeLanguage("en"),
    },
  ];
  return (
    <>
      <Image
        width={32}
        height={32}
        alt="logo"
        src="/images/logo.png"
        style={{ margin: 8 }}
      />
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
      <Menu
        style={{
          width: "100%",
          borderBottom: 0,
          backgroundColor: "inherit",
          flex: 1,
          minWidth: 0,
          // lineHeight:1
        }}
        mode="horizontal"
        defaultSelectedKeys={[pathname]}
        selectedKeys={[pathname]}
        // onClick={onChangeRoute}
        items={Navigation.map((item) => ({
          ...item,
          // children: item.children?.filter((child) =>
          //   child.roles?.includes(profile?.role)
          // ),
        }))}
      />
      <Flex align="center" gap={4} style={{ flexGrow: 1 }} justify="end">
        <Dropdown
          menu={{
            items: languageItem,
            selectable: true,
            // selectedKeys: [selectedKeysLanguage],
          }}
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}
          trigger={["click"]}
        >
          <Button icon={<GlobalOutlined />} type="text" size="large" />
        </Dropdown>
        <Dropdown
          menu={{
            items: modeItem,
            selectable: true,
            // selectedKeys: [selectedModeItem],
          }}
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}
          trigger={["click"]}
        >
          <Button
            icon={selectedKeysTheme === "Dark" ? <MoonFilled /> : <SunFilled />}
            type="text"
            size="large"
          />
        </Dropdown>
        {/* <NavNotifications settings={settings} /> */}

        <Button
          shape="default"
          type="primary"
          size="large"
          // onClick={handleOpenThemeSettings}
        >
          Get in touch
        </Button>
      </Flex>
    </>
  );
};

export default Navbar;
