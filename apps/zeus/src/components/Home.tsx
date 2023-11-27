import { VideoButton } from ".";
import { ConcentrixWebhelpLogo, Robot } from "../icons";

export const Home = () => {
  return (
    <div className="relative flex flex-col items-center px-[30px] w-full min-h-screen gap-[30px] bg-gradient-to-r from-blue-900 to-blue-1100">
      <ConcentrixWebhelpLogo className="w-full min-h-[97px] py-[40px]" />
      <div className="flex flex-col gap-[20px] font-zen-dots">
        <h1 className="flex flex-row gap-[10px] items-center text-blue-500 text-[20px]">
          ZEUS
          <span className="text-blue-800 text-[15px] py-[6px] px-[14px] bg-gradient-to-r from-blue-100 to-blue-350 rounded-[6px]">
            PERSONAS
          </span>
        </h1>
        <h2 className="text-white text-center text-[38px] leading-tight">
          AGENTE
          <br />
          DIGITAL
          <br />
          DE VOZ
        </h2>
      </div>
      <Robot className="h-full" />
      <VideoButton />
    </div>
  );
};
