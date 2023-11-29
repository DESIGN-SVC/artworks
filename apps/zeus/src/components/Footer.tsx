import { cx } from "cva";
import { ConcentrixWebhelpLogo } from "../icons";

export const Footer = () => {
  return (
    <footer
      className={cx([
        "flex flex-col items-center",
        "bg-blue-500 p-[1.875rem] gap-[1.875rem]",
        "md:flex-row md:py-[3.125rem] md:justify-between",
        "xl:px-[5.625rem]",
      ])}
    >
      <ConcentrixWebhelpLogo />
      <h5 className="font-montserrat text-center text-white text-sm leading-tight">
        © 2023. Todos os direitos reservados à Concentrix+Webhelp.
      </h5>
    </footer>
  );
};
