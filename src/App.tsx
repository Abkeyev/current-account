import React from "react";
import {
  Banner,
  Online,
  Benefits,
  CallUs,
  Order,
  Useful,
  Footer,
  Additional,
  Documents,
} from "./components";
import "./App.css";
import { useTranslation } from "react-i18next";
import { animateScroll } from "react-scroll";

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = React.useState(i18n.language ? i18n.language : "ru");
  const orderRef: any = React.useRef(null);

  const handleLangChange = (lang: string) => {
    setLang(lang);
    i18n.changeLanguage(lang);
  };

  const scrollToOrderRef = () => {
    console.log(orderRef);
    animateScroll.scrollTo(orderRef.current.offsetTop);
  };

  return (
    <div>
      <Banner
        scrollToOrder={scrollToOrderRef}
        lang={lang}
        changeLang={handleLangChange}
      />
      <Online lang={lang} />
      <Benefits />
      <Additional />
      <Order scrollToOrder={scrollToOrderRef} refProp={orderRef} />
      <Documents lang={lang} />
      <Useful />
      <CallUs />
      <Footer />
    </div>
  );
}

export default App;
