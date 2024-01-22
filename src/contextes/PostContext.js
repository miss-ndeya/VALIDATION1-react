import { createContext, useState } from "react";

export const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPosts(data);
    } catch (error) {}
  };

  return (
    <PostContext.Provider value={{ posts, getPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
