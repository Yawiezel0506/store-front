import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#2A6478",
          padding: "4rem 2rem 6rem 2rem"
        }}
      >
        <div
          style={{
            minHeight: "83vh",
            backgroundColor: "#2A6478",
            width: "92%",
          }}
        >
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
