import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosService from "../Utils/AxiosService";
import ApiRoutes from "../Utils/ApiRoutes";
import { useFormik } from "formik";
import axios from "axios";
import { BlogContext } from "../Context/BlogProvider";
import { useContext } from "react";

function EditBlogForm() {
  const { id } = useParams();
  let navigate = useNavigate();
  //   const [editItem, setEditItem] = useState({});
  const { allBlogs, setAllBlogs } = useContext(BlogContext);

  const { handleSubmit, setValues, values, handleChange } = useFormik({
    initialValues: {
      Title: "",
      Description: "",
      Location: "",
      Author: "",
      Image_URL: "",
    },
    validate: (values) => {
      console.log(values);
      if (values.Title === "") {
        return { title: "Title is required" };
      }
      if (values.Description === "") {
        return { content: "Content is required" };
      }
    },
    onSubmit: async (values) => {
      try {
        console.log(id);

        // let res = await axios.put(
        //   `http://localhost:5000/blogs/editBlog/${id}`,
        //   values
        // );

        let res = await axiosService.put(`/blogs/editBlog/${id}`, values);
        if (res.status == 200) {
          setAllBlogs(() => [...allBlogs.filter((e) => e.id !== id), values]);
          navigate("/home");
          console.log(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  async function getEditData(id) {
    try {
      const result = await axiosService.get(ApiRoutes.getBlogs.path);

      let data = result.data.result;
      let editItem = data.find((el) => el.id == id);

      // setEditItem(() => data.find((el) => el.id == id));
      setValues({
        Title: editItem.Title,
        Description: editItem.Description,
        Location: editItem.Location,
        Image_URL: editItem.Image_URL,
        Author: editItem.Author,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getEditData(id);
  }, []);
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
                value={values.Title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                name="Description"
                value={values.Description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter location"
                name="Location"
                value={values.Location}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="Image_URL"
                value={values.Image_URL}
                onChange={handleChange}
              >
                <option value={"/img-1.jpg"}>image1</option>
                <option value={"/img-2.jpg"}>image2</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" name="Author" value={values.Author} />
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

export default EditBlogForm;
