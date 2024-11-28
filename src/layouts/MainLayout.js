"use client";
import Navbar from "../components/Navbar";
import ThemeComponent from "../themes";
import { Layout } from "antd";

const { Header, Content, Sider, Footer } = Layout;

const MainLayout = ({ children }) => {
  return (
    <ThemeComponent>
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
          }}
        >
          <Navbar />
        </Header>
        <Content
          style={{
            padding: "20px 48px",
            // border: "2px solid red",
            minHeight: 380,
          }}
        >
          {children}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </ThemeComponent>
  );
};

export default MainLayout;
