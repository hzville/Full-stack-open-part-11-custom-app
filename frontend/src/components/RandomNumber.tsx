import AnimatedNumbers from "react-animated-numbers";

export interface GeneratedNumberProps {
  generatedNumber: number | undefined;
}

const styles = {
  generatedNumber: {
    fontSize: 40,
    color: "blue",
    fontFamily: "Arial, sans-serif",
  },
};

const RandomNumber = ({ generatedNumber }: GeneratedNumberProps) => {
  return (
    <>
      {generatedNumber && (
        <AnimatedNumbers
          includeComma
          transitions={(index) => ({
            type: "spring",
            duration: index + 0.3,
          })}
          animateToNumber={generatedNumber}
          fontStyle={styles.generatedNumber}
          data-testid="animated-number"
        />
      )}
    </>
  );
};

export default RandomNumber;
