import { cx } from "cva";
import { Check } from "../icons";

interface AtributteProps {
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
      "bg-cool-gray-50 rounded-[0.3125rem]",
      "w-fit h-fit gap-[0.3125rem] py-[0.5625rem] px-[0.8125rem]"
    ])}
    key={props.index}
  >

    <h4 className="text-xs font-bold">
      {title}
    </h4>
    <div className="flex flex-row gap-1.5">
      {
        item.map((item, index) => (
          <div
            className={cx([
              "flex flex-row items-center",
              "bg-white rounded",
              "py-[0.3125rem] px-3 gap-1.5 w-fit",
            ])}
            key={index}
          >
            <Check />
            <h6 className="text-[0.625rem]">{item.text}</h6>
          </div>
        ))
      }
    </div>
  </div >
);


