import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";
import axiosService from "../Utils/AxiosService";
import ApiRoutes from "../Utils/ApiRoutes";
import { UserContext } from "../Context/UserProvider";
import TableRows from "../Components/TableRows";
import useLogout from "../Hooks/useLogout";
import { useNavigate } from "react-router-dom";
import UserEdit from "../Components/UserEdit";
import UserDashboard from "../Components/UserDashboard";

function AllUsers() {
  //   const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();
  const { AllUsers, handleAllUsers, changeFlag } = useContext(UserContext);

  function handleEdit() {
    if (edit == true) {
      setEdit(() => false);
    } else {
      setEdit(() => true);
    }
  }

  async function getAllUsers() {
    try {
      let token = sessionStorage.getItem("token");
      let req = await axiosService.get(ApiRoutes.getUsers.path, {
        headers: { authorization: `Bearer ${token}` },
      });
      handleAllUsers(req.data);

      return req.data;
    } catch (error) {
      console.log(error.response.data.message);
      if (error.response.data.message == "jwt expired") {
        navigate("/login");
      }
    }
  }

  useEffect(() => {
    if (!(AllUsers.length > 0)) {
      getAllUsers();
      console.log(changeFlag);
    }
  }, [changeFlag]);

  return (
    <>
      <Header />
      <div
        className="container-fluid"
        style={{ paddingLeft: "0px", paddingRight: "0px", display: "flex" }}
      >
        <SideBar />
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Role</th>
              <th scope="col">Country</th>
              <th scope="col">Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {AllUsers.map((e, index) => {
              return (
                <TableRows
                  key={index}
                  id={e.id}
                  name={e.Name}
                  email={e.Email}
                  password={e.Password}
                  role={e.Role}
                  country={e.Country}
                  handleEdit={handleEdit}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default AllUsers;
