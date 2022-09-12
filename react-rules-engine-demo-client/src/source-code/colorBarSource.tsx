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
    const arr = name.split("");
    const special = "~!@#$%^&*_-+=\`|(){}[]:;\\"'<>,.?/";
    const consonants = "bcdfghjklmnpqrstvwxyz";
    const vowels = "aeiou";

    let baseColor = 0x000000;

    if (arr.includes(" ")) {
      if (arr.filter((a) => a === " ").length > 1) {
        baseColor += 0x900000;
      } else {
        baseColor += 0x600000;
      }
    }

    if (arr.some((a) => special.includes(a))) {
      if (arr.filter((a) => special.includes(a)).length > 1) {
        baseColor += 0x000009;
      } else {
        baseColor += 0x000006;
      }
    }

    if (arr.length % 2 === 0) {
      baseColor += 0x444444;
    } else {
      baseColor -= 0x111111;
    }

    const consonantCount = arr.filter((a) => consonants.includes(a)).length;
    const vowelCount = arr.filter((a) => vowels.includes(a)).length;

    if (consonantCount > vowelCount) {
      baseColor += 0x00cc00;
    } else if (consonantCount < vowelCount) {
      baseColor += 0x0000cc;
    } else {
      baseColor += 0xcc0000;
    }

    if (baseColor < 0x000000) baseColor = 0x000000;

    return (
      "#" + baseColor.toString(16).toUpperCase().slice(0, 6).padStart(6, "0")
    );
  }
        `}
        ;
      </code>
    </PreSourceCodeDisplay>
  );
};

export default ColorBarSource;
