import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePost } from "../hooks/usePost";

const PostDetails = () => {
  const { id } = useParams();
  const { posts } = usePost(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="container  pt-3">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h3 className="text text-center fs-1 mb-5">Details post</h3>
          <h5 className="text-primary my-4 ">{posts.title}</h5>
          <p>{posts.body}</p>
          <p>Id: {posts.id} </p>
          <p>userId: {posts.userId}</p>
          <button className="btn btn-primary mt-3" onClick={handleClick}>
            Retour
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
