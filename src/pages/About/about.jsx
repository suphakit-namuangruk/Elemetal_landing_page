import React from "react";

//Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function about() {
  return (
    <div>
      <Navbar />
      <div className="text-center">
        <h1 className="text-4xl mt-[5%] text-center text-black uppercase">
          About us
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default about;
