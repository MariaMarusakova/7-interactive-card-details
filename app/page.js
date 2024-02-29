import Image from "next/image";
import CreditCardFront from "./components/CreditCardFront";
import CreditCardBack from "./components/CreditCardBack";
import MainPage from "./components/MainPage";

export default function Home() {
  return (
    <main className="block md:flex min-h-screen">
      <div className="flex md:min-h-screen h-56 flex-col items-center justify-between bg-black bg-cover md:w-1/3 " style={{ backgroundImage: "url(/bg-main-desktop.png)" }}>
        <CreditCardBack />
        <CreditCardFront />
      </div>
      <div className="flex min-h-screen flex-col items-center justify-between bg-white md:w-2/3">
        <MainPage />
      </div>
    </main>
  );
}
