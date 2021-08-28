import { useState } from "react";
import {
  StyledCreate,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  StyledSelect,
  StyledCreateButton,
} from "./StyledComponents.style";
const Create = () => {
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const [author, setAuthor] = useState("mario");
  return (
    <StyledCreate>
      <h2>Add a new blog.</h2>
      <form>
        <StyledLabel>Blog Title</StyledLabel>
        <StyledInput
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <StyledLabel>Blog Body</StyledLabel>
        <StyledTextArea
          value={body}
          onChange={(event) => setBody(event.target.value)}
          required
        ></StyledTextArea>
        <StyledLabel>Blog Auhtor</StyledLabel>
        <StyledSelect
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        >
          <option value="mario">Mario</option>
          <option value="dev">Dev</option>
          <option value="dugu">Dugu</option>
        </StyledSelect>
        <StyledCreateButton>Add Blog</StyledCreateButton>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </StyledCreate>
  );
};

export default Create;
