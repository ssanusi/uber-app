import React from "react";

interface Props {
  src: any;
}

const Icon: React.FC<Props> = ({ src }) => {
  return (
    <div>
      <img src={src} alt="" />
    </div>
  );
};

export default Icon;
