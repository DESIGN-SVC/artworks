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
      <AudioPlayer AudioSrc="https://65381g.ha.azioncdn.net/f/1/a/6/audiosonline-audios-online-demo-volnei-b07fd250.mp3" />
    </div>
  );
};

export default HomePage;
