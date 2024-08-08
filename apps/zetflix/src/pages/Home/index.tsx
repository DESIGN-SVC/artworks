import { Play } from "@phosphor-icons/react";
import { cx } from "cva";
import { Link } from "react-router-dom";
import Ep1Semtexto from "~/assets/image/ep-1-sem-texto.jpg";
import { ZeTeInforma } from "~/icons";
import { apiVideos } from "~/services";
import { CarrouselGeneric, Button } from "~/components";

// export async function loader() {
//   const token = await localStorage.getItem("token");
//   if (!token) {
//     return redirect("/");
//   }
//   return null;
// }

export default function HomePage() {
  return (
    <section className="w-full flex-1">
      <main
        className={cx([
          "flex w-full justify-center px-[1.875rem]",
          "md:px-14 xl:mx-auto xl:max-w-7xl xl:px-[5.75rem] xl:py-3",
        ])}
      >
        <article
          style={{ backgroundImage: `url(${Ep1Semtexto})` }}
          className={cx([
            "w-full max-w-[562px] h-[33.25rem] my-6 p-8",
            "flex flex-col justify-end gap-[1.875rem]",
            "bg-cover bg-[-388px_0px]",
            "relative z-10 overflow-hidden rounded-[1.25rem]",
            'before:absolute before:inset-0 before:bg-[linear-gradient(180deg,rgba(0,0,0,0.13)_0%,rgba(0,0,0,0.79)_100%)] before:content-[""]',
            "md:h-[33.25rem] md:max-w-[44.875rem] md:bg-[-50px_0px]",
            "xl:max-w-[68.75rem] xl:bg-cover xl:bg-center",
          ])}
        >
          <ZeTeInforma
            className="z-10 h-[4.688rem] w-[6.125rem] xl:h-auto xl:w-[10.688rem]"
            alt=""
          />
          <div className="z-10 flex flex-col gap-2 text-white">
            <h2 className="text-xl font-bold">
              {apiVideos.slice(0, 1).map((video) => video.title)}
            </h2>
            <p className="w-full max-w-xs md:max-w-full">
              {apiVideos.slice(0, 1).map((video) => video.summary)}
            </p>
          </div>
          <Button asChild className="z-10 flex max-w-[10.875rem]">
            <Link to={`/player/${apiVideos[0].id}`}>
              <Play size={24} weight="fill" />
              <span className="flex-1 text-center">Assistir</span>
            </Link>
          </Button>
        </article>
      </main>
      <article className="w-full bg-gray-50">
        <div
          className={cx([
            "relative w-full pb-16 pl-[1.875rem] pt-8 md:pl-[3.625rem]",
            "after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-[150px]",
            'to-transparent after:h-full after:from-gray-50 after:content-[""]',
            "before:absolute before:right-0 before:top-0 before:z-10 after:bg-gradient-to-r",
            ' before:h-full before:w-[100px] before:bg-gradient-to-r before:content-[""]',
            "before:hidden before:from-transparent before:to-gray-50 after:hidden md:after:block",
            "md:before:block",
            "xl:mx-auto xl:max-w-full xl:px-[5.75rem] xl:before:right-20",
            "3xl:max-w-[1820px] 3xl:px-0  3xl:before:hidden 3xl:after:hidden",
          ])}
        >
          <h3 className="mb-6 text-2xl font-bold">Temporada de dicas</h3>
          <CarrouselGeneric />
        </div>
      </article>
    </section>
  );
}
