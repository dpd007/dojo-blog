import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";
import { url as apiurl } from "./Home";
import { useContext } from "react";
import {
  StyledBlogPreviewTitle,
  StyledBlogDetails,
} from "./StyledComponents.style";
const BlogDetails = () => {
  const { id } = useParams();
  const url = useContext(apiurl);
  const { data: blogs, error, isLoading } = UseFetch(url + "/" + id);
  return (
    <StyledBlogDetails>
      {isLoading && <div>Data is loading..</div>}
      {error && <div>{error}</div>}
      {blogs && (
        <article>
          <StyledBlogPreviewTitle>{blogs.title}</StyledBlogPreviewTitle>
          <p>Author : {blogs.author}</p>
          <div>{blogs.body}</div>
        </article>
      )}
    </StyledBlogDetails>
  );
};

export default BlogDetails;
