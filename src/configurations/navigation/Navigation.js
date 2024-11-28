import {
  HomeOutlined,
  InfoCircleOutlined,
  AppstoreAddOutlined,
  ShoppingCartOutlined,
  ContactsOutlined,
  DashboardOutlined,
} from "@ant-design/icons";

const Navigation = [
  {
    key: "/",
    label: "หน้าแรก",
    // icon: <HomeOutlined />,
  },
  {
    key: "/about",
    label: "เกี่ยวกับเรา",
    // icon: <InfoCircleOutlined />,
  },
  {
    key: "/new-event",
    label: "ข่าวสาร",
    // icon: <AppstoreAddOutlined />,
  },
  {
    key: "/products",
    label: "สินค้า",
    // icon: <ShoppingCartOutlined />,
  },
  {
    key: "/contact",
    label: "ติดต่อ",
    // icon: <ContactsOutlined />,
  },
  {
    key: "/dashboard-admin/",
    label: "จัดการข้อมูล",
    // icon: <DashboardOutlined />,
  },
];

export default Navigation;
