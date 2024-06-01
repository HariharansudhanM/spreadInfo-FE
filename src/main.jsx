import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import UserProvider from "./Context/UserProvider.jsx";
import BlogProvider from "./Context/BlogProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BlogProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </BlogProvider>
  </React.StrictMode>
);
