export interface AttributeItemProps {
  icon: React.ReactNode;
  text: string;
  index?: number;
}

export const AttributeItem = ({icon, text}: AttributeItemProps) => {
  return (
    <p className="flex flex-row text-[0.625rem] bg-white rounded-[0.25rem] py-[0.3125rem] px-[0.75rem] gap-[0.375rem] w-fit">
      {icon}{text}
    </p>
  );

}
