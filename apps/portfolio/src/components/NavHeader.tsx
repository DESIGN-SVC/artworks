import { ArrowRight, CaretLeft } from "@phosphor-icons/react";
import { cx } from "cva";
import { ComponentPropsWithRef } from "react";
import { useNavigate } from "react-router-dom";

type RootProps = ComponentPropsWithRef<"nav">;
export const Root = ({ className, ...props }: RootProps) => (
  <nav className={cx(["flex flex-col gap-9", className])} {...props} />
);

interface BreadCrumbProps {
  crumbs: string[];
}

export const BreadCrumb = ({ crumbs }: BreadCrumbProps) => {
  const navigate = useNavigate();
  return (
    <ul
      className={cx("flex items-center gap-3.5 transition-all max-md:hidden")}
    >
      {crumbs?.map((el, index) => (
        <li key={el} className="flex items-center gap-1.5 text-sm">
          {index === 0 ? (
            <button
              onClick={() => {
                el === "Home" ? navigate("/") : navigate(-1);
              }}
              className={cx(["capitalize text-selago-300"])}
            >
              {el}
            </button>
          ) : index === crumbs.length - 1 ? (
            <p className="font-semibold text-selago-800">{el}</p>
          ) : (
            <button onClick={() => navigate(-index)} className="capitalize">
              {el}
            </button>
          )}
          {index !== crumbs.length - 1 && (
            <ArrowRight weight="bold" className="text-selago-300" />
          )}
        </li>
      ))}
    </ul>
  );
};

type TitleProps = ComponentPropsWithRef<"h2">;

export const Title = ({ className, ...props }: TitleProps) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-1.5 text-selago-950 dark:text-white"
    >
      <CaretLeft size={20} weight="bold" />
      <h2
        className={cx(["text-2xl font-bold ", "lg:text-3xl", className])}
        {...props}
      />
    </button>
  );
};
