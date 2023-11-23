import { WhiteButton } from ".";
import { ConcentrixWebhelpLogo, Robot } from "../icons";

export const Home = () => {
  return (
    <div className="flex flex-col px-[30px] bg-gray-900 w-full h-screen gap-[30px]">
      <ConcentrixWebhelpLogo className="h-[17px]"/>
      <div className="">
        <h1>ZEUS</h1>
        <h2>PERSONAS</h2>
        <h2>
          AGENTE
          <br />
          DIGITAL
          <br />
          DE VOZ
        </h2>
      </div>
      <div className="">
        <Robot />
        <WhiteButton />
      </div>
    </div>
  );
};
