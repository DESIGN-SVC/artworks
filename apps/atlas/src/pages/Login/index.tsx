import { cx } from "cva";
import { AtlasLogo, Background } from "../../icons";
import { LoginForm } from "../../components";

export const Login = () => {
  return (
    <div
      className={cx([
        "flex flex-col min-h-screen",
        "overflow-hidden",
        "lg:flex-row lg:h-screen",
      ])}
    >
      <section
        className={cx([
          "flex flex-col w-full items-center",
          "relative bg-gradient-to-t from-blue-800 to-blue-700",
          "py-[1.875rem] px-[0.938rem] gap-10",
          "lg:h-full lg:items-start",
          "lg:py-[3.75rem] lg:px-[7.875rem] lg:justify-between",
        ])}
      >
        <Background
          className={cx([
            "absolute top-[-0.938rem] right-[-3.438rem]",
            "w-28 h-auto",
            "lg:w-auto lg:h-[110%] lg:right-[-5rem] lg:top-[-1.875rem]",
          ])}
        />
        <AtlasLogo className="w-[8.813rem] lg:w-[11.125rem]" />
        <h1 className={cx([
          "relative text-center leading-tight",
          "text-[1.5rem] text-white",
          "lg:text-[2.125rem] lg:text-left"
          ])}
        >
      
          Seja <br className="hidden lg:block" />
          bem-vindo (a)
          <br />
          <span className="font-bold lg:text-[2.5rem]">ao Atlas.</span>
        </h1>
        <h5 className={cx([
          "hidden lg:block", 
          "text-white text-[0.625rem]"
          ])}
        >
          Plataforma desenvolvida <br />
          pela <b>Webhelp + Concentrix</b>
        </h5>
      </section>
      <LoginForm />
    </div>
  );
};

export default Login;
