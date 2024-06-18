import { cx } from "cva";
import { User } from "./User";

import camera3d from "~/assets/image/camera-3D.png";
import palette from "~/assets/image/palette.png";
import monitor from "~/assets/image/monitor.png";
import cameraPhotos from "~/assets/image/camera-to-take-photos.png";
import { Link } from "react-router-dom";
import { Carousel } from "~/components";
import { useSession } from "~/hooks";

export const Home = () => {
  const { authorized } = useSession();
  console.log(authorized);
  const name = "Moises";

  const linkProjects = [
    {
      title: "Audiovisual",
      description: "Productions by Webhelp Studio",
      icon: camera3d,
    },
    {
      title: "Branding",
      description: "Design system and brand",
      icon: palette,
    },
    {
      title: "Photography",
      description: "Productions by Webhelp Studio",
      icon: cameraPhotos,
    },
    {
      title: "Apps",
      description: "Websites, systems and others",
      icon: monitor,
    },
  ];

  return (
    <main className="flex-1 container py-5 flex flex-col gap-5">
      <User name={name} />
      <ul className="flex flex-col items-center gap-3">
        {linkProjects.map(({ title, description, icon }) => (
          <li key={title} className="w-full">
            <Link
              to={title}
              className={cx(
                [
                  "w-full max-w-xl h-28 p-5 mx-auto z-0",
                  "flex flex-col justify-center gap-1",
                  "transition-all duration-500 ease-in-out",
                  "rounded-xl overflow-hidden relative",
                  "hover:scale-105 hover:shadow-xl",
                ],
                {
                  "bg-gradient-btn-audiovisual": title === "Audiovisual",
                  "bg-gradient-btn-branding": title === "Branding",
                  "bg-gradient-btn-photography": title === "Photography",
                  "bg-gradient-btn-apps": title === "Apps",
                },
              )}
            >
              <h3 className="text-white font-bold text-lg">{title}</h3>
              <p className="text-white font-bold text-xs">{description}</p>

              <img
                src={icon}
                alt={title}
                className={cx("absolute h-auto", {
                  "-top-[1.875rem] -right-10 scale-x-[-1] w-[13.75rem]":
                    title === "Audiovisual",
                  "w-[8.75rem] -right-3": title === "Branding",
                  "w-40 -right-7": title === "Photography",
                  "w-40 -right-8": title === "Apps",
                })}
              />
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-4">
        <h4 className="text-selago-900 font-medium">Últimos adicionados</h4>

        <Carousel.Root>
          {[1, 2, 3, 4, 5].map((item) => (
            <Carousel.Video
              key={item}
              indexVideo={item - 1}
              title="Zé te informa"
              src={
                "https://storage.googleapis.com/gs-design-zetflix-static-website/video-2.mp4"
              }
            />
          ))}
        </Carousel.Root>
      </div>
    </main>
  );
};
