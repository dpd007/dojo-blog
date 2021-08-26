const Home = () => {
  const handleClick = (e) => {
    console.log("Hello Dugu!!", e);
  };
  const handleClickAgain = (name) => {
    console.log("Hello " + name);
  };
  return (
    <div className="home">
      <h1>Home Page</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleClickAgain("gayatree")}>
        Click Me Again
      </button>
    </div>
  );
};

export default Home;
