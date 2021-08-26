const BlogsList = ({ blogs, title }) => {
  //using props
  return (
    /* Outputting the Lists using map() */
    <div className="blogs-list">
      <h2 style={{ marginLeft: "15px" }}>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <p>
            Author : <i>{blog.author}</i>
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogsList;
