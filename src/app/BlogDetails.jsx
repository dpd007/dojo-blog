import { useParams, useHistory } from "react-router-dom";
import UseFetch from "./UseFetch";
import { url as apiurl } from "./Home";
import { useContext } from "react";
import {
  StyledBlogPreviewTitle,
  StyledBlogDetails,
  StyledDeleteButton,
} from "./StyledComponents.style";
const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const url = useContext(apiurl);
  const { data: blog, error, isLoading } = UseFetch(url + "/" + id);

  const handleDelete = (id) => {
    fetch(url + "/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <StyledBlogDetails>
      {isLoading && <div>Data is loading..</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <StyledBlogPreviewTitle>{blog.title}</StyledBlogPreviewTitle>
          <p>Author : {blog.author}</p>
          <div>{blog.body}</div>
          <StyledDeleteButton onClick={() => handleDelete(blog.id)}>
            Delete
          </StyledDeleteButton>
        </article>
      )}
    </StyledBlogDetails>
  );
};

export default BlogDetails;
