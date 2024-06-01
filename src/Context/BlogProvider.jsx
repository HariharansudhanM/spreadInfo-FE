import { createContext, useState } from "react";

export const BlogContext = createContext();

import React from "react";

function BlogProvider({ children }) {
  const [allBlogs, setAllBlogs] = useState([]);

  return (
    <BlogContext.Provider value={{ allBlogs, setAllBlogs }}>
      {children}
    </BlogContext.Provider>
  );
}

export default BlogProvider;
