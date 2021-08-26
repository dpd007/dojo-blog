import { useState } from "react";
import BlogsList from "./BlogLists";
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

  //Outputting the Lists
  const [blogs, setblogs] = useState([
    { id: 1, title: "My new website", body: "lorem ipsum...", author: "Dugu" },
    {
      id: 2,
      title: "Welcome to React",
      body: "lorem ipsum...",
      author: "Gitu",
    },
    { id: 3, title: "Learning React", body: "lorem ipsum...", author: "Dev" },
  ]);

  const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setblogs(newBlogs);
  };
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
      <BlogsList blogs={blogs} title={"All Blogs are here."} deleteBlog={handleDelete}/>

      {/* using the filter() to filter out the particular data */}
      {/* <BlogsList
        blogs={blogs.filter((blog) => blog.author === "Dugu")}
        title={"Dugu's Blogs"}
      /> */}
    </div>
  );
};

export default Home;
