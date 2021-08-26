import { useState, useEffect } from "react";
import BlogsList from "./BlogLists";
import UseFetch from "./UseFetch";
const Home = () => {
  // const apiUrl = "http://localhost:8080/blogs";
  const {
    data: blogs,
    isLoading,
    error,
  } = UseFetch("http://localhost:8080/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Please wait..Data will be here.</div>}
      {blogs && <BlogsList blogs={blogs} title={"All Blogs are here."} />}
    </div>
  );
};

export default Home;
