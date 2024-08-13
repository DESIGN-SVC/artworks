import { cx } from "cva";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Hero } from "./Hero";

export default function LoginPage() {
  return (
    <main
      className={cx([
        "w-full bg-white",
        "md:bg-bgTablet md:bg-right md:bg-no-repeat",
        "md:bg-cover lg:bg-contain",
      ])}
    >
      <section className="container min-h-screen w-full flex flex-col justify-between xl:py-3">
        <Header />
        <Hero />
        <Footer />
      </section>
    </main>
  );
}
