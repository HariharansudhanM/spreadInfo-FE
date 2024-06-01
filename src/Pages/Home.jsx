import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import SideBar from "../Components/SideBar";

import { useState } from "react";
import BlogDashboard from "../Components/BlogDashboard";
import BlogModal from "../Components/BlogModal";

function Home() {
  return (
    <div className="homeBackground">
      <Header />

      <div
        className="container-fluid"
        style={{ paddingLeft: "0px", paddingRight: "0px", display: "flex" }}
      >
        <SideBar />

        <BlogDashboard />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
