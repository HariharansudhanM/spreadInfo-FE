import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { Form } from "react-bootstrap";
import axiosService from "../Utils/AxiosService";
import ApiRoutes from "../Utils/ApiRoutes";
import axios from "axios";

function CreateBlogForm() {
  const navigate = useNavigate();
  let author = sessionStorage.getItem("Name");
  async function createNewBlog(formprops) {
    try {
      // http://localhost:5000/blogs/createBlog
      let req = await axios.post(
        "https://worldwiseblog.onrender.com/blogs/createBlog",
        formprops
      );
      if (req.status == 200) {
        navigate("/home");
        console.log(req);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formprops = Object.fromEntries(formData);
    createNewBlog(formprops);

    console.log(formprops);
  }
  return (
    <>
      <div className="modal1">
        <div className="modal-content">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="Title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                name="Description"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter location"
                name="Location"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Select
                aria-label="Default select example"
                defaultValue={"/img-1.jpg"}
                name="Image_URL"
              >
                <option value={"/img-1.jpg"}>image1</option>
                <option value={"/img-2.jpg"}>image2</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" name="Author" value={author} />
            </Form.Group>

            <button className="btn btn-success" type="submit">
              Submit
            </button>
            {"  "}
            <Link className="btn btn-success" to={"/home"}>
              Close
            </Link>
          </Form>
        </div>
      </div>
    </>
  );
}

export default CreateBlogForm;
