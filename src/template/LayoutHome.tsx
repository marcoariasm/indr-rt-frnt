import { type ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutHomeProps = {
  children: ReactNode;
};

function LayoutHome({ children }: LayoutHomeProps) {
  return (
    <>
      <Header />
      <img
        src="/assets/blur-asset-violet.svg"
        alt="fondo"
        className="absolute -z-10"
      />
      <img
        src="/assets/blur-asset-aqua.svg"
        alt="fondo"
        className="absolute right-0 -z-10"
      />
      {children}
      <Footer />
    </>
  );
}

export default LayoutHome;
