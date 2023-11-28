import { cx } from "cva";
import { CheckCircle } from "phosphor-react";

export interface AttributeProps {
  title: string;
  item: {
    text: string;
  }[];
}

export const Attribute = ({ title, item, ...props }: AttributeProps) => (
  <li
    className={cx([
      "flex flex-row align-left gap-2.5",
      "inline-flex flex-col",
      "bg-cool-gray-100 rounded-[0.3125rem]",
      "w-fit h-fit gap-[0.3125rem] py-[0.5625rem] px-[0.8125rem]",
    ])}
    {...props}
  >
    <h4 className="text-xs font-semibold text-cool-gray-800">{title}</h4>
    <h5 className="flex flex-wrap justify-left gap-1.5">
      {item.map(({text}) => (
        <div
          className={cx([
            "flex flex-row items-center",
            "bg-white rounded ",
            "p-2.5 gap-1.5 w-fit",
          ])}
        >
          <CheckCircle size={12} color="#323E48" weight="bold" />
          <p className="text-xs text-cool-gray-900">{text}</p>
        </div>
      ))}
    </h5>
  </li>
);
