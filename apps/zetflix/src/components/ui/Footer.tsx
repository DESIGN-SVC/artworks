import { InstagramLogo } from "@phosphor-icons/react";
import { Brand, Facebook } from "../../icons";

export const Footer = () => (
  <footer className="w-full bg-gray-100">
    <article className="flex w-full flex-col items-center pb-8 pt-[3.75rem] md:flex-row md:p-[3.75rem] xl:mx-auto xl:max-w-7xl xl:px-[5.625rem] xl:py-20">
      <Brand className="h-auto w-32" alt="" />
      <aside className="flex w-full flex-col items-center md:items-end">
        <nav className="my-12 flex items-center gap-2">
          <a
            href="https://www.facebook.com/zedeliverydebebidas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Zé Delivery"
            className="flex h-[3.125rem] w-[3.125rem] items-center justify-center rounded-lg bg-gray-900 text-yellow-100"
          >
            <Facebook />
          </a>
          <a
            href="https://www.instagram.com/zedelivery/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Zé Delivery"
            className="flex h-[3.125rem] w-[3.125rem] items-center justify-center rounded-lg bg-gray-900 text-yellow-100"
          >
            <InstagramLogo size={24} weight="bold" />
          </a>
        </nav>
        <p className="text-gray-900">
          © {new Date().getFullYear()} Zé Delivery - Todos os direitos
          reservados
        </p>
      </aside>
    </article>
  </footer>
);
