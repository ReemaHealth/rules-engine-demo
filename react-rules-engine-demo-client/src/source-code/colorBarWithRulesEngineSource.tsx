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
        {`function calculateColor(name: string): string {
    return new ColorEngine([
      new IncludesWhiteSpaceRule(),
      new IncludesSpecialRule(),
      new ParityRule(),
      new VowelConsonantDisparityRule(),
      new IsPositiveRule(),
    ]).calculateColor(name);
  }`}
        ;
      </code>
    </PreSourceCodeDisplay>
  );
};

export default ColorBarSource;
