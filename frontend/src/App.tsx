import InputMinMax from "./components/InputMinMax";
import RandomNumber from "./components/RandomNumber";
import { useState } from "react";
import { Box } from "@mui/material";

function App() {
  const [generatedNumber, setGeneratedNumber] = useState<number>();

  const styles = {
    box: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      gap: 2,
    },
  };

  return (
    <>
      <Box sx={styles.box}>
        <InputMinMax setGeneratedNumber={setGeneratedNumber} />
        <RandomNumber generatedNumber={generatedNumber} />
      </Box>
    </>
  );
}

export default App;
