import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  StyledCreate,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  StyledSelect,
  StyledCreateButton,
} from "./StyledComponents.style";
import { url } from "./Home";
const Create = () => {
  const apiUrl = useContext(url);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");

  const [isAddPending, setAddIsPending] = useState(false);

  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    const blog = {
      title,
      body,
      author,
    };
    setAddIsPending(true);
    fetch(apiUrl, {
      //add type of request
      method: "POST",
      //headers
      headers: { "Content-Type": "application/json" },
      //add data
      body: JSON.stringify(blog),
    }).then(() => {
      //   setTitle("");
      //   setBody("");
      //   setAuthor("");
      console.log("blog added");
      setAddIsPending(false);
      //it goes back to previous page by one
      //   history.go(-1);

      //redirects to home page
      history.push('/');
    });
  };
  return (
    <StyledCreate>
      <h2>Add a new blog.</h2>
      <form onSubmit={handleSubmit}>
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
        {!isAddPending && <StyledCreateButton>Add Blog</StyledCreateButton>}
        {isAddPending && (
          <StyledCreateButton disabled>Saving..</StyledCreateButton>
        )}
      </form>
    </StyledCreate>
  );
};

export default Create;
