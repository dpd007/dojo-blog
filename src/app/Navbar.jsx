const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>dojo blog</h1>
      <div className="links">
        <a href="/">home</a>
        {/* implementing the inline style */}
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
        {/* implementing the inline style */}
      </div>
    </nav>
  );
};

export default Navbar;
