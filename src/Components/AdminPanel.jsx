import React from "react";
import { Link } from "react-router-dom";

function AdminPanel() {
  return (
    <>
      <div className="sidebar-heading">Admin Panel</div>

      <li className="nav-item active">
        <div
          id="collapsePages"
          className="collapse show"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">User Database</h6>
            <Link className="collapse-item" to={"/allUsers"}>
              All Users
            </Link>
            <Link className="collapse-item" to={"/allUsers"}>
              Delete Users
            </Link>
            <Link className="collapse-item" to={"/allUsers"}>
              Edit Users
            </Link>
          </div>
        </div>
      </li>
    </>
  );
}

export default AdminPanel;
