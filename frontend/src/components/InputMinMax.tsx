import { useState } from "react";
import { MinMaxValue } from "./types";
import getRandomNumber from "../services/randomNumberGeneratorService";
import {
  OutlinedInput,
  InputAdornment,
  Button,
  Typography,
} from "@mui/material";

interface InputMinMaxProps {
  setGeneratedNumber: (value: number) => void;
}

const styles = {
  header: {
    color: "blue",
    fontSize: 25,
    fontFamily: "Arial, sans-serif",
  },
};

const InputMinMax = ({ setGeneratedNumber }: InputMinMaxProps) => {
  const [minValue, setMinValue] = useState<MinMaxValue>();
  const [maxValue, setMaxValue] = useState<MinMaxValue>();

  const generateRandomNumber = async () => {
    if (minValue && maxValue) {
      const result = await getRandomNumber(minValue, maxValue);
      setGeneratedNumber(result);
    }
  };

  return (
    <>
      <Typography sx={styles.header} data-testid="header">
        Enter min and max to generate a random number
      </Typography>
      <OutlinedInput
        type="number"
        startAdornment={<InputAdornment position="start">min</InputAdornment>}
        onChange={({ target }) => setMinValue(target.value)}
        data-testid="min-input"
      />
      <OutlinedInput
        type="number"
        startAdornment={<InputAdornment position="start">max</InputAdornment>}
        onChange={({ target }) => setMaxValue(target.value)}
        data-testid="max-input"
      />
      <Button
        onClick={() => generateRandomNumber()}
        variant="outlined"
        disabled={!minValue || !maxValue}
        data-testid="generate-button"
      >
        Generate
      </Button>
    </>
  );
};

export default InputMinMax;
