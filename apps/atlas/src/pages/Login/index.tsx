import { cx } from "cva";
import { AtlasLogo, Background } from "../../icons";
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
          "relative bg-gradient-to-t from-blue-800 to-blue-700",
          "py-[1.875rem] px-[0.938rem]",
          "xl:py-[3.75rem] xl:px-[7.875rem] xl:justify-center",
        ])}
      >
        <Background
          className={cx([
            "absolute top-[-0.938rem] right-[-3.438rem]",
            "w-28 h-auto",
            "xl:w-auto xl:h-[110%] xl:right-[-5rem] xl:top-[-1.875rem]",
          ])}
        />
        
        <div className={cx([
          "flex flex-col w-full items-center",
          "gap-10",
          "xl:h-full xl:items-start",
          "xl:justify-between xl:self-end", 
          "xl:max-w-[37.5rem] xl:max-h-[43.75rem] ",
        ])}
        >
          <AtlasLogo className="w-[8.813rem] xl:w-[11.125rem] xl:relative" />
          
          <h1 className={cx([
            "relative text-center leading-tight",
            "text-[1.5rem] text-white",
            "xl:text-[2.125rem] xl:text-left"
            ])}
          >
        
            Seja <br className="hidden xl:block" />
            bem-vindo (a)
            <br />
            <span className="font-bold xl:text-[2.5rem]">ao Atlas.</span>
          </h1>
          <h5 className={cx([
            "hidden xl:block", 
            "text-white text-[0.625rem]"
            ])}
          >
            Plataforma desenvolvida <br />
            pela <b>Webhelp + Concentrix</b>
          </h5>
          </div>
      </section>
      <LoginForm />
    </div>
  );
};

export default Login;
