import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import NavbarTop from "./components/NavbarTop";
import FooterBot from "./components/FooterBot";
import NotFound from "./pages/NotFound";
import Dashboard from "./admin/Dashboard";
import FreeFire from "./admin/Freefire";
import Mobilelegend from "./admin/Mobilelegend";
import Mobilelegend2 from "./admin/Mobilelegend2";
import Mobilelegend3 from "./admin/Mobilelegend3";
import Mobilelegend5 from "./admin/Mobilelegend5";
import Mobilelegend6 from "./admin/Mobilelegend6";
import Mobilelegend7 from "./admin/Mobilelegend7";
import Mobilelegend8 from "./admin/Mobilelegend8";
import Mobilelegend9 from "./admin/Mobilelegend9";
import Flashsale from "./admin/Flashsale";
import FlashSale from "./pages/order/FlashSale";
import Mobilelegends from "./pages/order/Mobilelegends";
import Mobilelegends_2 from "./pages/order/Mobilelegends2";
import Mobilelegends_3 from "./pages/order/Mobilelegends3";
import Mobilelegends_4 from "./pages/order/Mobilelegends4";
import Mobilelegends_5 from "./pages/order/Mobilelegends5";
import Mobilelegends_6 from "./pages/order/Mobilelegends6";
import Mobilelegends_7 from "./pages/order/Mobilelegends7";
import Mobilelegends_8 from "./pages/order/Mobilelegends8";
import Mobilelegends_9 from "./pages/order/Mobilelegends9";
import SmileOne from "./pages/order/SmileOne";
import Category from "./admin/Category";
import Login from "./admin/Login";
import Freefire from "./pages/order/Freefire";
import TermsAndCondition from "./pages/TermAndCondition";
import Tentang from "./pages/Tentang";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Qris from "./admin/Qris";
import 'react-bootstrap';
import Bank from "./admin/Bank";
import Ewallet from "./admin/Ewallet";
import Pubgmobile from "./pages/order/Pubgmobile";
import PubgMobile from "./admin/Pubgmobile";
import HiggsDomino from "./admin/Higgsdomino";
import Higgsdomino from "./pages/order/Higgsdomino";
import Genshinimpact from "./admin/Genshinimpact";
import GenshinImpact from "./pages/order/Genshinimpact";
import BannerSetting from "./admin/BannerSetting";
import PopUp from "./admin/PopUp";
import WhatsappSetting from "./admin/WhatsappSetting";
import Starlightadmin from "./admin/Starlight";
import Starlight from "./pages/order/Starlight";
import Twilight from "./pages/order/Twilight";
import TwilightAdmin from "./admin/Twilight";
import Smileone from "./admin/Smileone";
import GarenaShell from "./pages/order/GarenaShell";
import Garenashell from "./admin/Garenashell";
import Unipinmalay from "./admin/Unipinmalay";
import Unipinbrazil from "./admin/Unipinbrazil";
import UnipinBrazil from "./pages/order/UnipinBrazil";
import UnipinMalay from "./pages/order/UnipinMalay";
import Youtube from "./pages/order/Youtube";
import Netflix from "./pages/order/Netflix";
import Spotify from "./pages/order/Spotify";
import WeTV from "./pages/order/WeTV";
import Canva from "./pages/order/Canva";
import Vidio from "./pages/order/Vidio";
import BsStation from "./pages/order/BsStation";
import GetContact from "./pages/order/GetContact";
import YouTube from "./admin/Youtube";
import NetFlix from "./admin/Netflix";
import SpoTify from "./admin/Spotify";
import WeTv from "./admin/WeTv";
import CanvaPro from "./admin/Canva";
import ViDio from "./admin/Vidio";
import BSstation from "./admin/BSstation";
import Getcontact from "./admin/Getcontact";

function App() {
  return (
    <Router>
      <NavbarTop />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/Terms" element={<TermsAndCondition />} />
        <Route path="/Tentang" element={<Tentang />} />
        <Route path="/Tentang" element={<Login />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/admin/whatsapp-setting" element={<WhatsappSetting />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/banner-setting" element={<BannerSetting />} />
        <Route path="/admin/pop-up" element={<PopUp />} />
        <Route path="/admin/qris" element={<Qris />} />
        <Route path="/admin/bank" element={<Bank />} />
        <Route path="/admin/e-wallet" element={<Ewallet />} />
        <Route path="/order/free-fire" element={<Freefire />} />
        <Route path="/admin/free-fire" element={<FreeFire/>} />
        <Route path="/order/pubg-mobile" element={<Pubgmobile/>} />
        <Route path="/admin/pubg-mobile" element={<PubgMobile/>} />
        <Route path="/admin/higgs-domino" element={<HiggsDomino/>} />
        <Route path="/order/higgs-domino" element={<Higgsdomino/>} />
        <Route path="/admin/genshin-impact" element={<Genshinimpact/>} />
        <Route path="/order/genshin-impact" element={<GenshinImpact/>} />
        <Route path="/admin/dashboard-admin" element={<Dashboard />} />
        <Route path="/admin/category-game" element={<Category />} />
        <Route path="/admin/mobile-legend" element={<Mobilelegend />} />
        <Route path="/admin/mobile-legend" element={<Mobilelegend />} />
        <Route path="/admin/flash-sale" element={<Flashsale />} />
        <Route path="/admin/starlight" element={<Starlightadmin />} />
        <Route path="/admin/twilight" element={<TwilightAdmin />} />
        <Route path="/admin/mobile-legend-2" element={<Mobilelegend2 />} />
        <Route path="/admin/mobile-legend-3" element={<Mobilelegend3 />} />
        <Route path="/admin/mobile-legend-5" element={<Mobilelegend5 />} />
        <Route path="/admin/mobile-legend-6" element={<Mobilelegend6 />} />
        <Route path="/admin/mobile-legend-7" element={<Mobilelegend7 />} />
        <Route path="/admin/mobile-legend-8" element={<Mobilelegend8 />} />
        <Route path="/admin/mobile-legend-9" element={<Mobilelegend9 />} />
        <Route path="/admin/smile-one" element={<Smileone />} />
        <Route path="/admin/garena-shell" element={<Garenashell />} />
        <Route path="/admin/unipin-brazil" element={<Unipinbrazil />} />
        <Route path="/admin/unipin-malay" element={<Unipinmalay />} />
        <Route path="/admin/youtube" element={<YouTube />} />
        <Route path="/admin/netflix" element={<NetFlix />} />
        <Route path="/admin/spotify" element={<SpoTify />} />
        <Route path="/admin/wetv" element={<WeTv />} />
        <Route path="/admin/canva" element={<CanvaPro />} />
        <Route path="/admin/vidio" element={<ViDio />} />
        <Route path="/admin/bsstation" element={<BSstation />} />
        <Route path="/admin/getcontact" element={<Getcontact />} />
        <Route path="/order/flash-sale" element={<FlashSale />} />
        <Route path="/order/mobile-legends" element={<Mobilelegends />} />
        <Route path="/order/mobile-legends-2" element={<Mobilelegends_2 />} />
        <Route path="/order/mobile-legends-3" element={<Mobilelegends_3 />} />
        <Route path="/order/starlight" element={<Starlight />} />
        <Route path="/order/twilight" element={<Twilight />} />
        <Route path="/order/mobile-legends-4" element={<Mobilelegends_4 />} />
        <Route path="/order/mobile-legends-5" element={<Mobilelegends_5 />} />
        <Route path="/order/mobile-legends-6" element={<Mobilelegends_6 />} />
        <Route path="/order/mobile-legends-7" element={<Mobilelegends_7 />} />
        <Route path="/order/mobile-legends-8" element={<Mobilelegends_8 />} />
        <Route path="/order/mobile-legends-9" element={<Mobilelegends_9 />} />
        <Route path="/order/smile-one" element={<SmileOne />} />
        <Route path="/order/garena-shell" element={<GarenaShell />} />
        <Route path="/order/unipin-brazil" element={<UnipinBrazil />} />
        <Route path="/order/unipin-malay" element={<UnipinMalay />} />
        <Route path="/order/youtube-premium" element={<Youtube />} />
        <Route path="/order/netflix" element={<Netflix />} />
        <Route path="/order/spotify" element={<Spotify />} />
        <Route path="/order/wetv" element={<WeTV />} />
        <Route path="/order/canva" element={<Canva />} />
        <Route path="/order/vidio" element={<Vidio/>} />
        <Route path="/order/bs-station" element={<BsStation/>} />
        <Route path="/order/getcontact" element={<GetContact/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterBot />
    </Router>
  );
}

export default App;
