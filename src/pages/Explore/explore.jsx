import React from "react";

//Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function explore() {
  return (
    <div>
      <Navbar />
      <div className="text-center">
        <h1 className="text-4xl mt-[5%] text-center text-black uppercase">
          Let's see anoter people experiences.
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default explore;
