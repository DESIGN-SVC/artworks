import { cx } from "cva";
import { Attribute } from "../../components/Attribute";

export const HomePage = () => {

  const arr = [
    {
      title: "Frases",
      item: [
        {
          text: "Olá, mundo!",
        },
        {
          text: "Bem vindo ao Zeus!",
        }
      ],
    },
    {
      title: "Características",
      item: [
        {
          text: "Sotaque nordestino",
        },
        {
          text: "Muito bom",
        }
      ],
    },
  ];

  return (
    <div
      className={cx([
        "flex flex-row flex-wrap",
        "gap-2.5 w-full",
      ])}
    >
      {
        arr.map((item, index) => (
          <Attribute {...item} index={index} />
        ))
      }
    </div >
  )
}

export default HomePage;
