import { Link } from "react-router-dom";

const PostListe = ({ posts }) => {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <div className="blog-preview" key={post.id}>
          <Link to={`/post/${post.id}`}>
            <h2 className="card-title">{post.title}</h2>
            <p>
              Id: {post.id} userId: {post.userId}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostListe;
