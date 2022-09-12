import { useState } from "react";

import ColorBar from "./components/rules-engine/colorBar";
import ColorBarWithFunctions from "./components/rules-engine/colorBarWithFunctions";
import ColorBarWithImportedFunctions from "./components/rules-engine/colorBarWithImportedFunctions";
import ColorBarWithRulesEngine from "./components/rules-engine/colorBarWithRulesEngine";
import ColorBarViaApiRulesEngine from "./components/rules-engine/colorBarViaApiRulesEngine";

import ColorBarSource from "./source-code/colorBarSource";

import ColorDisplay from "./components/styled/colorDisplay";
import ColorPalette from "./components/styled/colorPalette";
import ColorBarWithFunctionsSource from "./source-code/colorBarWithFunctionsSource";
import ColorBarWithImportedFunctionsSource from "./source-code/colorBarWithImportedFunctionsSource";
import ColorBarWithRulesEngineSource from "./source-code/colorBarWithRulesEngineSource";
import ColorBarViaApiRulesEngineSource from "./source-code/colorBarViaApiRulesEngineSource";

function App() {
  const [selectedColorBar, setSelectedColorBar] = useState(0);

  return (
    <>
      <ColorDisplay>
        <ColorPalette>
          <div
            style={{
              border: selectedColorBar === 0 ? "2px solid #1976d2" : "",
              borderRadius: "25px",
            }}
            onClick={() => setSelectedColorBar(0)}
          >
            <ColorBar />
          </div>
          <div
            style={{
              border: selectedColorBar === 1 ? "2px solid #1976d2" : "",
              borderRadius: "25px",
            }}
            onClick={() => setSelectedColorBar(1)}
          >
            <ColorBarWithFunctions />
          </div>
          <div
            style={{
              border: selectedColorBar === 2 ? "2px solid #1976d2" : "",
              borderRadius: "25px",
            }}
            onClick={() => setSelectedColorBar(2)}
          >
            <ColorBarWithImportedFunctions />
          </div>
          <div
            style={{
              border: selectedColorBar === 3 ? "2px solid #1976d2" : "",
              borderRadius: "25px",
            }}
            onClick={() => setSelectedColorBar(3)}
          >
            <ColorBarWithRulesEngine />
          </div>
          <div
            style={{
              border: selectedColorBar === 4 ? "2px solid #1976d2" : "",
              borderRadius: "25px",
            }}
            onClick={() => setSelectedColorBar(4)}
          >
            <ColorBarViaApiRulesEngine />
          </div>
        </ColorPalette>
        {selectedColorBar === 0 && <ColorBarSource />}
        {selectedColorBar === 1 && <ColorBarWithFunctionsSource />}
        {selectedColorBar === 2 && <ColorBarWithImportedFunctionsSource />}
        {selectedColorBar === 3 && <ColorBarWithRulesEngineSource />}
        {selectedColorBar === 4 && <ColorBarViaApiRulesEngineSource />}
      </ColorDisplay>
    </>
  );
}

export default App;
