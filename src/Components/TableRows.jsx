import React, { useContext } from "react";
import { Button } from "./Button";
import axiosService from "../Utils/AxiosService";
import ApiRoutes from "../Utils/ApiRoutes";
import { UserContext } from "../Context/UserProvider";
import UserEdit from "./UserEdit";
import { Link } from "react-router-dom";

function TableRows({
  name,
  email,
  country,
  password,
  role,
  key,
  id,
  handleEdit,
}) {
  let token = sessionStorage.getItem("token");

  /////////////HandleDelete
  function handleDelete(el) {
    let req = { Email: el };
    deleteUser(req);
  }

  const { deleteUsers, handleChangeFlag } = useContext(UserContext);

  ///////////Delete User

  async function deleteUser(req) {
    if (confirm("Are you sure you want to delete this record?") == true) {
      try {
        let res = await axiosService.post(ApiRoutes.deleteUser.path, req, {
          headers: { authorization: `Bearer ${token}` },
        });
        if (res.status == 200) {
          handleChangeFlag();
          deleteUsers(req.Email);
          //   console.log(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }
  }

  return (
    <>
      <tr>
        <th scope="row">{id}</th>
        <td>{email}</td>
        <td>{password}</td>
        <td>{role}</td>
        <td>{country}</td>
        <td>{name}</td>
        <td>
          <Link to={`/users/${id}`}>
            <Button>Edit</Button>
          </Link>{" "}
          <Button handle={handleDelete} el={email}>
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
}

export default TableRows;
