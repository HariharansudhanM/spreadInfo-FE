import React from "react";
import EditBlogForm from "../Components/EditBlogForm";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import BlogDashboard from "../Components/BlogDashboard";
import Footer from "../Components/Footer";

function EditBlog() {
  return (
    <>
      <EditBlogForm />
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

export default EditBlog;
