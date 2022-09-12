import React from "react";
import ColorBarColumn from "../styled/colorBarColumn";

import {
  calculateIncludesSpecial,
  calculateIncludesWhiteSpace,
  calculateIsPositive,
  calculateParity,
  calculateVowelConsonantDisparity,
} from "../../utils/calculateFns";
import toHexColorString from "../../utils/toHexColorString";

const ColorBarWithImportedFunctions = () => {
  function calculateColor(name: string): string {
    const arr = name.split("");

    let baseColor = 0x000000;

    baseColor += calculateIncludesWhiteSpace(arr);
    baseColor += calculateIncludesSpecial(arr);
    baseColor += calculateParity(arr);
    baseColor += calculateVowelConsonantDisparity(arr);
    baseColor = calculateIsPositive(baseColor);

    return toHexColorString(baseColor);
  }

  return (
    <React.Fragment>
      <ColorBarColumn>
        Color Bar - With Imported Functions
        <div
          style={{
            height: "50px",
            width: "225px",
            backgroundColor: `${calculateColor("Shawn Karber")}`,
            borderRadius: "5px",
          }}
        ></div>
        {calculateColor("Shawn Karber")}
      </ColorBarColumn>
    </React.Fragment>
  );
};

export default ColorBarWithImportedFunctions;
