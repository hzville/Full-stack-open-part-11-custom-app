import { MinMaxValue } from "../components/types";
const env = import.meta.env;

const generateRandomNumberApiUrl =
  env.VITE_BACKEND_API_URL || "/api/generate-random-number";

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
