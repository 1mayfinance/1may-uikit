import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  // const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 174 32" {...props}>
      <image
        href="data:image/png;base64,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"
        width="174"
      ></image>
    </Svg>
  );
};

export default Logo;
