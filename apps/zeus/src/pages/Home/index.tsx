import { cx } from "cva";
import { AudioPlayer } from "../../components";

export const HomePage = () => {
  return (
    <div
      className={cx([
        "flex flex-row bg-[#000] h-screen flex-wrap",
        "gap-2.5 w-full",
      ])}
    >
      <div className="w-[31.25rem] bg-white flex flex-col p-5 justify">
        <AudioPlayer audioSrc="https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3" />
      </div>
    </div>
  );
};

export default HomePage;
