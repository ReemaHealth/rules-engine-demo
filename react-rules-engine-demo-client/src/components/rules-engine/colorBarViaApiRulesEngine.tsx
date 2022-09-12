import { useState } from "react";
import axios from "axios";
import ColorBarColumn from "../styled/colorBarColumn";
import EngineInput from "./engineInput";

const ColorBarWithRulesEngine = () => {
  const [color, setColor] = useState("#000000");

  async function calculateColor(name: string) {
    await axios
      .post("http://localhost:3000/rules-engine/color", {
        name: name,
      })
      .then((resp) => setColor(resp.data));
  }

  return (
    <ColorBarColumn>
      <>
        Color Bar - Via API Rules Engine
        <div
          style={{
            height: "50px",
            width: "225px",
            backgroundColor: `${color}`,
            borderRadius: "5px",
          }}
        ></div>
        {color}
        <EngineInput calculateColor={calculateColor} />
      </>
    </ColorBarColumn>
  );
};

export default ColorBarWithRulesEngine;
