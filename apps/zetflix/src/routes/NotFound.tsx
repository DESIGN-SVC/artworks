import { Link } from "react-router-dom";
import { Button } from "../components/ui";
import { NotFound as NotFoundIcon } from "../icons";

export const NotFound = () => (
  <main className="flex flex-1 flex-col items-center gap-8 pb-16 pt-8 md:pt-12">
    <NotFoundIcon alt="" className="h-64 w-[19.375rem] md:h-auto md:w-auto" />
    <div className="flex w-full max-w-xs flex-col items-center gap-4 md:max-w-full">
      <h2 className="text-[2rem] font-bold text-gray-900">Ops...</h2>
      <p className="text-center text-xl text-gray-900">
        Parece que essa página não existe ou não está mais disponível
      </p>
    </div>
    <Button asChild className="h-12 max-w-[13.875rem] py-0" theme={"secondary"}>
      <Link to={"/"}>Voltar ao início</Link>
    </Button>
  </main>
);
