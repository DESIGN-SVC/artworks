import { cx } from "cva";
import { FilledB, TransparentB } from "../../icons";
import { LoginForm } from "../../components";

export const Login = () => {
  return (
    <div
      className={cx([
        "flex flex-col min-h-screen",
        "overflow-hidden",
        "xl:flex-row xl:min-h-[39.875rem] xl:h-screen",
      ])}
    >
      <section
        className={cx([
          "flex flex-col w-full",
          "relative bg-gradient-to-t from-[#001119] to-blue-900",
          "py-[1.875rem] px-[0.938rem]",
          "xl:py-[3.75rem] xl:px-[7.875rem] xl:justify-center xl:relative",
        ])}
      >
        <div>
          <FilledB
            className={cx([
              "hidden",
              "xl:block xl:absolute xl:top-0 xl:right-0",
              "xl:h-[50%] xl:w-auto",
            ])}
          />
          <TransparentB
            className={cx([
              "hidden",
              "xl:block xl:absolute xl:bottom-0 xl:right-0",
              "xl:h-[48%] xl:w-auto xl:mt-[0.688rem]",
            ])}
          />
        </div>

        <div
          className={cx([
            "flex flex-col w-full items-center gap-10",
            "xl:h-full xl:items-start",
            "xl:justify-start xl:self-end",
            "xl:max-w-[37.5rem] xl:max-h-[43.75rem] xl:gap-0",
          ])}
        >
          <div className="flex flex-col">
            <h1 className="text-[4.625rem] text-white font-poppins italic font-bold leading-none pt-2 xl:pt-20 ">
              BOSS
            </h1>
            <h2 className="text-sm text-white font-sora font-bold xl:pb-20 ">
              Back office services system
            </h2>
          </div>
          <h3
            className={cx([
              "text-center leading-tight",
              "text-[1.5rem] text-white",
              "xl:text-[2.125rem] xl:text-left xl:pb-20",
            ])}
          >
            Seja <br className="hidden xl:block" />
            bem-vindo (a)
            <br />
            <span className="font-bold text-3xl xl:text-[2.5rem]">
              ao Boss.
            </span>
          </h3>
          <h5 className="hidden xl:block text-white text-[0.625rem]">
            Plataforma desenvolvida <br />
            pela <b>Concentrix + Webhelp</b>
          </h5>
        </div>
      </section>
      <LoginForm />
    </div>
  );
};

export default Login;
