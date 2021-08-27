import { Link } from "react-router-dom";
import {
  StyledNavbar,
  StyledTitle,
  StyledLinks,
} from "./StyledComponents.style";
const Navbar = ({ className }) => {
  return (
    <StyledNavbar>
      <StyledTitle>the dojo blog</StyledTitle>
      <StyledLinks>
        <Link to="/">home</Link>
        <Link to="/create">New blog</Link>
      </StyledLinks>
    </StyledNavbar>
  );
};

export default Navbar;
