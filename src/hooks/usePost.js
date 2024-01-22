import { useContext, useEffect } from "react";
import { PostContext } from "../contextes/PostContext";

export const usePost = (url) => {
  const PostContexte = useContext(PostContext);

  const { getPosts } = PostContexte;

  useEffect(() => {
    getPosts(url);
  }, [getPosts, url]);

  return PostContexte;
};
