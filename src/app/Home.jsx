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
  const [name, setName] = useState("Dugu");
  const [age, setAge] = useState(24);

  const handleClick = () => {
    setName("Gitu");
    setAge(23);
  };
  return (
    <div className="home">
      <h1>Home Page</h1>

      {/* learning the handling event */}
      {/* <button onClick={() => handleClickAgain("gayatree")}>
        Click Me Again
      </button> */}

      {/* learning the useState Hook */}
      <p>
        {name} is {age} years old!!
      </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
