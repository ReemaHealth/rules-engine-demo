import styled from "styled-components";

const PreSourceCodeDisplay = styled.pre`
  flex: 1 1 auto;
  margin: 25px auto;
  font-size: 14px;
`;

const ColorBarSource = () => {
  return (
    <PreSourceCodeDisplay>
      <code lang="tsx">
        {`async function calculateColor(name: string) {
    await axios
      .post("http://localhost:3000/rules-engine/color", {
        name: name,
      })
      .then((resp) => setColor(resp.data));
  }`}
        ;
      </code>
    </PreSourceCodeDisplay>
  );
};

export default ColorBarSource;
