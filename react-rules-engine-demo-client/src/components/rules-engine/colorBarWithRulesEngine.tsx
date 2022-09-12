import React from "react";
import ColorBarColumn from "../styled/colorBarColumn";

import ColorEngine from "../../rules-engine/engines/colorEngine";
import {
  IncludesSpecialRule,
  IncludesWhiteSpaceRule,
  IsPositiveRule,
  ParityRule,
  VowelConsonantDisparityRule,
} from "../../rules-engine/rules";

const ColorBarWithRulesEngine = () => {
  function calculateColor(name: string): string {
    return new ColorEngine([
      new IncludesWhiteSpaceRule(),
      new IncludesSpecialRule(),
      new ParityRule(),
      new VowelConsonantDisparityRule(),
      new IsPositiveRule(),
    ]).calculateColor(name);
  }

  return (
    <React.Fragment>
      <ColorBarColumn>
        Color Bar - With Rules Engine
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

export default ColorBarWithRulesEngine;
