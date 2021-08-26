const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>the dojo blog</h1>
      <div className="links">
        <a href="/">home</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
