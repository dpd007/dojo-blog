import { useState, useEffect } from "react";
import BlogsList from "./BlogLists";
import UseFetch from "./UseFetch";
const Home = () => {
  // learning the handling event
  //   const handleClick = (e) => {
  //     console.log("Hello Dugu!!", e);
  //   };
  //   const handleClickAgain = (name) => {
  //     console.log("Hello " + name);
  //   };

  //learning the useState Hook
  //   const [name, setName] = useState("Dugu");
  //   const [age, setAge] = useState(24);

  //   const handleClick = () => {
  //     setName("Gitu");
  //     setAge(23);
  //   };

  //contents gone to useFetch
  // const apiUrl = "http://localhost:8080/blogs";
  const {
    data: blogs,
    isLoading,
    error,
  } = UseFetch("http://localhost:8080/blogs");
  //contents gone to useFetch

  //using JSON Server to fetch the data
  //END POINTS
  // /blogs - fetch all

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  //learning the useEffect Hook
  //using CUSTOM HOOK - useFetch

  return (
    <div className="home">
      {/* <h1>Home Page</h1> */}

      {/* learning the handling event */}
      {/* <button onClick={() => handleClickAgain("gayatree")}>
        Click Me Again
      </button> */}

      {/* learning the useState Hook */}
      {/* <p>
        {name} is {age} years old!!
      </p> */}
      {/* <button onClick={handleClick}>Click Me</button> */}
      {/* using props to send data to another component*/}
      {/* checking is there any error or not */}
      {error && <div>{error}</div>}
      {/* comparing with isLoading */}
      {isLoading && <div>Please wait..Data will be here.</div>}
      {blogs && (
        <BlogsList
          blogs={blogs}
          title={"All Blogs are here."}
          // deleteBlog={handleDelete}
        />
      )}

      {/* using the filter() to filter out the particular data */}
      {/* <BlogsList
        blogs={blogs.filter((blog) => blog.author === "Dugu")}
        title={"Dugu's Blogs"}
      /> */}
    </div>
  );
};

export default Home;
