import { ComponentPropsWithRef } from "react";
import atlasLogo from "../assets/atlas-logo.png";

export const AtlasLogo = ({ ...props }: ComponentPropsWithRef<"img">) => {
  return (
    <img
      src={atlasLogo}
      alt="Logo Atlas"
      {...props}
    />
  );
};
export default AtlasLogo;
