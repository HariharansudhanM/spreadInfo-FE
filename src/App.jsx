import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import appRouter from "./Utils/AppRoutes";
import LandingPage from "./Pages/LandingPage";
import "./App.css";
import "./sidebar.css";

function App() {
  const router = createBrowserRouter(appRouter);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

