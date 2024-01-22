import React from "react";
import { usePost } from "../hooks/usePost";
import PostListe from "./PostList";

const Home = () => {
  const { posts } = usePost("https://jsonplaceholder.typicode.com/posts/");

  return (
    <div className="home">
      {posts.length > 0 ? (
        <PostListe posts={posts} />
      ) : (
        "Aucun Post pour le moment"
      )}
    </div>
  );
};

export default Home;
