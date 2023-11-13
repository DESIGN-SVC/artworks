import { cx } from "cva";
import { AtlasLogo, Background, WebhelpConcentrixLogo } from "../../icons";

export const Login = () => {
  return (
    <div
      className={cx([
        "flex flex-col w-full h-screen",
        "overflow-hidden",
        "lg:flex-row",
      ])}
    >
      <section
        className={cx([
          "flex flex-col w-full h-[215px] items-center",
          "relative bg-gradient-to-t from-blue-800 to-blue-700",
          "py-[30px] px-[15px] gap-[40px]",
          "lg:h-full lg:items-start",
          "lg:py-[60px] lg:px-[126px] lg:justify-between",
        ])}
      >
        <Background
          className={cx([
            "absolute top-[-15px] right-[-55px]",
            "w-[112px] h-auto",
            "lg:w-auto lg:h-[110%] lg:right-[-80px] lg:top-[-30px]",
          ])}
        />
        <AtlasLogo className="w-[141px] lg:w-[178px]" />
        <h1 className="text-center text-[1.5rem] text-white lg:text-[34px] lg:text-left">
          Seja 
          <br className="hidden lg:block" /> b
          em-vindo (a)
          <br />
          <span className="font-bold lg:text-[40px]">ao Atlas.</span>
        </h1>
        <h5 className={cx(["hidden lg:block", "text-white text-[10px]"])}>
          Plataforma desenvolvida <br />
          pela <b>Webhelp + Concentrix</b>
        </h5>
      </section>

      <section
        className={cx([
          "flex flex-col w-full h-full",
          "bg-blue-900 relative p-[20px]",
          "justify-center items-center",
          "lg:p-[40px]",
        ])}
      >
        <div
          className={cx([
            "flex flex-col w-full h-full",
            "max-w-[365px] max-h-[469px]",
            "bg-white gap-[20px] p-[30px] rounded-[10px]",
            "lg:max-w-[600px] lg:max-h-[700px] lg:p-[70px]",
          ])}
        >
          <WebhelpConcentrixLogo />
          <h2 className="text-blue-950 font-[600] text-[30px] lg:pt-[30px]">
            Login
          </h2>
          <h3 className="text-cool-gray-600">
            Insira seus dados de acesso para prosseguir.
          </h3>
          <form className="flex flex-col gap-[20px] text-cool-gray-600">
            <fieldset className="flex flex-col">
              <label className="text-sm" htmlFor="user">
                Login
              </label>

              <input
                className={cx([
                  "w-full h-[50px]",
                  "border-cool-gray-200 border-[1px]",
                  "lg:w-fit lg:min-w-[320px]",
                ])}
                type="text"
                name="user"
                id="user"
              />
            </fieldset>

            <fieldset className="flex flex-col">
              <label className="text-sm" htmlFor="password">
                Senha
              </label>
              <input
                className={cx([
                  "w-full h-[50px]",
                  "border-cool-gray-200 border-[1px]",
                  "lg:w-fit lg:min-w-[320px]",
                ])}
                type="password"
                name="password"
                id="password"
              />
            </fieldset>
            <button
              className={cx([
                "w-full py-[14px] px-[20px]",
                "bg-blue-1000 rounded-[10px]",
                "text-[18px] font-[500] text-white cursor-pointer",
                "lg:w-[225px]",
              ])}
              type="submit"
            >
              Entrar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
