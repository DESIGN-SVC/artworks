import * as Slider from "@radix-ui/react-slider";

interface ProgressBarProps {
  marker: number;
}

export const ProgressBar = ({ marker }: ProgressBarProps) => {

  return (
    <Slider.Root
      className="relative flex items-center select-none touch-none w-full h-full"
      min={0}
      max={100}
      step={1}
      defaultValue={[marker]}
    >
      <Slider.Track className="bg-gray-200 relative grow rounded-full h-full cursor-pointer">
        <Slider.Range className={`absolute bg-blue-400 rounded-full h-full ${marker === 0 ? 'bg-transparent' : ''}`} />
      </Slider.Track>
    </Slider.Root>
  );
};
