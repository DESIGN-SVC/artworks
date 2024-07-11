import { cx } from "cva";
import { User } from "./User";

import camera3d from "~/assets/image/camera-3D.png";
import palette from "~/assets/image/palette.png";
import monitor from "~/assets/image/monitor.png";
import cameraPhotos from "~/assets/image/camera-to-take-photos.png";
import { Link, useNavigate } from "react-router-dom";
import { Carousel, Loading } from "~/components";
import { useLogout, useProfileQuery, useSession, useTheme } from "~/hooks";
import { useEffect } from "react";

export const Home = () => {
  const { user, setUser, accessToken } = useSession();
  const { data: profile, isSuccess, isLoading, isError } = useProfileQuery();
  const { setTheme } = useTheme();
  const navigate = useNavigate();
  const logout = useLogout();

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

  useEffect(() => {
    document.title = "Artworks | home";
    if (accessToken && isSuccess) {
      setUser(profile.user);
      console.log(profile.user.theme);
      setTheme(profile.user.theme);
    }
    if (isError) {
      navigate("/");
      logout(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, accessToken, isError]);

  if (isLoading) return <Loading />;

  return (
    <main
      className={cx([
        "container py-5 bg-white",
        "transition-all duration-500 ease-in-out",
        "flex flex-col gap-5 flex-1",
        "dark:bg-violet-1000",
      ])}
    >
      <User name={user.name as string} avatar={user.avatar_url} />
      <ul
        className={cx([
          "flex flex-col items-center gap-3",
          "xl:flex-row xl:gap-5",
        ])}
      >
        {linkProjects.map(({ title, description, icon }) => (
          <li key={title} className="w-full xl:w-fit">
            <Link
              to={title}
              className={cx(
                [
                  "w-full max-w-xl h-28 p-5 mx-auto z-0",
                  "flex flex-col justify-center gap-1",
                  "transition-all duration-500 ease-in-out",
                  "rounded-xl overflow-hidden relative",
                  "hover:scale-105 hover:shadow-xl",
                  "xl:h-52 xl:mx-0 xl:flex-none xl:justify-end",
                  "xl:w-60",
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
        <h4 className="text-selago-900 font-medium dark:text-white">
          Últimos adicionados
        </h4>

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
