import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BlogContext } from "../Context/BlogProvider";
import axios from "axios";

function BlogModal() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [displayItem, setDisplayItem] = useState({});
  const { allBlogs, setAllBlogs } = useContext(BlogContext);

  useEffect(() => {
    getDisplayItem(id);
  }, []);

  async function getDisplayItem(id) {
    try {
      // http://localhost:5000/blogs
      let req = await axios.get("https://worldwiseblog.onrender.com/blogs");
      //   console.log(req.data.result);
      let data = req.data.result;

      setDisplayItem(() => data.find((el) => el.id == id));
      //   console.log(displayItem);
    } catch (error) {
      console.log(error);
    }
  }

  ////////////Delete

  let author = sessionStorage.getItem("Name");
  async function handleDelete() {
    if (displayItem?.Author == author) {
      if (confirm("Are you sure you want to delete this record?") == true) {
        try {
          deleteBlog(id);
          setAllBlogs(allBlogs.filter((el) => el.id !== id));
        } catch (error) {
          console.log(error);
        }
      } else {
        return;
      }
    } else {
      alert("unable to delete. You are not the owner of this content");
    }
  }

  async function deleteBlog(id) {
    // http://localhost:5000/blogs/${id}
    let res = await axios.delete(
      `https://worldwiseblog.onrender.com/blogs/${id}`
    );
    if (res.status == 200) {
      navigate("/home");
    }
  }

  return (
    <>
      <div className="modal1">
        <div className="modal-content modal-dialog-scrollable">
          <h6>
            <strong>{displayItem?.Author || "Hari"} </strong>posted this....
          </h6>
          <div className="card" style={{ height: "auto" }}>
            <img
              src={displayItem.Image_URL}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{displayItem?.Title || "title"}</h5>
              <p className="card-text">
                {displayItem?.Description || "Description"}
              </p>

              <div
                className="icons"
                style={{ position: "relative", right: "10px" }}
              >
                <button type="button" className="btn btn-light">
                  ❤️ Like
                </button>
                {"  "}
                <button type="button" className="btn btn-light">
                  💬 Comment
                </button>
                {"  "}
                <button type="button" className="btn btn-light">
                  ➡️ Share
                </button>
                {"   "}
                <Link to={"/home"} className="btn btn-success">
                  Close
                </Link>
                {"   "}
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogModal;
