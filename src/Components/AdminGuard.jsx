import React from "react";

function AdminGuard({ children }) {
  return <>{sessionStorage.getItem("Role") == "Admin" ? children : <></>}</>;
}

export default AdminGuard;
