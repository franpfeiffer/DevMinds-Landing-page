import { BestBusiness } from "@/components/BestBusiness";
import { ChooseYourCards } from "@/components/ChooseYourCards";
import { FirstBlock } from "@/components/FirstBlock";
import { Footer } from "@/components/Footer/";
import { Header } from "@/components/Header";
import { Tech } from "@/components/Tech";
import { Team } from "@/components/Team";

export default function Home() {
  return (
    <>
      <Header />
      <FirstBlock />
      <BestBusiness />
      {/* <ChooseYourCards /> */}
      <Team />
      <Tech />
      <Footer />
    </>
  )
}
