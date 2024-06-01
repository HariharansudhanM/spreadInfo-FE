import React from "react";
import { useNavigate } from "react-router-dom";

function useLogout() {
  let navigate = useNavigate();
  return () => {
    sessionStorage.clear();
    localStorage.clear();

    navigate("/landingPage");
  };
}

export default useLogout;
