import { Link } from "react-router-dom";
import { StyledBlogPreview, StyledBlogPreviewTitle } from "./StyledComponents.style";
const BlogsList = ({ blogs, title, deleteBlog }) => {
  return (
    <div className="blogs-list">
      <h2 style={{ marginLeft: "15px" }}>{title}</h2>
      {blogs.map((blog) => (
        <StyledBlogPreview key={blog.id}>
          <Link to={`/blogs/${blog.id}`} style={{ textDecoration: "none" }}>
            <StyledBlogPreviewTitle>{blog.title}</StyledBlogPreviewTitle>
            <p>
              Author : <i>{blog.author}</i>
            </p>
          </Link>
        </StyledBlogPreview>
      ))}
    </div>
  );
};

export default BlogsList;
