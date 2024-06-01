import React, { useContext } from "react";
import Card from "./Card";
import { BlogContext } from "../Context/BlogProvider";

function DisplayBox({ title, description, author, url, location, id }) {
  return (
    <div
      className="col-lg-4"
      style={{ marginTop: "5px", marginBottom: "5px", width: "30%" }}
    >
      <Card
        title={title}
        description={description}
        author={author}
        url={url}
        location={location}
        id={id}
      />
    </div>
  );
}

export default DisplayBox;
