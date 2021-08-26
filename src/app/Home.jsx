import { useState } from "react";
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
      {id:1, title: 'My new website', body: 'lorem ipsum...', author: 'Dugu'},
      {id:2, title: 'Welcome to React', body: 'lorem ipsum...', author: 'Gitu'},
      {id:3, title: 'Learning React', body: 'lorem ipsum...', author: 'Dev'}
  ]);
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

      {/* Outputting the Lists using map() */}
      {blogs.map(blog => (
          <div className="blog-preview" key={blog.id}>
              <h2>{blog.title}</h2>
              <p>{blog.body}</p>
              <p>Author : <i>{blog.author}</i></p>
          </div>
      ))}
    </div>
  );
};

export default Home;
