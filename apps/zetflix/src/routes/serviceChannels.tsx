import { ChatsCircle, Clock } from "@phosphor-icons/react";
import { cx } from "cva";
import { Link } from "react-router-dom";
import { Button } from "../components/ui";
import { WhatsApp } from "../icons";

const contact = [
  {
    icon: <WhatsApp />,
    title: "WhatsApp",
    textBtn: "Entrar em contato via WhatsApp",
    link: "https://api.whatsapp.com/send?phone=5541984660503",
  },
  {
    icon: <ChatsCircle size={40} weight="regular" />,
    title: "Chat",
    textBtn: "Entrar em contato via Chat",
    link: "https://fenixclient.servicesdigital.com.br/chat/QWZUb1Ivd1pwcnZqL1o3NUJRWTBSZz09/RDJKSGZTSlVBdnJHeXQwd1FsWWFEUT09/YURmWS9SY2NGaWxGcFlqNmlXaTI5Zz09/cliente",
  },
];
export const ServicesChannels = () => (
  <main className="flex flex-1 bg-white">
    <div
      className={cx([
        "flex w-full flex-col items-center px-[1.875rem] pb-16 pt-8",
        "md:mx-auto md:max-w-[40.5rem] md:px-0 xl:max-w-[58.75rem]",
      ])}
    >
      <h1 className="w-full text-left text-2xl font-bold text-gray-900 md:text-[2rem]">
        Canais de Atendimento
      </h1>
      <ul
        className={cx([
          "flex w-full flex-col items-center gap-6 pb-12 pt-6",
          "xl:justify-center xl:pb-12",
          "md:flex-row md:pb-24",
        ])}
      >
        {contact.map(({ icon, title, link, textBtn }, index) => (
          <li
            key={index}
            className="flex w-full max-w-[19.25rem] flex-none flex-col gap-6 rounded-[1.25rem] bg-gray-900 p-6"
          >
            <header className="flex w-full items-center gap-6">
              <div className="flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-xl bg-yellow-100">
                {icon}
              </div>
              <h2 className="text-[2rem] font-bold text-yellow-100">{title}</h2>
            </header>
            <div className="flex gap-4 rounded-lg bg-gray-700 p-4 text-gray-200">
              <Clock size={30} weight="regular" />
              <p className="w-full max-w-[9.5rem] text-sm">
                Horário de atendimento: Domingo à Domingo das 10:00 às 02:00.
              </p>
            </div>
            <a
              href={link}
              className="w-full rounded-full bg-yellow-100 px-11 py-3 text-center text-xl font-medium"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={title}
            >
              {textBtn}
            </a>
          </li>
        ))}
      </ul>
      <Button asChild theme={"secondary"} className="max-w-[13.875rem] text-xl">
        <Link to={"/"}>Voltar ao início</Link>
      </Button>
    </div>
  </main>
);
