import { ArrowRight } from "@phosphor-icons/react";
import { cx } from "cva";
import { useNavigate } from "react-router-dom";

export const BreadCrumb = ({ crumbs }: { crumbs: string[] }) => {
  const navigate = useNavigate();
  return (
    <ul
      className={cx("flex items-center gap-8 transition-colors max-lg:hidden")}
    >
      {crumbs?.map((el, index) => (
        <li key={el} className="flex items-center gap-8 text-gray-500">
          {index === 0 ? (
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              {el}
            </button>
          ) : index === crumbs.length - 1 ? (
            <p className="font-semibold text-gray-700">{el}</p>
          ) : (
            <button onClick={() => navigate("/")}>{el}</button>
          )}
          {index !== crumbs.length - 1 && (
            <span className="mb-2 block text-gray-500">
              <ArrowRight className="h-20 w-20" />
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};
