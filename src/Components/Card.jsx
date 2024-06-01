import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Card({ url, title, description, location, author, id }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="card card-background">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h6>
            <strong>{author} </strong>posted this....
          </h6>
          <i>{`🌍 ${location}`}</i>
        </div>

        <img
          src={url}
          className="card-img-top img-fluid"
          style={{ height: "300px" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text" style={{ overflow: "hidden" }}>
            {description}
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
            <Link
              to={`/blogModelPage/${id}`}
              className="btn btn-success"
              onClick={window.scrollTo(0, 0)}
            >
              view
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
