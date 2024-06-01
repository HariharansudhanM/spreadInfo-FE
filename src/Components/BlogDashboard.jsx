import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import axiosService from "../Utils/AxiosService";
import ApiRoutes from "../Utils/ApiRoutes";
import { BlogContext } from "../Context/BlogProvider";
import DisplayBox from "./DisplayBox";
import AllUsers from "../Pages/AllUsers";

function BlogDashboard() {
  let author = sessionStorage.getItem("Name");
  const { allBlogs, setAllBlogs } = useContext(BlogContext);
  const [filter, setFilter] = useState("All");
  const [filteredData, setFilteredData] = useState([]);
  async function loadBlog() {
    try {
      let req = await axiosService.get(ApiRoutes.getBlogs.path);
      if (req.status == 200) {
        console.log("Load success", req.data.result);
        if (allBlogs.length < 1) {
          setAllBlogs(() => [...allBlogs, ...req.data.result]);
        }
      }
      return req.data.result;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    loadBlog();
  }, []);

  ///////////filter
  function handleFilter(e) {
    setFilter(() => e.target.value);
    setFilteredData(() => allBlogs.filter((el) => el.Author == author));
  }

  return (
    <>
      <div
        className="container-md text-center blogContainer"
        style={{ display: "flex" }}
      >
        <div className="row">
          {/* {allBlogs?.map((el, index) => {
            return (
              <DisplayBox
                key={index}
                author={el.Author}
                title={el.Title}
                description={el.Description}
                location={el.Location}
                url={el.Image_URL}
                id={el.id}
              />
            );
          })} */}

          {filter == "All"
            ? allBlogs?.map((el, index) => {
                return (
                  <DisplayBox
                    key={index}
                    author={el.Author}
                    title={el.Title}
                    description={el.Description}
                    location={el.Location}
                    url={el.Image_URL}
                    id={el.id}
                  />
                );
              })
            : filteredData.map((el, index) => {
                return (
                  <DisplayBox
                    key={index}
                    author={el.Author}
                    title={el.Title}
                    description={el.Description}
                    location={el.Location}
                    url={el.Image_URL}
                    id={el.id}
                  />
                );
              })}
        </div>
        <p>
          Filter :
          <span>
            <select defaultValue={filter} onChange={handleFilter}>
              <option value="All">All</option>
              <option value="myPost">My Posts</option>
            </select>
          </span>
        </p>
      </div>
    </>
  );
}

export default BlogDashboard;
