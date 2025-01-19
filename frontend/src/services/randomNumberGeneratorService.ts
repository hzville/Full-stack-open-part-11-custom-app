import { MinMaxValue } from "../components/types";

const generateRandomNumberApiUrl = "/api/generate-random-number";

const getRandomNumber = async (
  minValue: MinMaxValue,
  maxValue: MinMaxValue
) => {
  const result = await fetch(generateRandomNumberApiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ min: minValue, max: maxValue }),
  });
  const { randomNumber } = await result.json();
  return randomNumber;
};

export default getRandomNumber;
