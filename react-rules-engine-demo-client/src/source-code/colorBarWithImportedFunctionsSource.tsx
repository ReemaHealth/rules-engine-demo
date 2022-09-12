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
        {`const ColorBarWithImportedFunctions = () => {
  function calculateColor(name: string): string {
    const arr = name.split("");

    let baseColor = 0x000000;

    baseColor += calculateIncludesWhiteSpace(arr);
    baseColor += calculateIncludesSpecial(arr);
    baseColor += calculateParity(arr);
    baseColor += calculateVowelConsonantDisparity(arr);
    baseColor = calculateIsPositive(baseColor);

    return toHexColorString(baseColor);
  }`}
        ;
      </code>
    </PreSourceCodeDisplay>
  );
};

export default ColorBarSource;
