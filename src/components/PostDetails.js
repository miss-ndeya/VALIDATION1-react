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
    <div className="blog-details ">
      <article>
        <h2 className="text-primary">{posts.title}</h2>
        <p>
          Id: {posts.id}, userId: {posts.userId}
        </p>
        <div>{posts.body}</div>
        <button className="btn btn-primary" onClick={handleClick}>
          Retour
        </button>
      </article>
    </div>
  );
};

export default PostDetails;
