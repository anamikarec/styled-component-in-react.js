import "./styles.css";
import styled from "styled-components";
const Container = styled.div`
  border: 1px solid black;
  text-align: center;
  padding: 20px;
  color: blue;
  background: yellowgreen;
`;
export default function App() {
  return (
    <div className="App">
      <h1>React styled components demo</h1>
      <Container>Hi! I am Anamika</Container>
    </div>
  );
}
