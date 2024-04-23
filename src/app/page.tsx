import { BestBusiness } from "@/components/BestBusiness";
import { ChooseYourCards } from "@/components/ChooseYourCards";
import { FirstBlock } from "@/components/FirstBlock";
import { Footer } from "@/components/Footer/";
import { Header } from "@/components/Header";
import { Tech } from "@/components/Tech";
import { Team } from "@/components/Team";
import { CounterData } from "@/components/CounterData"; //para cuando tengamos varios clientes (opcional)

export default function Home() {
  return (
    <>
      <Header />
      <FirstBlock />
      {/* <CounterData /> */}
      <BestBusiness />
      {/* <ChooseYourCards /> */}
      <Team />
      <Tech />
      <Footer />
    </>
  )
}