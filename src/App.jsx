import { useState } from "react";

import AnimeTrending from "./conponents/AnimeTrending";
import Header from "./conponents/Header";
import MainWrapper from "./conponents/MainWrapper";
import ShowTime from "./conponents/ShowTime";
import Title from "./conponents/Title";
import Sidebar from "./conponents/Sidebar";
import Footer from "./conponents/Footer";

function App() {
  // Trạng thái đóng / mở menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <Header
        onMenuClick={() => setIsMenuOpen(true)}
      />

      {/* SIDEBAR */}
      <Sidebar
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      {/* NỘI DUNG */}
      <AnimeTrending />

      <Title />

      <MainWrapper />

      <ShowTime />

      <Footer/>
    </>
  );
}

export default App;