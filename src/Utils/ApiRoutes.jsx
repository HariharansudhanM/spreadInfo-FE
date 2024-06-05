import React from "react";

const ApiRoutes = {
  getUsers: {
    path: "/users",
  },
  deleteUser: {
    path: "/users/deleteUser",
  },
  createBlog: {
    path: "/blogs/createBlog",
  },
  getBlogs: {
    path: "/blogs",
  },
  editBlog: {
    path: "/blogs/editBlog/:id",
  },
};

export default ApiRoutes;
