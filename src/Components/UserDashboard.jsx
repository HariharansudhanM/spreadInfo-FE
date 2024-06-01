import React, { useContext } from "react";
import TableRows from "./TableRows";
import { UserContext } from "../Context/UserProvider";

function UserDashboard() {
  const AllUsers = useContext(UserContext);
  return (
    <>
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
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default UserDashboard;
