import { InstagramLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Facebook } from "~/icons";

export const Footer = () => {
  const year = new Date().getFullYear();
  const socialMedia = [
    {
      name: "Facebook Zé Delivery",
      url: "https://www.facebook.com/zedeliverydebebidas",
      icon: <Facebook />,
    },
    {
      name: "Instagram Zé Delivery",
      url: "https://www.instagram.com/zedelivery/",
      icon: <InstagramLogo size={24} weight="bold" />,
    },
  ];
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-8 pb-3 pt-16 md:flex-row-reverse md:justify-between md:pb-14">
      <nav className="flex w-full items-center justify-center gap-2 md:justify-end">
        {socialMedia.map(({ url, name, icon }, index) => (
          <Link
            key={index}
            to={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="h-[3.125rem] h- w-[3.125rem] flex items-center justify-center rounded-lg bg-gray-900 text-yellow-100"
          >
            {icon}
          </Link>
        ))}
      </nav>
      <h6 className="text-gray-300 md:whitespace-nowrap">
        © {year} Zé Delivery - Todos os direitos reservados
      </h6>
    </footer>
  );
};
