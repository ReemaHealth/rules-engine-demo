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
        {`function toHexColorString(hex: number) {
  return "#" + hex.toString(16).toUpperCase().slice(0, 6).padStart(6, "0");
}

function calculateIncludesWhiteSpace(name: string[]): number {
  if (name.includes(" ")) {
    if (name.filter((a) => a === " ").length > 1) {
      return 0x900000;
    } else {
      return 0x600000;
    }
  }
  return 0x000000;
}

function calculateIncludesSpecial(name: string[]): number {
  const special = "~!@#$%^&*_-+=\`|(){}[]:;\"'<>,.?/";

  if (name.some((a) => special.includes(a))) {
    if (name.filter((a) => special.includes(a)).length > 1) {
      return 0x000009;
    } else {
      return 0x000006;
    }
  }
  return 0x000000;
}

function calculateParity(name: string[]): number {
  if (name.length % 2 === 0) {
    return 0x444444;
  } else {
    return -0x111111;
  }
}

function calculateVowelConsonantDisparity(name: string[]): number {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  const vowels = "aeiou";

  const consonantCount = name.filter((a) => consonants.includes(a)).length;
  const vowelCount = name.filter((a) => vowels.includes(a)).length;

  if (consonantCount > vowelCount) {
    return 0x00cc00;
  } else if (consonantCount < vowelCount) {
    return 0x0000cc;
  } else {
    return 0xcc0000;
  }
}

function calculateIsPositive(baseColor: number): number {
  if (baseColor < 0x000000) return 0x000000;
  return baseColor;
}

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
