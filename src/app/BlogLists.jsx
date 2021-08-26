import { Link } from "react-router-dom";

const BlogsList = ({ blogs, title, deleteBlog }) => {
  return (
    <div className="blogs-list">
      <h2 style={{ marginLeft: "15px" }}>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`} style={{ textDecoration: "none" }}>
            <h2>{blog.title}</h2>
            <p>
              Author : <i>{blog.author}</i>
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsList;
