import { AttributeItem, AttributeItemProps } from "./AttributeItem";

interface AtributteProps {
  title: string;
  item: AttributeItemProps[];
  index?: number;
}

export const Attribute = ({ title, item, ...props }: AtributteProps) => (

  <div className='inline-flex flex-col bg-cool-gray-50 w-fit gap-[0.3125rem] rounded-[0.3125rem] py-[0.5625rem] px-[0.8125rem] min-w-[100px]' key={props.index}>
    <h4 className="text-[0.75rem] font-bold">
      {title}
    </h4>
    <div className="flex flex-row gap-[0.375rem]">
      {
        item.map((item, index) => (
          <AttributeItem {...item} index={index} />
        ))
      }
    </div>
  </div >
);  