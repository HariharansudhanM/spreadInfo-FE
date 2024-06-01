import React from "react";
import BlogModal from "../Components/BlogModal";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import BlogDashboard from "../Components/BlogDashboard";
import Footer from "../Components/Footer";

function BlogModalPage() {
  return (
    <>
      <BlogModal />
      <div className="overlay"></div>
      <Header />

      <div
        className="container-fluid"
        style={{ paddingLeft: "0px", paddingRight: "0px", display: "flex" }}
      >
        <SideBar />

        <BlogDashboard />
      </div>
      <Footer />
    </>
  );
}

export default BlogModalPage;
