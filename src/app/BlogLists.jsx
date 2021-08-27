import { Link } from "react-router-dom";
import { BlogPreview, BlogPreviewTitle } from "./StyledComponents.style";
const BlogsList = ({ blogs, title, deleteBlog }) => {
  return (
    <div className="blogs-list">
      <h2 style={{ marginLeft: "15px" }}>{title}</h2>
      {blogs.map((blog) => (
        <BlogPreview key={blog.id}>
          <Link to={`/blogs/${blog.id}`} style={{ textDecoration: "none" }}>
            <BlogPreviewTitle>{blog.title}</BlogPreviewTitle>
            <p>
              Author : <i>{blog.author}</i>
            </p>
          </Link>
        </BlogPreview>
      ))}
    </div>
  );
};

export default BlogsList;
