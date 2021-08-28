import BlogsList from "./BlogLists";
// import Test1 from "./Test1.jsx";
import UseFetch from "./UseFetch";
// import { createContext, useState } from "react";
import { createContext } from "react";
// import Test2 from "./Test2";
// import Test3 from "./Test3";
// const FirstName = createContext("Gayatree");
// const LastName = createContext("Dutta");
const apiUrl = "http://localhost:8080/blogs";
const url = createContext(apiUrl);
const Home = () => {
  const { data: blogs, isLoading, error } = UseFetch(apiUrl);

  // const [name, setName] = useState("Durga");
  // const [message, setMessage] = useState(null);

  // const Test2CallbackFunction = (Test2Data) => {
  //   setMessage(Test2Data);
  // };

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Please wait..Data will be here.</div>}
      {blogs && <BlogsList blogs={blogs} title={"All Blogs are here."} />}

      {/* <Test1 nameData={name} />
      <Test2 parentCallback={Test2CallbackFunction} />
      <p>{message}</p>
      <Test3 /> */}
    </div>
  );
};

// export { FirstName, LastName };
export default Home;
export { url };
