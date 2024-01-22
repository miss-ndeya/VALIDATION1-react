import React from "react";
import { usePost } from "../hooks/usePost";
import { Link } from "react-router-dom";

const Home = () => {
  const { posts } = usePost("https://jsonplaceholder.typicode.com/posts/");

  return (
    <div className="container pt-4">
      <h1 className="text-primary mb-4 ">Mes Posts</h1>
      <div className="row">
        {posts.length > 0
          ? posts.map((post) => (
              <div className="col-md-4 mx-auto mb-4" key={post.id}>
                <div className="card border-0 ">
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <Link to={`/post/${post.id}`} className="btn btn-primary">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          : "aucun Post"}
      </div>
    </div>
  );
};

export default Home;
