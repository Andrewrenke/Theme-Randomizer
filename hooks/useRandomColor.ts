import { generateRandomColor } from "@/helpers/color";
import { useState } from "react";

const useRandomColor = (initial: string) => {
  const [color, setColor] = useState(initial);

  const regenerateColor = () => {
    const randomColor = generateRandomColor();
    setColor(randomColor);
  };

  return {
    color,
    regenerateColor,
  };
};

export default useRandomColor;
