import { cx } from "cva";
import { Check } from "../icons";

export interface AtributteProps {
  title: string;
  item: AttributeItemProps[];
  index?: number;
}

interface AttributeItemProps {
  text: string;
  index?: number;
}

export const Attribute = ({ title, item, ...props }: AtributteProps) => (
  <div
    className={cx([
      "inline-flex flex-col",
      "bg-cool-gray-100 rounded-[0.3125rem]",
      "w-fit h-fit gap-[0.3125rem] py-[0.5625rem] px-[0.8125rem]",
    ])}
    key={props.index}
  >
    <h4 className="text-xs font-semibold text-cool-gray-800">{title}</h4>
    <div className="flex flex-wrap justify-left gap-1.5">
      {item.map((item, index) => (
        <div
          className={cx([
            "flex flex-row items-center",
            "bg-white rounded ",
            "p-2.5 gap-1.5 w-fit",
          ])}
          key={index}
        >
          <Check />
          <h6 className="text-xs text-cool-gray-900">{item.text}</h6>
        </div>
      ))}
    </div>
  </div>
);
