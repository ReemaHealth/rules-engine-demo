import { ChangeEvent, KeyboardEvent, useState } from "react";
import styled from "styled-components";

import TextField from "@mui/material/TextField";
import PaletteIcon from "@mui/icons-material/Palette";

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

interface EngineInputProps {
  calculateColor: (name: string) => void;
}

const EngineInput = ({ calculateColor }: EngineInputProps) => {
  const [name, setName] = useState("");

  function handleChange(event: ChangeEvent) {
    const input = (event.currentTarget as HTMLInputElement).value;
    setName(input);
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      calculateColor(name);
    }
  }

  return (
    <InputRow>
      <PaletteIcon
        color="primary"
        sx={{ marginRight: "20px", fontSize: "36px" }}
      />
      <TextField
        id="filled-basic"
        label="Name"
        variant="outlined"
        value={name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </InputRow>
  );
};

export default EngineInput;
