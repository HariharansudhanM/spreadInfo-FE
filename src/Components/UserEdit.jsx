import React, { useContext, useEffect, useState } from "react";
import "../Modal.css";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Footer from "./Footer";
import SideBar from "./SideBar";
import Header from "./Header";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../Context/UserProvider";
import axios from "axios";
import axiosService from "../Utils/AxiosService";
import ApiRoutes from "../Utils/ApiRoutes";

function UserEdit() {
  const params = useParams();

  async function getUserData() {
    let token = sessionStorage.getItem("token");
    let req = await axiosService.get(ApiRoutes.getUsers.path, {
      headers: { authorization: `Bearer ${token}` },
    });
    let data = req.data;
    setEditItem(() => data.find((e) => e.id == params.id));
  }
  useEffect(() => {
    try {
      getUserData();

      //   console.log(editItem);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const { AllUsers, setAllUsers } = useContext(UserContext);
  const [editItem, setEditItem] = useState({});
  const navigate = useNavigate();

  /////////////////Form States
  //   let [Name, setName] = useState(editItem?.Name);
  //   let [Email, setEmail] = useState(editItem?.Email);
  //   let [Password, setPassword] = useState(editItem?.Password);
  //   let [Role, setRole] = useState(editItem?.Role);
  //   let [Country, setCountry] = useState(editItem?.Country);

  /////////formik
  //   const { handleSubmit, setValues, values, handleChange } = useFormik({
  //     initialValues: {
  //       Email: editItem.Email,
  //       Name: editItem?.Name || "Name",
  //       Role: editItem?.Role || "User",
  //       Password: editItem?.Password || "Password",
  //       Country: editItem?.Country || "Country",
  //     },
  //     validate: (values) => {
  //       console.log(values);
  //       // if (values.title === "") {
  //       //   return { title: "Title is required" };
  //       // }
  //       // if (values.content === "") {
  //       //   return { content: "Content is required" };
  //       // }
  //     },
  //     onSubmit: async (values) => {
  //       try {
  //         // await axios.put(
  //         //   `https://6461c1c2491f9402f4aa0565.mockapi.io/bank/${params.id}`,
  //         //   values
  //         // );
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     },
  //   });

  async function editUserData(formprops) {
    try {
      //   http://localhost:5000/users/editUser/${params.id}
      let token = sessionStorage.getItem("token");
      let req = await axios.put(
        `https://worldwiseblog.onrender.com/users/editUser/${params.id}`,
        formprops,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );
      if (req.status == 200) {
        // console.log(req);
        setAllUsers(() => [
          ...AllUsers.filter((e) => e.id !== editItem.id),
          formprops,
        ]);
        navigate("/allUsers");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const formprops = Object.fromEntries(formData);
      editUserData(formprops);

    //   console.log(formprops);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Header />

      <div
        className="container-fluid"
        style={{ paddingLeft: "0px", paddingRight: "0px", display: "flex" }}
      >
        <SideBar />
        <div className="editForm col-lg-6">
          <h1>Admin Panel</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="id"
                name="id"
                value={editItem?.id}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="Email"
                value={editItem?.Email}
                onChange={(e) =>
                  setEditItem({ ...editItem, Email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Password"
                name="Password"
                value={editItem?.Password}
                onChange={(e) =>
                  setEditItem({ ...editItem, Password: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={editItem?.Role}
                name="Role"
                onChange={(e) =>
                  setEditItem({ ...editItem, Role: e.target.value })
                }
              >
                <option value={"User"}>User</option>
                <option value={"Admin"}>Admin</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter country name"
                name="Country"
                value={editItem?.Country}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="Name"
                value={editItem?.Name}
                onChange={(e) =>
                  setEditItem({ ...editItem, Name: e.target.value })
                }
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserEdit;
