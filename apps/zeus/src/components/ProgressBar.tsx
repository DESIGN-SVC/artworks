import * as Progress from "@radix-ui/react-progress";

interface ProgressBarProps {
  marker: number;
}

export const ProgressBar = ({ marker }: ProgressBarProps) => {
  return (
    <Progress.Root
      className="relative overflow-hidden bg-gray-200 rounded-full w-full h-full cursor-pointer"
      value={marker}
    >
      <Progress.Indicator
        className="bg-blue-400 w-full h-full"
        style={{
          transition: "transform 300ms cubic-bezier(0.65, 0, 0.35, 1)",
          transform: `translateX(-${100 - marker}%)`,
        }}
      />
    </Progress.Root>
  );
};
