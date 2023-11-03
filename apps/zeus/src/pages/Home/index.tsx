import { Attribute } from "../../components/attribute/Attribute";
import { Check } from "../../icons";

export const HomePage = () => {

  const arr = [
    {
      title: "Frases",
      item: [
        {
          text: "Olá, mundo!",
          icon: <Check />,
        },
        {
          text: "Bem vindo ao Zeus!",
          icon: <Check />,
        }
      ],
    },
    {
      title: "Características",
      item: [
        {
          text: "Sotaque nordestino",
          icon: <Check />,
        },
        {
          text: "Muito bom",
          icon: <Check />,
        }
      ],
    },
  ];


  return (
    <>
      <h1 className="text-9xl w-full text-center text-blue-350 font-trenda">
        Hello World
      </h1>
      <div className="flex flex-row gap-[0.625rem]" >
        {arr.map((item, index) => (
          <Attribute {...item} index={index} />
        ))}
      </div >
    </>
  )
}

export default HomePage;
