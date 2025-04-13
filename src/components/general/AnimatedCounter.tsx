import NumberFlow, { continuous } from "@number-flow/react";

interface countType {
  count: number;
}

const AnimatedCounter: React.FC<countType> = ({ count }) => {
  const format = {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  } satisfies Intl.NumberFormatOptions;

  return (
    <NumberFlow
      willChange
      plugins={[continuous]}
      value={count}
      locales="en-US"
      format={format}
    />
  );
};

export default AnimatedCounter;
