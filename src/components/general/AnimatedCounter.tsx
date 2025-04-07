import { useEffect, useState } from "react";
import NumberFlow, { continuous } from "@number-flow/react";

const AnimatedCounter = ({ color }: { color: string }) => {
  const [value, setValue] = useState(0);
  const target = 250;

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 5;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setValue(current);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const format = {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  } satisfies Intl.NumberFormatOptions;

  return (
    <NumberFlow
      willChange
      plugins={[continuous]}
      value={value}
      locales="en-US"
      format={format}
      className={`bg-${color} text-white font-bold text-[20px] py-3 px-3 rounded-full`}
    />
  );
};

export default AnimatedCounter;
