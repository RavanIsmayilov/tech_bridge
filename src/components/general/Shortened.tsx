import React from "react";

type ShortText = {
  shortText: string;
};

const Shortened: React.FC<ShortText> = ({ shortText }) => {
  const shortTextSlice = shortText.slice(0, 130) + "...";

  return <span>{shortTextSlice}</span>;
};

export default Shortened;
