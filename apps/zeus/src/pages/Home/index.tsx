import { cx } from "cva";
import { Home } from "../../components";

export const HomePage = () => {
  return (
    <div
      className={cx(["flex flex-row bg-[#000] h-screen flex-wrap", "w-full"])}
    >
      <Home />
    </div>
  );
};

export default HomePage;
